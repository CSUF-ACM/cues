import React from 'react';
import { StyleSheet, 
	Text, 
	View, 
	TextInput, 
	TouchableOpacity, 
} from 'react-native';

//import Habit from './Habit';

export default class HabitQuiz extends React.Component {
  render() {
    return (

      <View style = {styles.container}>
        <View style = {styles.header}>

            //Back Button
            <TouchableOpacity style = {styles.backButton}>
                <Text style = {styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            ///Page Title
            <Text style = {styles.headerText}>Habit Quiz</Text>
        
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

        //'Did it' button
        <TouchableOpacity style = {styles.didIt}>
            <Text style = {styles.didItText}>Did it</Text>
        </TouchableOpacity>

        //'Didn't do it' button
        <TouchableOpacity style = {styles.didntDoIt}>
            <Text style = {styles.didntDoItText}>Didnt do it</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
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
        fontSize: 18,
        padding: 40,
        top: 20
    },
    backButton: {
        position: 'absolute',
        //zIndex: 11,
        left: 20,
        top: 55,
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
        bottom: 400,
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
    didIt: {
        position: 'absolute',
        zIndex: 11,
        left: 20,
        bottom: 200,
        backgroundColor: '#E91E63',
        width: 100,
        height: 100,
        //borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    didItText: {
        color: '#fff',
        fontSize: 24
    },
    didntDoIt: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 200,
        backgroundColor: '#E91E63',
        width: 100,
        height: 100,
        //borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    didntDoItText: {
        color: '#fff',
        fontSize: 24
    },
});