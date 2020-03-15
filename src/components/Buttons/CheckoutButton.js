import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements';

export default class CheckoutButton extends Component {
  render() {
    return (
      <Button
        title={this.props.title}
        icon={{
          name: 'user',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: 'rgba(199, 43, 98, 1)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{ width: 150 }}
      />
    );
  }
}
