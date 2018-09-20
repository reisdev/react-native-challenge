import React, { Component } from 'react';

import {
    View,
    FlatList,
    Text
} from "react-native";

import { Button, ButtonGroup, Card, FormLabel, FormInput } from 'react-native-elements';

class TodoList extends Component {
    state = {
        tasks: [{
            title: "Nada não",
            text: "Teste",
            key: "1"
        }],
        ids: 1
    }
    addTask = () => {
        console.log("Adicionou")
        const newTask = {
            key: (this.state.ids + 1).toString(),
            text: this.state.text,
            title: this.state.title
        }
        this.setState({tasks: [newTask,...this.state.tasks],ids: this.state.ids+1},() => {
            console.log(this.state.tasks)
        })
    }
    titleHandler = (title) => {
        this.setState({title})
    }
    textHandler = (text) => {
        this.setState({text})
    }
    deleteTask = (key) => {
        const newArray = this.state.tasks.filter(item => item.key != key)
        this.setState({tasks: newArray})
    }
    render() {
        return (
            <View style={{flex: 1, flexDirection: "column"}}>
                <Card>
                    <FormLabel>Título</FormLabel>
                    <FormInput 
                        onChangeText={title => this.titleHandler(title)} 
                        placeholder={"Digite aqui o título desejado"}
                    ></FormInput>
                    <FormLabel>Texto</FormLabel>
                    <FormInput 
                        onChangeText={text => this.textHandler(text)} 
                        placeholder={"Digite aqui o texto desejado"}
                    ></FormInput>
                    <Button icon={{name:"add"}} onPress={e => this.addTask()}/>
                </Card>
                <FlatList
                    data = { this.state.tasks}
                    renderItem = {({item})=>
                        (<Card key={item.key} title={item.title}>
                            <Text>{item.text}</Text>
                            <View>
                                <Button color={"red"}
                                    rounded
                                    icon={{name:"delete"}}
                                    onPress={e => this.deleteTask(item.key)}
                                />
                            </View>
                        </Card>)
                    }
                />         
            </View>
        )
    }
}


export default TodoList