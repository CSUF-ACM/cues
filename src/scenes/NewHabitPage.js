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
import DateTimePicker from 'react-native-modal-datetime-picker';

var db = new Datastore({filename:'habits', autoload: true});

type Props = {};
export default class NewHabitPage extends Component<Props> {

	constructor(props){
		super(props)
		this.state={
			title:'',
			good:true,
			description:'',
			reminderTime: new Date(),
			pickerIsVisible: false,
		}
	}

toggleSwitch = () => this.setState(state =>
	({good: !state.good})
);
	
saveHabit =()=>{
	var {title, good, description, reminderTime} = this.state;

	var doc = {
		title: title.toLowerCase(),
		good: good,
		description: description,
		reminderTime: reminderTime,
        created: new Date(),
	};

	db.insert(doc, function(err, newDoc){
		if(err){
			alert(`Failed to insert new habit into the datasore:\n${err}`);
			return;
		}
		//alert(`New document added to the database:\n${JSON.stringify(newDoc)}`);
		this.props.navigation.state.params.onGoBack();
		this.props.navigation.goBack();
	}.bind(this));
}

	_hidePicker(){
		this.setState({pickerIsVisible: false});
	}

	_showPicker(){
		this.setState({pickerIsVisible: true});
	}

	_handleDatePicked(date){
		this.setState({reminderTime: date});
		this._hidePicker();
	}

  render() {
    return (
      <View style={styles.mainWrapper}>

        <Text style={styles.titleText}>Habit Title</Text>
            <TextInput
             placeholder='Enter title'
             style={styles.titleInput}
             onChangeText={title => this.setState({title})}
             />

        <View style={styles.switchWrapper}>
          <Text style={{color: '#CB4335'}}> Bad </Text>
          <Switch
          	value={this.state.good}
            onValueChange={this.toggleSwitch}
          />
          <Text style={{color: '#3498DB'}}> Good </Text>
        </View>

        <Text style={styles.descriptionText}>Habit Description</Text>
            <TextInput
             placeholder='Enter description'
             multiline
             style={styles.descriptionInput}
             onChangeText={description => this.setState({description})}
             />

        <Text style={styles.titleText}>Set a reminder for this habit?</Text>
        <TouchableOpacity onPress={this._showPicker.bind(this)}>
        	<Text style={[styles.titleText, {alignSelf: 'center',}]}>{this.state.reminderTime.getHours()}:{this.state.reminderTime.getMinutes()}</Text>
        </TouchableOpacity>

        <DateTimePicker
        	isVisible={this.state.pickerIsVisible}
        	onConfirm={this._handleDatePicked.bind(this)}
        	onCancel={this._hidePicker.bind(this)}
        	mode="time"
        />

        <TouchableOpacity
        	style={styles.saveButton}
        	onPress={this.saveHabit}
		>
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>

      </View>
    );
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
  titleInput: {
    height: 40,
    backgroundColor: 'white',
    textAlign: 'center'
  },
  descriptionText: {
    color: 'white',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 23
  },
  descriptionInput: {
    height: 100,
    backgroundColor: 'white',
    paddingHorizontal: 10
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
