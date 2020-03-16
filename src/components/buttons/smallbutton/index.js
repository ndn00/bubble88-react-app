import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {PRIMARY_COLOR,
  SECONDARY_COLOR,
  FONT_BUTTON_SMALL,
  WIDTH} from '../../../styles/index';

export default class SmallButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPress}
      >
        <Text style={FONT_BUTTON_SMALL, styles.buttonTextColor}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: SECONDARY_COLOR,
    color: PRIMARY_COLOR,
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    padding: FONT_BUTTON_SMALL.fontSize*0.5,
    borderRadius: 50,
    width: WIDTH/3.5,
  },
  buttonTextColor: {
    color: PRIMARY_COLOR,
  },
});
