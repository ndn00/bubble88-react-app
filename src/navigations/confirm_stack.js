import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../screens/cart/index';
import ConfirmScreen from '../screens/confirm/index';

const Stack = createStackNavigator();

export default function ConfirmStack(){
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Confirm"
        component={ConfirmScreen}
      />
    </Stack.Navigator>
  )
}
