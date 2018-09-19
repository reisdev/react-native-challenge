import React, { Component } from 'react';

import { createStackNavigator } from "react-navigation";
import { Header } from "react-native-elements"

import Coins from '../src/coins';
import Error404 from '../src/pages/error';

const headerProps = {
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
}

const routes = {
    "Home": { 
        screen: Coins
    },
    "404": {
        screen: Error404
    }
} 

const router = createStackNavigator(routes,{
    navigationOptions: {
        header: <Header {...headerProps}></Header>
    },
    initialRouteName: "Home",
    animationEnabled: true,
    
})
export default router