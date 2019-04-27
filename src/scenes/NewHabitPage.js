import React, {Component} from 'react';
import Datastore from 'react-native-local-mongodb';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Switch,
    AsyncStorage
} from 'react-native';
import template from '../styles/Template';

var db = new Datastore({filename:'habits', autoload: true});

type Props = {};
export default class NewHabitPage extends Component<Props> {

    constructor(props){
        super(props)
        this.state={
            title: '',
            good: true,
            description: '',
            created: new Date(),
            editing: false,
            habitId: '',
        }
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('habitId', 'none') == 'none' ? 'New Habit' : 'Edit Habit'
        }
    };

    componentDidMount(){
        let id = this.props.navigation.getParam('habitId', 'none');
        
        if (id != 'none'){
            this.setState({
                editing: true,
                habitId: id,
            });

            this.fetchHabit();
            // db.findOne({_id: id}, function(err, doc){
            //     this.setState({
            //         title: doc.title,
            //         good: doc.good,
            //         description: doc.description,
            //         created: doc.created,
            //     });
            // }.bind(this));
        }
    }

    render() {
        return (
            <View style={template.mainBackground}>
                <Text style={template.h2Text}>Habit title</Text>
                    <TextInput
                    value={this.state.title}
                    style={template.textInput}
                    onChangeText={title => this.setState({title})}
                    />

                <View style={styles.switchWrapper}>
                    <Text style={[template.bodyText, {color: 'red', fontWeight: 'bold'}]}> Bad </Text>
                    <Switch
                    value={this.state.good}
                    onValueChange={() => this.setState({good: !this.state.good})}
                    trackColor={{false: 'red', true: 'green'}}
                    />
                    <Text style={[template.bodyText, {color: 'green', fontWeight: 'bold'}]}> Good </Text>
                </View>

                <Text style={template.h2Text}>Description</Text>
                <TextInput
                value={this.state.description}
                multiline
                style={template.textInput}
                onChangeText={description => this.setState({description})}
                />

                <TouchableOpacity
                style={template.button}
                onPress={this.saveHabit}
                >
                    <Text style={template.buttonText}>Save</Text>
                </TouchableOpacity>

            </View>
        );
    }

    saveHabit =()=>{
        var {title, good, description} = this.state;

        var doc = {
            title: title.toLowerCase(),
            good,
            description,
        };

        if (this.state.editing){
            doc.created = this.state.created;
            db.update({_id: this.state.habitId}, doc, function(err, numReplaced){
                this.props.navigation.state.params.onGoBack();
                this.props.navigation.goBack();
            }.bind(this));

        } else{
            doc.created = new Date();
            db.insert(doc, function(err, newDoc){
                this.props.navigation.state.params.onGoBack();
                this.props.navigation.goBack();
            }.bind(this));            
        }
    }

    fetchHabit(){
        let id = this.props.navigation.getParam('habitId');
        db.loadDatabase(function(err){
            db.findOne({_id: id}).exec(function(err, doc){
                this.setState({
                    title: doc.title,
                    good: doc.good,
                    description: doc.description,
                    created: doc.created,
                });
            }.bind(this));
        }.bind(this));
    }
}

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#F8C471',
    flexGrow: 1,
    padding: 20
  },
  switchWrapper: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontSize: 23
  },
  descriptionText: {
    color: 'white',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 23
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  saveButton: {
    backgroundColor: '#58D68D',
    paddingVertical: 15,
    paddingHorizontal: 10,
    margin: 100
  }
});
