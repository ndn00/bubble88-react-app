import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  FONT_TEXT,
  PRIMARY_COLOR,
  MARGIN,
} from '../../styles/index'

export default class BoxItem extends Component {

  handlePress = () => {
    this.props.onPress(this.props.item.englishName)
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.divCategory}
        onPress={this.handlePress}
      >
        <Image
          style={{width:80,height:80}}
          resizeMode="contain"
          source={this.props.item.image} />
        <Text style={FONT_TEXT}>{this.props.item.englishName}</Text>
        <Text style={FONT_TEXT}>{this.props.item.altName}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  divCategory:{
    alignItems:'center',
    borderWidth: 2,
    borderRadius:MARGIN,
    padding: MARGIN/2,
    margin: MARGIN/2
  },
});
