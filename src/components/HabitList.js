import React, {Component} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import template from '../styles/Template';

export default class HabitList extends React.Component{
	render(){
		return(
			<FlatList
				data={this.props.data}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => item._id}
                onPressItem={this._onPressItem.bind(this)}
			/>
		);
	}

    _renderItem = ({item}) => (
        <HabitItem habit={item} onPressItem={this._onPressItem}/>
    );

    _onPressItem = (habit) => {
        this.props.navigation.navigate('HabitView', {
            habitId: habit._id,
            title: habit.title,
            onGoBack: this.props.onGoBack
        });
    };
}

class HabitItem extends React.Component{
    render(){

        let color = this.props.habit.good ? 'green' : 'red';
        return(
            <TouchableOpacity 
                onPress={
                    () => this.props.onPressItem(this.props.habit)
                }
                style={[template.button, {backgroundColor: color}]}
            >
            <View>
                <Text style={template.buttonText}>{this.props.habit.title}</Text>
            </View>
            </TouchableOpacity>
        );
    }
}