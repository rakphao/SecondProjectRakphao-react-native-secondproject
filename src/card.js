import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    cardStyle:{
        shadowColor: '#000',
        borderColor: '#ddd',
        borderRadius: 2,
        borderWidth: 1,
        shadowOffset: { width: 0, height: 2 },
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
       // flex: 1,
    }
}

export default Card;