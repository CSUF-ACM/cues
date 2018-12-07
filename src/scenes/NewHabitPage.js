
import React, {Component} from 'react';
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


type Props = {};
export default class NewHabitPage extends Component<Props> {

	constructor(props){
		super(props)
		this.state={
			title:'',
			good:true,
			description:''
		}
	}

toggleSwitch = () => this.setState(state =>
	({good: !state.good})
);
	
saveHabit =()=>{
	const {title, good, description} = this.state;
	let habit = {
		title: title,
		good: good,
		description: description
	}
	AsyncStorage.setItem(title, JSON.stringify(habit));
	
	message = "Your ";
	good ? message = message + "good" : message = message + "bad";
	message = message + " habit: \"" + this.state.title + "\" was saved.";
	alert(message);
	
	this.props.navigation.goBack();
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
