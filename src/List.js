import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class List extends React.Component {

    constructor() {
        super();
        this.state = { list: ['click to remove', 'to do 2', 'to do 3', 'to do 4'] }
        //this.onSubmitEditing = this.onSubmitEditing.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(index){
        this.props.onPressItem(index);

/*
        let tmpList = [...this.state.list];
        tmpList = tmpList.filter((tmp,i)=>i!=index);
        this.setState({list:tmpList});

        */
    }

    render() {
        return (
            <View>
                {this.props.list.map(
                    (text, i) => {
                        return (
                                <TouchableOpacity key={i} style={styles.List} onPress={()=>this.removeTodo(i)} >
                                    <Text>{text}</Text>
                                </TouchableOpacity>
                        )
                    }
                )}
            </View>
        )
    }

    renderList(text, i) {
        return (
            <View key={i} style={styles.List}>
                <Text>{text}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    List: {
        backgroundColor: '#ddd',
        padding: 15,
        margin: 5,
    },
})
