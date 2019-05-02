import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomePage from './scenes/HomePage.js'
import HabitQuiz from './scenes/HabitQuiz.js'
import NewHabitPage from './scenes/NewHabitPage.js'
import MyHabit from './scenes/MyHabit.js'
import HabitView from './scenes/HabitView.js'

const AppNavigator = createStackNavigator(
  {
    HomePage,
    NewHabitPage,
    HabitQuiz,
    MyHabit,
    HabitView,
  },
  {
    initialRouteName: 'HomePage',
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <HomePage/>
//     );
//   }
// }
