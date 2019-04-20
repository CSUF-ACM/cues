import React from 'react';
import { StyleSheet, 
	Text, 
	View, 
	TextInput, 
	TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import Datastore from 'react-native-local-mongodb';
var habitDb = new Datastore({filename: 'habits', autoload: true});
var habitLogDb = new Datastore({filename: 'logs', autoload: true});
var willpowerDb = new Datastore({filename: 'willpower', autoload: true});
import template from '../styles/Template';

export default class HabitQuiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allHabits: [],
            habitIndex: 0,
            currentHabit: {},
            quizOver: false,
            score: 0,
            willpower: 0,
        };
    }

    componentDidMount(){
        habitDb.loadDatabase(function(err){
            habitDb.find({}, function(err, docs){
                this.setState({
                    allHabits: docs,
                    currentHabit: docs[0],
                });
            }.bind(this));
        }.bind(this));
    }

    render() {

        var quizView = (
            <SafeAreaView style={{flex: 1}}>
            <View style={template.mainBackground}>
                <Text style={template.h2Text}>
                    Did you {this.state.currentHabit.title} today?
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>this.answer(true)} style={template.button}>
                        <Text style={template.buttonText}>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.answer(false)} style={template.button}>
                        <Text style={template.buttonText}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        );

        var resultsView = (
            <SafeAreaView style={{flex: 1}}>
            <View style={template.mainBackground}>
                <Text style={template.h2Text}>Your willpower score for today</Text>
                <Text style={template.h1Text}>{this.state.willpower}!</Text>
                <Text style={template.h2Text}>{this.feedback(this.state.willpower)}</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={template.button}>
                    <Text style={template.buttonText}>OK</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        );
        
        return(this.state.quizOver ? resultsView : quizView);
    }

    answer(did){
        let good = this.state.currentHabit.good;
        let win;
        if (good && did || !good && !did){
            win = true;
            this.setState({
                score: this.state.score +1
            });
        } else{
            win = false;
            this.setState({
                score: this.state.score -1
            });
        }

        habitLogDb.insert({
            habitId: this.state.currentHabit._id,
            win: win,
            date: new Date(),
        });

        let newIndex = this.state.habitIndex + 1;
        this.setState({
            habitIndex: newIndex,
        }, function(){
            if (this.state.habitIndex >= this.state.allHabits.length){
              this.saveWillpower();
            } else{
                this.setState({
                    currentHabit: this.state.allHabits[this.state.habitIndex]
                });
            }
        });
        
    }

    saveWillpower(){
        let willpower = Math.round((this.state.score/this.state.allHabits.length)*100);
        willpowerDb.insert({
            score: willpower,
            date: new Date(),
        });
        this.setState({
            quizOver: true,
            willpower: willpower,        
        });
    }

    feedback(willpower){
        switch(true){
            case (willpower >= 80):
                return 'You are the master of your universe';
            case (willpower >= 60):
                return 'Impressive feat of willpower!';
            case (willpower >= 40):
                return 'You\'re in control today';
            case (willpower >= 20):
                return 'Good work today!';
            case (willpower >= -20):
                return 'Stay on that grind fam';
            case (willpower >= -40):
                return 'Don\'t lose sight of the goal';
            case (willpower >= -60):
                return 'Let\'s see if you can do better tomorrow';
            case (willpower >= -80):
                return 'You done fucked up fam';
            case (willpower >= -100):
                return 'You have lost control to your inner demons';
            default:
                return '';
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});