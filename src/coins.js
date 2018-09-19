import React, { Component } from 'react';
import { View, FlatList, Text, Linking, RefreshControl } from "react-native";
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
            { 
                nome: "Moeda X",
                coin: "YYY",
                valor: 0.0,
                fonte: "Google - http://google.com"
            }
        ],
        refreshing: true
    }
    async componentDidMount(){
        this.request()
    }
    request = async () => {
        let resp = await fetch("https://api.promasters.net.br/cotacao/v1/valores")
        resp = await resp.json();
        this.setState({coins: await resp.valores, refreshing: false})
    }
    _refresh = () => {
        this.setState({refreshing: true, coins: [{ 
            nome: "Moeda X",
            coin: "YYY",
            valor: 0.0,
            fonte: "Google - http://google.com"
        }]})
        this.request()
    }
    render(){
        return <View>
                <FlatList
                    data={
                        Object.keys(this.state.coins).map((item,index) => {
                        return { key: item, ...this.state.coins[item] }
                    })}
                    renderItem={({item}) => {
                        return <Coin key={item.key} {...item} coin={item.key}/>
                    }}
                    refreshControl={<RefreshControl refreshing={this.state.refreshing}
                        onRefresh={this._refresh}/>}
                > 
                </FlatList>
            </View>
    }
}