import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from '../screens/menu/index';
import CustomizationScreen from '../screens/customization/index';

const Stack = createStackNavigator();

export default function CustomizeStack(){
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Customize"
        component={CustomizationScreen}
      />
    </Stack.Navigator>
  )
}
