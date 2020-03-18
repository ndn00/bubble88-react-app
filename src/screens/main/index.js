import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
<<<<<<< HEAD
} from 'react-native';
import Swiper from 'react-native-swiper';

import TopLogo from '../../components/toplogo/index';
import Banner from '../../components/banner/index';
import { FONT_TITLE, FONT_TEXT, MARGIN, BANNER_SIZE } from '../../styles/index';

const banners = [
  {
    image: require('../../../assets/noodle.jpg'),
    englishName: 'House beef brisket noodle',
    altName: '88牛錦麵',
  },
  {
    image: require('../../../assets/hotpot.jpg'),
    englishName: 'Seafood hot pot with rice',
    altName: '海鮮鍋',
  },
]
=======
  StyleSheet,
} from 'react-native';

import Constants from 'expo-constants';
import Swiper from 'react-native-swiper';

import TopLogo from '../../components/toplogo/index';

// TODO: Refactor
const {width, height} = Dimensions.get('window');
const MARGIN = 20;
const BANNER_SIZE = 200;
>>>>>>> 12854196db2bba4f15c1fe270ec0d17b8884f363

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar hidden={true} />
        <TopLogo />
<<<<<<< HEAD
        <Text style={FONT_TITLE}>Featured Dishes</Text>
        <Text style={FONT_TITLE}>廚師推薦</Text>
        <View style={{height:(BANNER_SIZE+FONT_TITLE.fontSize*2*1.5)*1.1}}>
          <Swiper style={{
            height: BANNER_SIZE+FONT_TITLE.fontSize*2*1.5,
          }}
          >
            {
              banners.map((item) =>
                <Banner
                  image= {item.image}
                  englishName= {item.englishName}
                  altName= {item.altName}
                />
              )
            }
          </Swiper>
        </View>
=======
        <Text style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}>Featured Dishes</Text>
        <Text style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}>廚師推薦</Text>
        <Swiper style={{
          height: BANNER_SIZE + MARGIN*3,
        }}
        >

          <View>
            <Image
              style={
                {
                  width: null,
                  height: BANNER_SIZE,
                  resizeMode: 'contain',
                }
              }
              source={require('../../../assets/noodle.jpg')}
            />
            <View style={
              {
                alignItems: 'center',
              }
            }>
              <Text style={{fontSize: 17, fontFamily: 'Roboto'}}>House beef brisket noodle</Text>
              <Text style={{fontSize: 17, fontFamily: 'Roboto'}}>88牛錦麵</Text>
            </View>
          </View>

          <View>
            <Image
              style={
                {
                  width: null,
                  height: BANNER_SIZE,
                  resizeMode: 'contain',
                }
              }
              source={require('../../../assets/hotpot.jpg')}
            />
            <View style={
              {
                alignItems: 'center',
              }
            }>
              <Text style={{fontSize: 17, fontFamily: 'Roboto'}}>House beef brisket noodle</Text>
              <Text style={{fontSize: 17, fontFamily: 'Roboto'}}>88牛錦麵</Text>
            </View>
          </View>

        </Swiper>


>>>>>>> 12854196db2bba4f15c1fe270ec0d17b8884f363
      </View>
    );
  }
}
