import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Platform
} from "react-native";
import { LinearGradient } from "expo";

import template from './../styles/Template.js';

export default class HomePage extends React.Component {
	render() {
		return (
			<View style={template.mainBackground}>
				<View style={styles.headerView}>
					<Text style={[template.textFont,template.headerText]}>CUES</Text>
					<Image
						source={require("../../assets/ibis.png")}
						style={{ width: 50, height: 82 }}
					/>
				</View>

				<View style={styles.bodyView}>
					<TouchableOpacity
						style={template.button}
						onPress={() => this.props.navigation.navigate("HabitQuiz")}
					>
						<Text style={[template.buttonText,template.textFont]}>HABIT QUIZ</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.navBarView}>
					<TouchableOpacity
						style={template.button}
						onPress={() => this.props.navigation.navigate("NewHabit")}
					>
						<Text style={[template.buttonText,template.textFont]}>HABITS</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={template.button}
						onPress={() => this.props.navigation.navigate("Home")}
					>
						<Text style={[template.buttonText,template.textFont]}>HOME</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={template.button}
						onPress={() => alert("Coming soon")}
					>
						<Text style={[template.buttonText,template.textFont]}>SETTINGS</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	headerView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	
	bodyView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	
	navBarView: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
	},
});
