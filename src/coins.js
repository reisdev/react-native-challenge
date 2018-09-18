import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, Linking} from "react-native";
import { Card } from "react-native-elements";

class Coin extends Component {
    render(){
        return <Card title={`${this.props.nome} (${this.props.coin})`}>
            <View>
                <Text>
                    Valor: R$ {this.props.valor}
                </Text>
                <Text onPress={() => Linking.openURL(this.props.fonte.split('- ')[1])}>
                    Fonte: {this.props.fonte.split("-")[0]}
                </Text>
            </View>
        </Card>
    }
}

export default class Coins extends Component {
    state={
        coins: [
        ]
    }
    async componentDidMount(){
        let resp = await fetch("https://api.promasters.net.br/cotacao/v1/valores")
        resp = await resp.json();
        this.setState({coins: await resp.valores})
    }
    render(){
        return <View  style={styles.container}  >
                    <FlatList
                        data={
                            Object.keys(this.state.coins).map((item,index) => {
                            return { key: item, ...this.state.coins[item] }
                        })}
                        renderItem={({item}) => {
                            return <Coin key={item.key} {...item} coin={item.key}/>
                        }}
                    >   
                    </FlatList>
            </View>
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1
    }
})