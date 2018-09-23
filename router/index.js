import React, { Component } from 'react';

import { createStackNavigator } from "react-navigation";
import { Header } from "react-native-elements"
import { FooterBar } from "../src/components/bar"

import Coins from '../src/coins';
import Error404 from '../src/pages/error';
import TodoList from '../src/components/todo';

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
    "Todo": {
        screen: TodoList
    },
    "404": {
        screen: Error404
    }
} 

const router = createStackNavigator(routes,{
    navigationOptions: {
        header: <FooterBar/>
    },
    initialRouteName: "Home",
    animationEnabled: true,
})
export default router