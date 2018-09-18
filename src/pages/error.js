import React, { Component } from 'react';

import { View, Text, StyleSheet } from "react-native";

export default class Error404 extends Component {
    render(){
        return <View style={styles.error}>
            <Text> Nothing was found with this route</Text>
        </View>
    }
}

const styles= {
    error: {
        padding: 20,
        color: "blue"
    }
}