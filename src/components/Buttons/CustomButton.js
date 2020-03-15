import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

import { BUTTON_COLOR, BUTTON_TEXT_COLOR } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

const buttonStyles = StyleSheet.create({
  buttonSelected: {
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: BUTTON_COLOR,
    borderRadius: 100,
    width: width / 6,
  },
  buttonNotSelected: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 100,
    width: width / 6,
    backgroundColor: 'transparent',
  },
  textSelected: {
    color: BUTTON_TEXT_COLOR,
    fontSize: 12,
  },
  textNotSelected: {
    color: 'grey',
    fontSize: 12,
  },
});

export default class CustomButton extends Component {
  constructor() {
    super();

    this.state = {
      selected: false,
    };
  }

  render() {
    return (
      <Button
        title={this.props.title}
        titleStyle={this.state.selected ? buttonStyles.textSelected : buttonStyles.textNotSelected}
        buttonStyle={this.state.selected ? buttonStyles.buttonSelected : buttonStyles.buttonNotSelected}
        containerStyle={{ marginRight: 10 }}
        onPress={() => this.setState(prevState => ({ selected: !prevState.selected }))} />
    );
  }
}
