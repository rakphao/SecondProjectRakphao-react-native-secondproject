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
  }

  removeTodo(index) {
    let tmpList = [...this.state.list];
    tmpList = tmpList.filter((tmp, i) => i != index);
    this.setState({ list: tmpList });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Input />
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
