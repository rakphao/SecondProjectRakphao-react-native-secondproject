import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Header';
import Input from './src/Input';
import List from './src/List';

export default class App extends React.Component {
  
  constructor() {
    super();

  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Input />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
