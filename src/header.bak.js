//Import
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//Contain
const Header = (props) => {
    return (
        <View style={styles.header}>
            <View>
            
                <TouchableOpacity onPress={()=>this.props.goBack}>
                    <FontAwesome name="chevron-left" />
                
            
                <Text style={styles.titleText}>{props.title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header;
//StyleSheet
const styles = StyleSheet.create({
    header: {
        paddingTop: 15,
        alignItems: 'center',
        backgroundColor: "#eee",
        height: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
    },
    titleTextView: {

    }
});