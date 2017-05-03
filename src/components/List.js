import React, { Component } from 'react';
import { View, ListView, Text, StatusBar } from 'react-native';

StatusBar.setHidden(true);

export default class List extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = { name: ds.cloneWithRows(['Pho', 'Khoa', 'Huong']) };
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#CCE1F6' }}>
                <ListView 
                    dataSource={this.state.name}
                    renderRow={name => <Text>{name}</Text>}
                />
            </View>
        );
    }
}
