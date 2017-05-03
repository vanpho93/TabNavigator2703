import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import sp1 from '../../src/media/maxi.jpeg';
import sp2 from '../../src/media/party.jpeg';
import sp3 from '../../src/media/mini.jpeg';

const { width } = Dimensions.get('window');

const Home = () => (
    <View style={{ flex: 1, backgroundColor: '#7697B1', paddingTop: 200 }}>
        <Swiper 
            width={width} 
            height={width / 2}
            autoplay
        >
            <Image source={sp1} style={imageStyle} />
            <Image source={sp2} style={imageStyle} />
            <Image source={sp3} style={imageStyle} />
        </Swiper>
    </View >
);

const imageStyle = { width, height: width / 2 };

export default Home;
