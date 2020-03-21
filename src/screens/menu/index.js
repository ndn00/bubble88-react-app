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



const category2index = {
  "Noodles": 0,
  "Rice": 1
}



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

  // componentDidMount(){
  //   if(category2index[this.props.route.params.category]!==this.currentIndex){
  //     this.setState({currentIndex: category2index[this.props.route.params.category]})
  //     this.setState({uniqueKey: this.props.route.params.key})
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if(nextProps.route.params.category !== undefined && nextProps.route.params.key !== undefined) {
      this.setState({
          initIndex: category2index[nextProps.route.params.category],
          uniqueKey: nextProps.route.params.key,
      })
    }
  }

  handleChange = item => {
    this.setState({currentIndex: item.key})
  }

  handleAdd = item => {
    this.props.addItem(item)
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <TopLogo/>
  //       <View style={{height: 50}}>
  //         <FlatList
  //           horizontal={true}
  //           showsHorizontalScrollIndicator={false}
  //           data={categories}
  //           renderItem={({item}) => (
  //             <TouchableOpacity style={{
  //                 borderRightWidth: 2,
  //                 width: 120,
  //                 height: 40,
  //                 alignItems: 'center',
  //                 justifyContent: 'center'
  //               }}
  //               underlayColor={'orange'}
  //               onPress={() => this.handleChange(item)}
  //             >
  //               <Text style={FONT_TEXT}>{item.title}</Text>
  //             </TouchableOpacity>
  //           )}
  //           keyExtractor = {(item) => item.key}
  //         />
  //       </View>
  //       <ScrollView
  //         tabLabel={'Noodles'}
  //         style={styles.container}
  //       >
  //         {bubble88['menu'].map((item) =>
  //           <MenuItem item={{
  //             image: 'http://www.bubble88.com/wp-content/uploads/2015/03/noodle.jpg',
  //             name: item.english_name + '\n' + item.alt_name,
  //             price: item.price,
  //             handleSubmit: ()=>this.handleAdd(item),
  //           }}/>
  //         )}
  //       </ScrollView>
  //     </View>
  //   );
  // }

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
            <MenuItem item={{
              image: 'http://www.bubble88.com/wp-content/uploads/2015/03/noodle.jpg',
              name: item.english_name + '\n' + item.alt_name,
              price: item.price,
              handleSubmit: ()=>this.handleAdd(item),
            }}/>}
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
