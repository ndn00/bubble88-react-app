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


import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';


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
    initIndex: 0,
    uniqueKey: 0,
  }

  static categoryIndex = (category) => {
    let index = 0
    categories.forEach((object) => {if(object.title===category) index=object.key})
    return index
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.route.params.category !== undefined && nextProps.route.params.key !== undefined) {
      this.setState({
        initIndex: MenuScreen.categoryIndex(nextProps.route.params.category),
        uniqueKey: nextProps.route.params.key,
      })
    }
  }


  // static getDerivedStateFromProps(props, state) {
  //   let update = {}

  //   if(props.route.params.key !== undefined)
  //     update.uniqueKey = props.route.params.key
  //   if(props.route.params.category !== undefined)
  //     update.initIndex = MenuScreen.categoryIndex(props.route.params.category)

  //   return update;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.uniqueKey!==this.props.uniqueKey){
  //     this.setState({
  //       initIndex: MenuScreen.categoryIndex(this.props.route.params.category),
  //       uniqueKey: this.props.route.params.key,
  //   })
  //   }
  // }

  handleAdd = item => {
    this.props.addItem(item)
    //this.props.navigation.navigate('Customize', {item:item, customizations: bubble88['Customisations']})
  }

  render() {
    return (
      <View style={styles.container}>
        <TopLogo/>
        <ScrollableTabView
          key={this.state.uniqueKey}
          style={{ marginTop: 0 }}
          initialPage={this.state.initIndex}
          renderTabBar={() => <ScrollableTabBar
            activeTextColor='orange'
            underlineStyle={{backgroundColor: 'orange'}}
            textStyle={FONT_TITLE}
            tabStyle={{height: FONT_TITLE.fontSize*2*1.6}}
            style={{height: FONT_TITLE.fontSize*2*1.6}}
            />}
        >
        {categories.map(category => (
          <FlatList
            tabLabel={category.title}
            data={bubble88['menu']}
            renderItem={({item}) =>
              ((item.category===category.title || category.title==='All')&&
                <MenuItem item={{
                  image: 'http://www.bubble88.com/wp-content/uploads/2015/03/noodle.jpg',
                  name: item.english_name + '\n' + item.alt_name,
                  price: item.price,
                  handleSubmit: ()=>this.handleAdd(item),
                }}/>
            )
          }
          keyExtractor = {(item, index) => index.toString() }
        />
        ))}

        </ScrollableTabView>
      </View>
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
