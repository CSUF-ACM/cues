import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from "react-native";

import template from './../styles/Template.js';

export default class HomePage extends React.Component {

    static navigationOptions = {
        title: 'Cues'
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
            <View style={template.mainBackground}>
                <View style={styles.headerView}>
                    <Text style={template.h1Text}>Cues</Text>
                    <Image
                        source={require("../../assets/ibis.png")}
                        style={{ width: 50, height: 82 }}
                    />
                </View>

                <View style={styles.bodyView}>
                    <TouchableOpacity
                        style={template.button}
                        onPress={() => this.props.navigation.navigate("HabitQuiz")}
                    >
                        <Text style={template.buttonText}>Take quiz</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.navBarView}>
                    <TouchableOpacity
                        style={template.button}
                        onPress={() => this.props.navigation.navigate("MyHabit")}
                    >
                        <Text style={template.buttonText}>Habits</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={template.button}
                        onPress={() => this.props.navigation.navigate("Home")}
                    >
                        <Text style={template.buttonText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={template.button}
                        onPress={() => alert("Coming soon")}
                    >
                        <Text style={template.buttonText}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    headerView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    
    bodyView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    
    navBarView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
    },
});
