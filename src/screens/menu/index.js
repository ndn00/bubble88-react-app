import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import TopLogo from '../../components/toplogo/index';
import SmallButton from '../../components/buttons/smallbutton/index'
import MenuItem from '../../components/menu_item/index'
import {addItem} from '../../redux/actions';

import { FONT_TITLE, PRIMARY_COLOR, FONT_TEXT, MARGIN } from '../../styles';
import bubble88 from '../../mock_db/menu.json';

const categories = [
  { key: 0, title: 'All'},
  { key: 1, title: 'Combo' },
  { key: 2, title: 'Noodles'},
  { key: 3, title: 'Hot Pot'},
  { key: 4, title: 'Vegetarian'},
  { key: 5, title: 'Curry Rice'},
  { key: 6, title: 'Clay Pot'},
  { key: 7, title: 'Appetizers'},
  { key: 8, title: 'Hot Iron'},
  { key: 9, title: 'Soup'},
  { key: 10, title: 'Dim Sum'},
]

class MenuScreen extends Component {

  state = {
    currentIndex: 0
  }

  handleChange = item => {
    this.setState({currentIndex: item.key})
  }

  handleAdd = item => {
    this.props.addItem(item)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
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
            {bubble88['menu'].map((item) =>
              <MenuItem item={{
                image: 'http://www.bubble88.com/wp-content/uploads/2015/03/noodle.jpg',
                name: item.english_name + '\n' + item.alt_name,
                price: item.price,
                handleSubmit: ()=>this.handleAdd(item),
              }}/>
            )}
          </View>
      </ScrollView>
    );
  }
}

export default connect(null, {addItem})(MenuScreen)

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
