import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import TopLogo from '../../components/toplogo/index';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import MenuItem from '../../components/Item/MenuItem'

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

export default class MenuScreen extends Component {
  state = {
    menuItems: [
      // {name: 'Curry popcorn chicken rice', price: '$13', 
      //   image='http://www.bubble88.com/wp-content/uploads/2015/03/comboset.png'}
    ],
  }
  render() {
    return (
      <View style={styles.container}>
        <TopLogo/>  
        <ScrollableTabView
          style={{ marginTop: 0 }}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <FlatList
            tabLabel='Combination Sets'
            data={this.state.menuItems}
            renderItem={({ item })=>(
              <MenuItem item={item} onPress={console.log("pressed")}/>)}
            keyExtractor = {(item, index) => index.toString() }
          />
          <FlatList
            tabLabel='Bowl Noodles'
            data={this.state.menuItems}
            renderItem={({ item })=>(
              <MenuItem item={item} onPress={console.log("pressed")}/>)}
            keyExtractor = {(item, index) => index.toString() }
          />
          <FlatList
            tabLabel='Hot Pot'
            data={this.state.menuItems}
            renderItem={({ item })=>(
              <MenuItem item={item} onPress={console.log("pressed")}/>)}
            keyExtractor = {(item, index) => index.toString() }
          />
          <FlatList
            tabLabel='Vegetarian'
            data={this.state.menuItems}
            renderItem={({ item })=>(
              <MenuItem item={item} onPress={console.log("pressed")}/>)}
            keyExtractor = {(item, index) => index.toString() }
          />
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