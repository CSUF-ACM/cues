import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,createAppContainer } from "react-navigation";
import HomePage from './pages/HomePage.js';
import HabitQuiz from './HabitQuiz.js';
import NewHabitPage from './NewHabitPage.js';

const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    NewHabit: NewHabitPage,
    HabitQuiz: HabitQuiz
  },
  {
    initialRouteName: "Home"
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
