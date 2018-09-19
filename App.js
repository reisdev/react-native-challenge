import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from 'react-native-elements';
import Router from "./router";

export default class App extends React.Component {
  render() {
    return (
        <Router/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "black",
  },
  header: {
    flex:1
  },
  router: {
    flex:1,
    zIndex:2
  }
});
