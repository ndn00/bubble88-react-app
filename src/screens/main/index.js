import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

import TopLogo from '../../components/toplogo/index';
import Banner from '../../components/banner/index';
import HorizontalList from '../../components/horizontal_list/index'
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

const categories = [
  {
    image: require('../../../assets/noodle.jpg'),
    englishName: 'Noodles',
    altName: '麵類'
  },
  {
    image: require('../../../assets/rice.png'),
    englishName: 'Rice',
    altName: '飯類'
  },
  {
    image: require('../../../assets/noodle.jpg'),
    englishName: 'Noodles',
    altName: '麵類'
  },
  {
    image: require('../../../assets/rice.png'),
    englishName: 'Rice',
    altName: '飯類'
  }
]

export default class MainScreen extends Component {

  onPressCategory = category => {
    this.props.navigation.navigate('Menu', { category, key: Math.random() })
  }


  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <StatusBar hidden={true} />
        <TopLogo />
        <View style={{left: MARGIN}}>
          <Text style={FONT_TITLE}>Featured Dishes</Text>
          <Text style={FONT_TITLE}>廚師推薦</Text>
        </View>
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
        <View style={{left: MARGIN}}>
          <Text style={FONT_TITLE}>Categories</Text>
          <Text style={FONT_TITLE}>菜色分類</Text>
        </View>
        <HorizontalList data={categories} onPress={this.onPressCategory}/>
      </ScrollView>
    );
  }
}
