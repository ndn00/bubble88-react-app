import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import TopLogo from '../../components/toplogo/index';
import { FONT_TITLE, PRIMARY_COLOR, FONT_TEXT, MARGIN } from '../../styles';
import SmallButton from '../../components/buttons/smallbutton/index'
import MenuItem from '../../components/menu_item/index'

const categories = [
  { key: 0, title: 'Combination' },
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

export default class MenuScreen extends Component {

  state = {
    currentIndex: 0
  }

  handleChange = item => {
    this.setState({currentIndex: item.key})
  }

  render() {
    return (
      <View style={styles.container}>
        <TopLogo/>
        <View style={{height: 50}}>
          <FlatList
            horizontal={true}
            data={categories}
            renderItem={({item}) => (
              <TouchableOpacity style={{
                  borderRightWidth: 2,
                  width: 120,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                underlayColor={'orange'}
                onPress={() => this.handleChange(item)}
              >
                <Text style={FONT_TEXT}>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor = {(item) => item.key}
          />
        </View>
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
