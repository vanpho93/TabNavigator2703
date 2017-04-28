import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import homeIcon from '../src/media/home.png';
import homeIcon0 from '../src/media/home0.png';
import cartIcon from '../src/media/cart.png';
import cartIcon0 from '../src/media/cart0.png';
import searchIcon from '../src/media/search.png';
import searchIcon0 from '../src/media/search0.png';
import contactIcon from '../src/media/contact.png';
import contactIcon0 from '../src/media/contact0.png';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' };
    }
    render() {
        const { iconStyle } = styles;
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    selectedTitleStyle={{ color: '#34B089' }}
                    renderIcon={() => <Image source={homeIcon0} style={iconStyle} />}
                    renderSelectedIcon={() => <Image source={homeIcon} style={iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                >
                    <Home />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selectedTitleStyle={{ color: '#34B089' }}
                    selected={this.state.selectedTab === 'cart'}
                    title="Cart"
                    renderIcon={() => <Image source={cartIcon0} style={iconStyle} />}
                    renderSelectedIcon={() => <Image source={cartIcon} style={iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'cart' })}
                >
                    <Cart />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: { height: 30, width: 30 }
});

const Home = () => (
    <View style={{ flex: 1, backgroundColor: '#7697B1' }}>
        <Text>Home Component</Text>
    </View>
);

const Cart = () => (
    <View style={{ flex: 1, backgroundColor: '#7697B1' }}>
        <Text>Cart Component</Text>
    </View>
);

const Search = () => (
    <View style={{ flex: 1, backgroundColor: '#7697B1' }}>
        <Text>Search Component</Text>
    </View>
);

const Contact = () => (
    <View style={{ flex: 1, backgroundColor: '#7697B1' }}>
        <Text>Contact Component</Text>
    </View>
);