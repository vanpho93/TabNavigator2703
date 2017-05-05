import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Note extends Component {
    render() {
        const { note } = this.props;
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ color: '#952424', fontSize: 20 }}>{note.subject}</Text>
                <Text style={{ color: '#80A4DA', fontSize: 25 }}>{note.content}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Xoá</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch', 
        backgroundColor: 'green', 
        padding: 10,
        alignItems: 'center',
        margin: 10
    }
});
