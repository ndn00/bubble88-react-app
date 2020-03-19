import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

import TopLogo from '../../components/toplogo/index';
import Banner from '../../components/banner/index';
import {FONT_TITLE, FONT_TEXT, MARGIN, BANNER_SIZE} from '../../styles/index';

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
];

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar hidden={true} />
        <TopLogo />
        <Text style={FONT_TITLE}>Featured Dishes</Text>
        <Text style={FONT_TITLE}>廚師推薦</Text>
        <View style={{height: (BANNER_SIZE+FONT_TITLE.fontSize*2*1.5)*1.1}}>
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
                />,
              )
            }
          </Swiper>
        </View>
      </View>
    );
  }
}
