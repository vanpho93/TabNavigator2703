import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import List from './src/components/List';

export default class ListDemo extends Component {
  render() {
    return <List />;
  }
}

AppRegistry.registerComponent('ListDemo', () => ListDemo);
