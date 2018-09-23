import React, { Component } from 'react';

import { Button, View, ToolbarAndroid } from "react-native";

class FooterBar extends Component {
    actions = [
        {
            title: "Home",
            show: "always"
        },
        {
            title: "Notes",
            show: "always"
        }
    ]
    barProps = {
        title: "React Native App"
    }
    render(){
        return <ToolbarAndroid {...this.barProps} actions={this.actions}/>
    }
}

export { FooterBar }