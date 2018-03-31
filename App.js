import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Header';
import Input from './src/Input';
import List from './src/List';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { list: ['click to remove', 'to do 2', 'to do 3', 'to do 4'] }
    this.removeTodo = this.removeTodo.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  removeTodo(index) {
    //let tmpList = [...this.state.list];
    //tmpList = tmpList.filter((tmp, i) => i != index);
    let tmpList = this.state.list.filter((tmp, i) => i != index);
    this.setState({ list: tmpList });
    //this.state.list = tmpList;
  }

  addToDo(text) {
    this.setState({ list: [text, ...this.state.list] });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Input onSubmitEditing={this.addToDo} />
        <List list={this.state.list} onPressItem={this.removeTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
