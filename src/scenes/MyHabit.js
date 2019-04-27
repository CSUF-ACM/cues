import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Datastore from 'react-native-local-mongodb';
import HabitList from '../components/HabitList';
import Habit from './Habit';

var db = new Datastore({filename: 'habits', autoload: true});

export default class MyHabit extends React.Component {
    
    //This constructor is called everytime this function is instatiated.
    constructor(props){
        super(props);
        this.state = {
            habitArray: [],
        }
    }

    static navigationOptions = {
        title: 'My Habits'
    };

    componentDidMount(){
        this.fetchHabits();
    }

    fetchHabits(){
        // Fetches the habits from the mongodb datastore and stores in state.habitArray
        db.loadDatabase(function(err){
            db.find({}, function(err, docs){
                this.setState({habitArray: docs});
                //alert(`We found ${docs.length} habits in the datastore`);
            }.bind(this));          
        }.bind(this))
    }

    render() {

        return (
            <View style = {styles.container}>
                <ScrollView style = {styles.scrollContainer}>
                    <HabitList 
                    data={this.state.habitArray} 
                    navigation={this.props.navigation}
                    onGoBack={this.fetchHabits.bind(this)}
                    />
                </ScrollView>

                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("NewHabitPage", {onGoBack: this.fetchHabits.bind(this)})} 
                style = {styles.addButton}>
                    <Text style = {styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1, //To have full width and full height.
  },
  header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 35
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    },

    backButton: {
        position: 'absolute',
        //zIndex: 11,
        left: 20,
        top: 35,
        //padding: 35,
        backgroundColor: '#ffffff',
        width: 50,
        height: 30,
        //borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    backButtonText: {
        color: '#E91E63',
        fontSize: 18
    },
    //Fur temporary purpose only
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
});
