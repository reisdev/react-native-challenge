import React, { Component } from 'react';

import { createStackNavigator } from "react-navigation";

import Coins from '../src/coins';
import Error404 from '../src/pages/error';

const routes = {
    "Home": Coins,
    "404": Error404
}

export default class Router extends Component {
    render(){

    }
}