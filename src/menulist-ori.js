import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './card';
import { FontAwesome } from '@expo/vector-icons';

export default class MenuList extends React.Component {


    constructor() {
        super();
        this.state = { cookings: [] };


    }

    async componentDidMount() {
        let respose = await fetch("http://10.1.110.12:3000/cookings");
        let data = await respose.json();
        //console.log(respose);
        this.setState({ cookings: data });
        //this.cookings = data;
    }

    renderList() {
        return this.cookings.map((cooking) => {
            return (
                <Card>
                    <View style={{ height: 200 }}>

                        <View style={{ flex: 1, backgroundColor: "red" }}>
                            <Image style={{ height: 300, width: null }}
                                source={require('../img/img.jpg')}
                            />
                        </View>
                        <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
                            <Text>Food name</Text>
                            <Text>AAAA</Text>
                            <View style={{ flexDirection: "row", padding: 0 }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <FontAwesome name="clock-o" />
                                    <Text style={{ paddingRight: 20 }}> 26 Min</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <FontAwesome name="tasks" />
                                    <Text style={{ paddingRight: 20 }}> eas5y</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <FontAwesome name="user" />
                                    <Text style={{ paddingRight: 0 }}> 4 people</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </Card>
            )
        })

    }

    render() {
        return (
            <View>
                {this.renderList()}
            </View>
        )
    }
}
