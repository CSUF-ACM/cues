// Chantalle Bril 11/24/2018

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {LinearGradient} from 'expo';
import NewHabitPage from '../NewHabitPage.js';


export default class HomePage extends React.Component{
  render(){

    return (
      <View style={styles.containerView}>
      <LinearGradient colors={['#081b2a','#263b4d']} style={{flex:1}}>

        <View style={styles.headerView}>
          <Text style={styles.headerText}>CUES</Text>
          <Image source={require('../images/ibis.png')} style={{width:50,height:82}}/>
        </View>

        <View style={styles.bodyView}>
          <TouchableOpacity style={{borderWidth:10, borderRadius:20, borderColor:'#081b2a', backgroundColor:'#081b2a'}}>
            <Text style={styles.bodyText}>HABIT QUIZ</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.navBarView}>

          <TouchableOpacity style={styles.navBarButton}>
            <Text style={styles.bodyText}>HABITS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarButton}>
            <Text style={styles.bodyText}>HOME</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarButton}>
            <Text style={styles.bodyText}>SETTINGS</Text>
          </TouchableOpacity>

        </View>

      </LinearGradient>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView:{
    flex:1,
  },
  headerView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  bodyView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  navBarView:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'#081b2a',
  },
  headerText:{
    color:'#ffe4e1',
    fontFamily: Platform.OS === 'android' ? 'sans-serif-thin' : 'AvenirNext-UltraLight',
    fontSize:48,
  },
  bodyText:{
    color:'#ffe4e1',
    fontFamily: Platform.OS === 'android' ? 'sans-serif-thin' : 'AvenirNext-UltraLight',
    fontSize:20,
  },
  navBarButton:{
    padding:10,
  }
});
