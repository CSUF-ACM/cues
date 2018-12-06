//import React, {Component} from 'react';
import { Platform, StyleSheet } from "react-native";

const chardonnay = "#F8C471";
const mayaBlue = "#74b9ff";

export const template = StyleSheet.create({
  mainBackground: {
    backgroundColor: chardonnay
  },

  mainTextFont: {
    fontFamily: Platform.OS === "ios" ? "San Franciso" : "Roboto",
    fontSize: 15
  },

  header: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center"
  },

  button: {
    backgroundColor: mayaBlue,
    fontWeight: "bold",
    fontSize: 20
  }
});
