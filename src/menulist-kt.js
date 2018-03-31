import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Card from './card';
import { FontAwesome } from '@expo/vector-icons';

export default class MenuList extends React.Component {


    constructor() {
        super();
        this.state = { cookings: [] };


    }

    async componentDidMount() {
        let respose = await fetch("http://localhost:3000/cookings");
        let data = await respose.json();
        //console.log(respose);
        this.setState({ cookings: data });
        //this.cooking = data;
    }

    renderList() {
        return (
            <Card>
                <View style={{ height: 200 }}>

                    <View style={{ flex: 1, backgroundColor: "red" }}>
                        <Image style={{ height: 300, width: null }}
                            source={{ uri: "https://truffle-assets.imgix.net/pxqrocxwsjcc_4IyZF53EkwuYwKSIkqg8Ey_melon-and-prosciutto-spaghetti_landscapeThumbnail_en.jpeg" }}
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
    }

    render() {
        return (
            <ScollView>
                {this.renderList()}
            </ScollView>
        )
    }
}
