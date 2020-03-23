import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CartScreen from '../screens/cart/index';
import ConfirmScreen from '../screens/confirm/index';
import {PRIMARY_COLOR, FONT_TITLE} from '../styles';

const Stack = createStackNavigator();

export default function ConfirmStack() {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Confirm"
        component={ConfirmScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: PRIMARY_COLOR,
          },
          headerTintColor: '#fff',
        }}

      />
    </Stack.Navigator>
  );
}
