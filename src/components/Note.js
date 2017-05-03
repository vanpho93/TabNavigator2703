import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Note extends Component {
    render() {
        const { note } = this.props;
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ color: '#952424', fontSize: 20 }}>{note.subject}</Text>
                <Text style={{ color: '#80A4DA', fontSize: 25 }}>{note.content}</Text>
            </View>
        );
    }
}
