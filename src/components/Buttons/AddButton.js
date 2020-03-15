import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { BUTTON_COLOR } from '../../globalStyles';

export default class AddButton extends Component {

  render() {
    return (
      <TouchableOpacity onClick={this.props.onPress}>
        <Icon name="ios-add-circle" size={35} color={BUTTON_COLOR} />
      </TouchableOpacity>
    );
  }
}
