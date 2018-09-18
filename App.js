import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from 'react-native-elements';

import Coins from './src/coins';

export default class App extends React.Component {
  headerProps = {
    leftComponent: {
      icon: "menu",
      color: "#ffff"
    },
    centerComponent: {
      text: "React-native App",
      style: {
        color: "#ffff",
        fontSize: 20
      }
    },
    statusBarProps: { barStyle: 'light-content' },
    style: styles.header
  }
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.headerProps}></Header>
        <Coins/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: "30px"
  }
});
