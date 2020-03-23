import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './main_tab';

export default class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    );
  }
}
