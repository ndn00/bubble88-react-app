import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

import TopLogo from '../../components/toplogo/index';
import Banner from '../../components/banner/index';
import HorizontalList from '../../components/horizontal_list/index'
import {FONT_TITLE, FONT_TEXT, MARGIN, BANNER_SIZE, TERTIARY_COLOR, QUARTERNARY_COLOR} from '../../styles/index';

const banners = [
  {
    image: require('../../../assets/noodle.jpg'),
    englishName: 'House beef brisket noodle',
    altTitle: '88牛錦麵',
  },
  {
    image: require('../../../assets/hotpot.jpg'),
    englishName: 'Seafood hot pot with rice',
    altTitle: '海鮮鍋',
  },
];
const categories = [
  { key: 0, title: 'All', altTitle: '全部',
    image: require('../../../assets/noodle.jpg'),
  },
  { key: 1, title: 'Combo', altTitle: '套餐',
  image: require('../../../assets/noodle.jpg'),
  },
  { key: 2, title: 'Noodles', altTitle: '麵類',
  image: require('../../../assets/noodle.jpg'),
  },
  { key: 3, title: 'Hot Pot', altTitle: '火鍋',
  image: require('../../../assets/noodle.jpg'),
  },
  { key: 4, title: 'Vegetarian', altTitle: '素食',
  image: require('../../../assets/noodle.jpg'),
  },
  { key: 5, title: 'Curry Rice', altTitle: '咖哩',
  image: require('../../../assets/noodle.jpg'),
  },
  { key: 6, title: 'Clay Pot', altTitle: '鍋類',
  image: require('../../../assets/noodle.jpg'),
  },
  { key: 7, title: 'Appetizers', altTitle: '開胃菜',
  image: require('../../../assets/noodle.jpg'),
  },
  { key: 8, title: 'Hot Iron', altTitle: '鐵板燒',
  image: require('../../../assets/noodle.jpg'),
  },
  { key: 9, title: 'Soup', altTitle: '湯類',
  image: require('../../../assets/noodle.jpg'),
  },
  { key: 10, title: 'Dim Sum', altTitle: '點心',
  image: require('../../../assets/noodle.jpg'),
  },
]

export default class MainScreen extends Component {

  onPressCategory = category => {
    this.props.navigation.navigate('Menu', { category: category, key: Math.random() })
  }


  render() {
    return (
      <View style={styles.container}>
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
                  altTitle= {item.altTitle}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
