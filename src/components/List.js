import React, { Component } from 'react';
import { View, ListView, StatusBar } from 'react-native';
import Note from './Note';

StatusBar.setHidden(true);

export default class List extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = { notes: ds.cloneWithRows(arrNote) };
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#CCE1F6' }}>
                <ListView 
                    dataSource={this.state.notes}
                    renderRow={note => <Note note={note} />}
                />
            </View>
        );
    }
}

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
