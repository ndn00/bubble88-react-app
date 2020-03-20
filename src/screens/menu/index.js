import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import TopLogo from '../../components/toplogo/index';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { FONT_TITLE, PRIMARY_COLOR } from '../../styles';
import SmallButton from '../../components/buttons/smallbutton/index'
import MenuItem from '../../components/menu_item/index'

const Categories = [
  { key: 0, title: 'Combination Sets' },
  { key: 1, title: 'Bowl Noodles'},
  { key: 2, title: 'Hot Pot'},
  { key: 3, title: 'Vegetarian'},
  { key: 4, title: 'Curry Rice'},
  { key: 5, title: 'Clay Pot'},
  { key: 6, title: 'Appetizers'},
  { key: 7, title: 'Hot Iron'},
  { key: 8, title: 'Soup'},
  { key: 9, title: 'Dim Sum'},
]

const category2index = {
  "Noodles": 0,
  "Rice": 1
}

export default class MenuScreen extends Component {
  state = {
    menuItems: [
      // {name: 'Curry popcorn chicken rice', price: '$13',
      //   image='http://www.bubble88.com/wp-content/uploads/2015/03/comboset.png'}
    ],
    page: 1
  }



  render() {
    return (
      <View style={styles.container}>
        <TopLogo/>
        <ScrollableTabView
          style={{ marginTop: 0 }}
          page={category2index[this.props.route.params.category]}
          renderTabBar={
            () => <ScrollableTabBar
                    activeTextColor={PRIMARY_COLOR}
                    underlineStyle={{backgroundColor: PRIMARY_COLOR}}
                    textStyle={FONT_TITLE}
                    tabStyle={{height: FONT_TITLE.fontSize*2*1.6}}
                    style={{height: FONT_TITLE.fontSize*2*1.6}}W
                  />
          }
        >
          <View
            tabLabel={'Noodles'}
            style={styles.container}
          >
            <MenuItem item={{
              image: 'http://www.bubble88.com/wp-content/uploads/2015/03/noodle.jpg',
              name: 'House beef brisket noodle'+'\n'+'88牛錦麵',
              price: 13.5,
              handleSubmit: console.log("hello"),
            }}/>
            <MenuItem item={{
              image: 'http://www.bubble88.com/wp-content/uploads/2015/03/appetizers.jpg',
              name: 'Popcorn Chicken'+'\n'+'台式香腸',
              price: 8.5,
              handleSubmit: console.log("hello"),
            }}/>
          </View>
          <Text tabLabel='Rice'>tab2</Text>
          <Text tabLabel='Tab3'>tab3</Text>
          <Text tabLabel='Tab4'>tab4</Text>
          <Text tabLabel='Tab5'>tab5</Text>
          <Text tabLabel='Tab6'>tab6</Text>
          <Text tabLabel='Tab7'>tab7</Text>
          <Text tabLabel='Tab8'>tab8</Text>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
