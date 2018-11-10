
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Switch} from 'react-native';


type Props = {};
export default class NewHabitPage extends Component<Props> {


state = {switchValue: false};

_handleToggleSwitch = () => this.setState(state => ({
  switchValue: !state.switchValue
  }));

  render() {
    return (
      <View style={styles.mainWrapper}>

        <Text style={styles.titleText}>Habit Title</Text>
            <TextInput
             placeholder='Enter title'
             style={styles.titleInput}
             />

        <View style={styles.switchWrapper}>
          <Text style={{color: '#3498DB'}}> Good </Text>
          <Switch
            onValueChange={this._handleToggleSwitch}
            value={this.state.switchValue}
          />
          <Text style={{color: '#CB4335'}}> Bad </Text>
        </View>

        <Text style={styles.descriptionText}>Habit Description</Text>
            <TextInput
             placeholder='Enter description'
             multiline
             style={styles.descriptionInput}
             />

        <TouchableOpacity style={styles.saveButton}>
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
