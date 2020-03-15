import React, { Component }  from 'react';
import {} from 'react-native';
import { Button } from 'react-native-elements';

import { globalStyles } from '../../globalStyles'

export default class GenericButton extends Component {
  render() {
    return (
      <Button
        title={this.props.title}
        titleStyle={globalStyles.subTitle}
        buttonStyle={{
          borderWidth: 0,
          borderColor: 'transparent',
          backgroundColor: 'orange',
          borderRadius: 20,
        }}
        onPress={this.props.onPress}
        containerStyle={{ marginVertical: 10, height: 30, width: 100 }}
      />
    );
  }
}
