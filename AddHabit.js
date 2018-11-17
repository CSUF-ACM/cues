import React from 'react';
import { StyleSheet, 
	Text, 
	View, 
	TextInput, 
	TouchableOpacity, 
	Switch
} from 'react-native';

export default class AddHabit extends React.Component {

	state = {
		switchValue: true
	};

	_handleToggleSwitch = () => this.setState(state => ({
		switchValue: !state.switchValue
	}));

	render() {
		return (
			<View style = {styles.container}>
				<View style = {styles.header}>

					//Back Button
					<TouchableOpacity style = {styles.backButton}>
						<Text style = {styles.backButtonText}>Back</Text>
					</TouchableOpacity>

					//Delete Button
					<TouchableOpacity style = {styles.deleteButton}>
						<Text style = {styles.deleteButtonText}>Del</Text>
					</TouchableOpacity>

					//Page Title
					<Text style = {styles.headerText}>Edit/Add Habits</Text>
				</View>

				//Habit Title block
				<View style = {styles.habitTitle}>
          			<TextInput 
            		style = {styles.textInputTitle} 
              		//It will run everytime we change text in the input field.
            		//onChangeText = {(habitText) => this.setState({habitText})}
            		//value = {this.state.habitText}
            		placeholder = 'Habit Title' 
            		placeholderTextColor = 'white' 
            		underlineColorAndroid = 'transparent'>
          			</TextInput>
        		</View>

        		//Habit Description block
        		<View style = {styles.habitDesc}>
            		<TextInput 
            		style = {styles.textInputDesc} 
		            //It will run everytime we change text in the input field.
		            //onChangeText = {(habitText) => this.setState({habitText})}
		            //value = {this.state.habitText}
		            placeholder = 'Habit Description' 
		            placeholderTextColor = 'white' 
		            underlineColorAndroid = 'transparent'>
		            </TextInput>
        		</View>

        		//Create Toggle Switch

        		<Switch
        			onValueChange = {this._handleToggleSwitch}
        			value = {this.state.switchValue}
        			style = {styles.toggleSwitch}>
        			<Text style = {styles.toggleSwitchGood}>Good</Text>
        			<Text style = {styles.toggleSwitchBad}>Bad</Text>
        		</Switch>

        		//Save Button
        		<TouchableOpacity style = {styles.saveButton}>
        			<Text style = {styles.saveButtonText}>Save</Text>
        		</TouchableOpacity>

			</View>
		)
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1
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
        fontSize: 24,
        padding: 40,
        top: 30
    },
    backButton: {
        position: 'absolute',
        //zIndex: 11,
        left: 20,
        top: 70,
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
    deleteButton: {
        position: 'absolute',
        //zIndex: 11,
        right: 20,
        top: 70,
        //padding: 35,
        backgroundColor: '#ffffff',
        width: 50,
        height: 30,
        //borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    deleteButtonText: {
        color: '#E91E63',
        fontSize: 18
    },
    habitTitle: {
        position: 'absolute',
        top: 200,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInputTitle: {
        alignSelf: 'center',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed',
        fontSize: 20
    },
    habitDesc: {
        position: 'absolute',
        bottom: 300,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInputDesc: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 40,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed',
        fontSize: 20
    },
    saveButton: {
        position: 'absolute',
        zIndex: 11,
        left: 130,
        //right: 50,
        bottom: 100,
        backgroundColor: '#E91E63',
        width: 100,
        height: 100,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 24
    },
    toggleSwitch: {
    	position: 'absolute',
    	top: 300,
    	left: 160,
    	right: 0,
    	zIndex: 10
    },
    toggleSwitchGood: {
    	left: 60,
    	fontSize: 20,
    },
    toggleSwitchBad: {
    	right: 60,
    	fontSize: 20,
    	bottom: 20
    },

});