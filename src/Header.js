import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import

export default class Header extends React.Component {

    render() {
        return (
            <View style={styles.Header}>
                <Text style={styles.title}> To-Do List</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: 'skyblue',
        padding: 20,

    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff'

    }
});