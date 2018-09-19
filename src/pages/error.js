import React, { Component } from 'react';

import { View, Text, StyleSheet } from "react-native";

export default class Error404 extends Component {
    render(){
        return <View style={styles.error}>
            <Text color="blue"> Nenhuma rota encontrada</Text>
        </View>
    }
}

const styles= StyleSheet.create({
    error: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})