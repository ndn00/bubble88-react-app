import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {PRIMARY_COLOR,
  SECONDARY_COLOR} from '../../../styles/index';

export default class SmallButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View styles={{flex: 1, flexDirection: 'row'}}>
        </View>
      </TouchableOpacity>
    );
  }
}
