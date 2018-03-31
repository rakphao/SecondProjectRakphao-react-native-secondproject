import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Header';
import Input from './src/Input';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Input/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/header';
import Input from './src/input';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Input />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


*/