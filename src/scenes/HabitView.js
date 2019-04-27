import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import Datastore from 'react-native-local-mongodb';
import template from '../styles/Template'

db = new Datastore({filename: 'habits', autoload: true});

export default class HabitView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            habit: {
                title: '',
                _id: '',
            },
        };
    }

    static navigationOptions = ({navigation}) => {
        return{
            title: 'Habit Stats',
        };
    };

    componentDidMount(){
        this.fetchHabit();
    }

    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
            <View style={template.mainBackground}>
            <ScrollView style={{flex: 1}}>

                <Text style={template.h1Text}>{this.state.habit.title}</Text>

                <Text style={template.h2Text}>Streaks</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={template.bodyText}>Current streak: </Text>
                    <Text style={template.bodyText}>0</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={template.bodyText}>Average streak: </Text>
                    <Text style={template.bodyText}>0</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={template.bodyText}>Highest streak: </Text>
                    <Text style={template.bodyText}>0</Text>
                </View>
                
                <Text style={template.h2Text}>Pass Rate</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={template.bodyText}>Charts here</Text>
                </View>

                <TouchableOpacity
                style={template.button}
                onPress={ 
                    () => this.props.navigation.navigate('NewHabitPage', {
                        habitId: this.state.habit._id,
                        onGoBack: this.fetchHabit.bind(this),
                    })
                }
                >
                    <Text style={template.buttonText}>Edit</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
            </SafeAreaView>
        );
    }

    fetchHabit(){
        let id = this.props.navigation.getParam('habitId');
        db.loadDatabase(function(err){
            db.findOne({_id: id}).exec(function(err, doc){
                this.setState({habit: doc});
            }.bind(this));
        }.bind(this));
    }

}