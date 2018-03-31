/*
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import

export default class Header extends React.Component {

    render() {
        return (
            <view>
                <Text>This is Header</Text>
            </view>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: "#eee",
        padding: 15,

    },
    title: {
        fontSize: 22,

    }
});
*/

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class Header extends React.Component {

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>To-Do List</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'skyblue',
        padding: 25,
    },
    title: {
        textAlign: 'center',
        color: '#fff'
    }

})
