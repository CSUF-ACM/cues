import React from 'react';
import { StyleSheet, 
	Text, 
	View, 
	TextInput, 
	ScrollView,
  FlatList, 
	TouchableOpacity, 
} from 'react-native';

import Habit from './Habit';

export default class MyHabit extends React.Component {
	
	//This constructor is called everytime this function is instatiated.
	constructor(props){
		super(props);
		this.state = {
			habitArray: [],
			habitText: '',
		}
	}

  	render() {

  	//Mapping habits from habitArray
  	let habits = this.state.habitArray.map((val, key) => {
  		return <Habit key = {key} keyval = {key} val = {val}
  				editMethod = { () => this.editNode(key)} />
  	});

    return (
      <View style = {styles.container}>
      	<View style = {styles.header}>

          <TouchableOpacity style = {styles.backButton}>
            <Text style = {styles.backButtonText}>Back</Text>
          </TouchableOpacity>
      		
          <Text style = {styles.headerText}>My Habits</Text>

      	</View>

      	//All the habits will be inside ScorllView.
      	<ScrollView style = {styles.scrollContainer}>
      		{habits}
      	</ScrollView>
        
        //For temporary purpose only
        <View style = {styles.footer}>
        	<TextInput 
        		style = {styles.textInput} 
        		//It will run everytime we change text in the input field.
        		onChangeText = {(habitText) => this.setState({habitText})}
        		value = {this.state.habitText}
        		placeholder = '>habit' 
        		placeholderTextColor = 'white' 
        		underlineColorAndroid = 'transparent'>
        	</TextInput>
        </View>

        //Creating a Button.
        <TouchableOpacity onPress = {this.addHabit.bind(this)} style = {styles.addButton}>
        	<Text style = {styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  	}

  	addHabit(){
		if(this.state.habitText){

		//	var d = new Date();
			this.state.habitArray.push({
		//	'date': d.getFullYear() +
		//	"/" + (d.getMonth() + 1) +
		//	"/" + d.getDate(),
			'habit': this.state.habitText
			});
			this.setState({habitArray: this.state.habitArray})
			this.setState({habitText: ''})
		}
	}

  //Currently this editNode acts as a deleteNode.
	editNode(key){
		this.state.habitArray.splice(key, 1);
		this.setState({habitArray: this.state.habitArray})
	}
}



const styles = StyleSheet.create({
  container: {
    flex: 1, //To have full width and full height.
  },
  header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 35
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    },

    backButton: {
        position: 'absolute',
        //zIndex: 11,
        left: 20,
        top: 35,
        //padding: 35,
        backgroundColor: '#ffffff',
        width: 50,
        height: 30,
        //borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    backButtonText: {
        color: '#E91E63',
        fontSize: 18
    },

    //Fur temporary purpose only
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
});
