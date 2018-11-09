import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to get a shareable url.
        </Text>
        <Text>Hello World!</Text>
        <Text>Good Habit</Text>
        <Text>Bad Habit</Text>
        <Card>
          <AssetExample />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});















import * as React from 'react';
import { Alert, AppRegistry, Text, Button, StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  _onPressButton(){
    Alert.alert('WHERE ARE YOU!!?? -- Neil Breen')
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Button
      onPress={this._onPressButton}
      title="Click Me" 
      />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  }
});

AppRegistry.registerComponent('supportive crackers', () => App);