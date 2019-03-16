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
import Habit from './Habit';

var db = new Datastore({filename: 'habits', autoload: true});

export default class MyHabit extends React.Component {
	
	//This constructor is called everytime this function is instatiated.
	constructor(props){
		super(props);
		this.state = {
			habitArray: [],
			habitText: '',
		}
	}

	componentDidMount(){
		this.fetchHabits();
	}

	fetchHabits(){
		// Fetches the habits from the mongodb datastore and stores in
		// state.habitArray
		db.loadDatabase(function(err){
			if (err){
				alert(`Error loading the database:\n${err}`);
				return;
			}

			db.find({}, function(err, docs){
				if (err){
					alert(`Error fetching habits from the database:\n${err}`);
					return;
				}

				this.setState({habitArray: docs});
				//alert(`We found ${docs.length} habits in the datastore`);

			}.bind(this));			
		}.bind(this))
	}

	render() {
	//Mapping habits from habitArray
		let habits = this.state.habitArray.map((val, key) => {
			return <Habit key = {key} keyval = {key} val = {val}
			editMethod = { () => this.editNode(key)} />
	});

		return (
			<View style = {styles.container}>
				<View style = {styles.header}>
					<TouchableOpacity style = {styles.backButton}>
						<Text style = {styles.backButtonText}>Back</Text>
					</TouchableOpacity>
					<Text style = {styles.headerText}>My Habits</Text>
				</View>

				<ScrollView style = {styles.scrollContainer}>
					<Text>We found {this.state.habitArray.length} habits in the database</Text>
					<FlatList
						data={this.state.habitArray}
						renderItem={({item}) => <Text>{item.title}</Text>}
						keyExtractor={(item, index) => item.id}
					/>
				</ScrollView>

				<View style = {styles.footer}>
					<TextInput
						style = {styles.textInput}
						onChangeText = {(habitText) => this.setState({habitText})}
						value = {this.state.habitText}
						placeholder = '>habit'
						placeholderTextColor = 'white'
						underlineColorAndroid = 'transparent'>
					</TextInput>
				</View>

				<TouchableOpacity onPress = {() => this.props.navigation.navigate("NewHabitPage", {onGoBack: this.fetchHabits.bind(this)})} style = {styles.addButton}>
					<Text style = {styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}

	addHabit(){
		if(this.state.habitText){
		//	var d = new Date();
			this.state.habitArray.push({
		//	'date': d.getFullYear() +
		//	"/" + (d.getMonth() + 1) +
		//	"/" + d.getDate(),
				'habit': this.state.habitText
			});
			this.setState({habitArray: this.state.habitArray})
			this.setState({habitText: ''})
		}
	}

	//Currently this editNode acts as a deleteNode.
	editNode(key){
		this.state.habitArray.splice(key, 1);
		this.setState({habitArray: this.state.habitArray})
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
