//import React, {Component} from 'react';
import { Platform, StyleSheet } from "react-native";

const chardonnay = "#F8C471";
const mayaBlue = "#74b9ff";

export default template = StyleSheet.create({
  mainBackground: {
    backgroundColor: chardonnay,
    flex: 1
  },

  textFont: {
    fontFamily: Platform.OS === "ios" ? "San Franciso" : "Roboto",
    //fontSize: 15
  },

  headerText: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center"
  },

  button: {
    borderWidth: 10,
    borderRadius: 20,
    borderColor: mayaBlue,
    backgroundColor: mayaBlue,
    padding: 5,
//    fontWeight: "bold",
//    fontSize: 20
//    Text styles cannot be applied to TouchableOpacity components
  },
  
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  }
});
