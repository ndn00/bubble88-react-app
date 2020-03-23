import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {PRIMARY_COLOR,
  SECONDARY_COLOR,
  FONT_BUTTON_SMALL,
  WIDTH,
  FONT_BUTTON_LARGE} from '../../../styles/index';

export default class BigButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.button, this.props.style]}
        onPress={this.props.onPress}
      >
        <Text style={[FONT_BUTTON_LARGE, styles.buttonTextColor]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    color: SECONDARY_COLOR,
    padding: FONT_BUTTON_LARGE.fontSize*0.5,
    borderRadius: 50,
    width: WIDTH*0.7,
  },
  buttonTextColor: {
    color: SECONDARY_COLOR,
  },
});
