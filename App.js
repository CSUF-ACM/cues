import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from "./src/scenes/HomePage.js";
import HabitQuiz from "./src/scenes/HabitQuiz.js";
import NewHabitPage from "./src/scenes/NewHabitPage.js";
import MyHabit from "./src/scenes/MyHabit.js";
import HabitView from "./src/scenes/HabitView.js";

const AppNavigator = createStackNavigator(
	{
		HomePage,
		NewHabitPage,
		HabitQuiz,
		MyHabit,
        HabitView,
	},
	{
		initialRouteName: "HomePage"
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <HomePage/>
//     );
//   }
// }
