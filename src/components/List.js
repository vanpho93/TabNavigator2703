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
        this.state = { 
            notes: ds.cloneWithRows(arrNote),
            subject: '',
            content: '' 
        };
    }

    addNote() {
        const { content, subject, notes } = this.state;
        const note = new NoteModel(subject, content);
        arrNote.push(note);
        this.setState({ notes: notes.cloneWithRows(arrNote) });
    }

    render() {
        const { input, button } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: '#CCE1F6' }}>
                <View>
                    <TextInput 
                        style={input}
                        placeholder="Nhập chủ đề"
                        value={this.state.subject}
                        onChangeText={text => this.setState({ subject: text })}
                    />
                    <TextInput 
                        style={input}
                        placeholder="Nhập nội dung"
                        value={this.state.content}
                        onChangeText={text => this.setState({ content: text })}
                    />
                    <TouchableOpacity style={button} onPress={this.addNote.bind(this)}>
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
    button: {
        backgroundColor: '#DFF5C9', padding: 10, margin: 10, alignItems: 'center'
    }
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
