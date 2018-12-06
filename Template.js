import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';

export const template = StyleSheet.create({
  mainBackground : {
    backgroundColor: '#F8C471'
  },

  mainTextFont : {
      fontFamily : Platform.OS === 'ios' ? 'San Franciso' : 'Roboto',
      fontSize: 15
  },

  header : {
    fontSize : 23,
    fontWeight: 'bold',
    textAlign : 'center',
  },

  button : {
    backgroundColor: '#74b9ff',
    fontWeight: 'bold',
    fontSize: 20
  }
});
