import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { BUTTON_COLOR } from '../../globalStyles';

export default class PlusButton extends Component {

  render() {
    return (
      <TouchableOpacity onClick={this.props.onClick}>
        <Icon name="ios-add-circle" size={35} color={BUTTON_COLOR} />
      </TouchableOpacity>
    );
  }
}
