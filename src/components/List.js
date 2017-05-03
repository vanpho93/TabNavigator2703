import React, { Component } from 'react';
import { 
    View, ListView, StatusBar, Text,
    TextInput, StyleSheet, TouchableOpacity 
} from 'react-native';
import Note from './Note';

StatusBar.setHidden(true);

export default class List extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = { notes: ds.cloneWithRows(arrNote) };
    }
    render() {
        const { input } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: '#CCE1F6' }}>
                <View>
                    <TextInput 
                        style={input}
                        placeholder="Nhập chủ đề"
                    />
                    <TextInput 
                        style={input}
                        placeholder="Nhập nội dung"
                    />
                    <TouchableOpacity style={{ backgroundColor: '#DFF5C9', padding: 10, margin: 10, alignItems: 'center' }}>
                        <Text style={{ color: '#3D6FC4', fontSize: 20 }}>Thêm</Text>
                    </TouchableOpacity>
                </View>
                <ListView 
                    dataSource={this.state.notes}
                    renderRow={note => <Note note={note} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#F2F2F2', 
        height: 40,
        margin: 10,
        paddingHorizontal: 10
    },
    
});

class NoteModel {
    constructor(subject, content) {
        this.subject = subject;
        this.content = content;
    }
}

const arrNote = [
    new NoteModel('Hoc Tap', 'Lam do an React Native'),
    new NoteModel('Cong viec', 'Lam bao cao cuoi thang'),
    new NoteModel('Vui choi', 'Di du lich le 1/5')
];
