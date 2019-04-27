//import React, {Component} from 'react';
import { Platform, StyleSheet } from "react-native";

const chardonnay = "#F8C471";
const mayaBlue = "#74b9ff";
const lavender = '#E6E6FA';
const rebeccapurple = '#663399';
const indigo = '#4B0082';
const slateblue = '#6A5ACD';
const darkslateblue = '#483D8B';

export default template = StyleSheet.create({
  mainBackground: {
    backgroundColor: lavender,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textFont: {
    fontFamily: Platform.OS === "ios" ? "Heiti SC" : "Roboto",
  },
  bodyText:{
    fontFamily: Platform.OS === "ios" ? "Heiti SC" : "Roboto",
    fontSize: 16,
    color: slateblue,
  },
  h1Text:{
    fontFamily: Platform.OS === "ios" ? "Heiti SC" : "Roboto",
    fontSize: 24,
    fontWeight: 'bold',
    color: darkslateblue,
  },
  h2Text:{
    fontFamily: Platform.OS === "ios" ? "Heiti SC" : "Roboto",
    fontSize: 20,
    color: darkslateblue,
  },
  headerText: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    borderRadius: 20,
    backgroundColor: slateblue,
    padding: 10,
    margin: 5,
  },
  buttonText: {
    fontFamily: Platform.OS === "ios" ? "Heiti SC" : "Roboto",
    fontWeight: "bold",
    fontSize: 20,
    color: lavender,
  },
  textInput: {
    fontFamily: Platform.OS === "ios" ? "Heiti SC" : "Roboto",
    fontSize: 16,
    color: slateblue,
    width: '60%',
    padding: 10,
    margin: '2%',
    borderWidth: 2,
    borderColor: slateblue,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
