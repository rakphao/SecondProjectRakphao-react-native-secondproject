import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking, FlatList } from 'react-native';
import Card from './card';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

export default class MenuList extends React.Component {


    constructor() {
        super();
        this.state = { cookings: [] };


    }

    async componentDidMount() {
        let respose = await fetch("http://10.1.110.61:3000/cookings");
        let data = await respose.json();
        //console.log(respose);
        this.setState({ cookings: data });
        //this.cooking = data;

    }


    convertTime(time) {



        var timeStr = '';
        var hours;
        if (time >= 60) {
            hours = Math.floor(time / 60);
            timeStr += hours + " Hrs";
        }

        var minutes = time % 60;
        if (minutes > 0) {
            timeStr += " ";
            timeStr += minutes + " Min";
        }
        return timeStr;

    }

    goToUrl(url) {
        Linking.openURL(url)
    }

    goToScreen(cook){
        this.props.navigation.navigate('Details',{cook:cook});
    }

    renderList(cook) {
        //   return this.state.cookings.map((cook, index) => {
        return (
            <TouchableOpacity onPress={() => this.goToScreen(cook)} >
                <Card >
                    <View style={{ height: 200 }}>

                        <View style={{ flex: 1, backgroundColor: "red" }}>
                            <Image style={{ height: 200, width: null }}
                                source={{ uri: cook.imageURL }}
                            />
                        </View>
                        <View style={{ flex: 1, backgroundColor: "#fffc", padding: 10 }}>
                            <Text>{cook.type}</Text>
                            <Text>{cook.name}</Text>
                            <View style={{ flexDirection: "row", padding: 0 }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <FontAwesome name="clock-o" />
                                    <Text style={{ paddingRight: 20 }}> {this.convertTime(cook.timers)}</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <FontAwesome name="tasks" />
                                    <Text style={{ paddingRight: 20 }}> {cook.level}</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <FontAwesome name="user" />
                                    <Text style={{ paddingRight: 0 }}> {cook.serves}</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        )
        //  })

    }

    render() {
        return (
            <ScrollView>
                {/*this.renderList()*/}
                <FlatList
                    data={this.state.cookings}
                    renderItem={(item, index) => this.renderList(item.item)}
                    keyExtractor={(item, index) => index}
                />
            </ScrollView>
        )
    }
}
