import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';

export default class Habit extends React.Component {
	render() {
		return (
			<View key = {this.props.keyval} style = {styles.habit}>
				//<Text style = {styles.habitText}>{this.props.val.date}</Text>
				<Text style = {styles.habitText}>{this.props.val.habit}</Text>

				<TouchableOpacity onPress = {this.props.editMethod} style = {styles.habitEdit}>
					<Text style = {styles.habitEditText}>E</Text>
				</TouchableOpacity>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	habit: {
		position: 'relative',
		padding: 20,
		paddingRight: 100,
		borderBottomWidth: 2,
		borderBottomColor: '#ededed'
	},
	habitText: {
		paddingLeft: 20,
		borderLeftWidth: 10, 
		borderLeftColor: '#E91E63'
	},
	habitEdit: {
		position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
	},
	habitEditText :{
		color: '#ffffff'
	}
});