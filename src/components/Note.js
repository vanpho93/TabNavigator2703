import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Note extends Component {
    render() {
        const { note } = this.props;
        return (
            <View>
                <Text style={{ color: '#952424' }}>{note.subject}</Text>
                <Text style={{ color: '#80A4DA' }}>{note.content}</Text>
            </View>
        );
    }
}
