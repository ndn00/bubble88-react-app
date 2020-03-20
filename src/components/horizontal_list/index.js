import React, { Component } from 'react'
import { FlatList } from 'react-native'

import BoxItem from '../box_item/index'

export default class HorizontalList extends Component {
  render() {
    return (
      <FlatList
        horizontal={true}
        data={this.props.data}
        renderItem={({ item }) => (
          <BoxItem item={item} onPress={this.props.onPress}/>
        )}
        keyExtractor = {(item,index) => index.toString() }
      />
    )
  }
}
