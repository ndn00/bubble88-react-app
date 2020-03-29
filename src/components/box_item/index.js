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
  SECONDARY_COLOR,
  TERTIARY_COLOR,
  MARGIN,
  WIDTH,
} from '../../styles/index'

export default class BoxItem extends Component {

  handlePress = () => {
    this.props.onPress(this.props.item.title)
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.divCategory}
        onPress={this.handlePress}
      >
        <Image
          style={styles.image}
          resizeMode="contain"
          source={this.props.item.image} />
        <Text style={FONT_TEXT}>{this.props.item.title}</Text>
        <Text style={FONT_TEXT}>{this.props.item.altTitle}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  divCategory:{
    alignItems:'center',
    borderWidth: 2,
    borderColor: TERTIARY_COLOR,
    borderRadius:MARGIN,
    padding: MARGIN/2,
    marginLeft: MARGIN/1.5,
    marginBottom: MARGIN,
    marginTop: MARGIN/3,
    backgroundColor: SECONDARY_COLOR,
  },
  image:{
    width:WIDTH/4.5,
    height:WIDTH/4.5,
  }
});
