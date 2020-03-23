import React, {Component} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/main/index';
import CustomizeStack from './customize_stack'
import ConfirmStack from './confirm_stack'
import InfoScreen from '../screens/info/index';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = 'ios-home';
          } else if (route.name === 'Menu') {
            iconName = 'ios-book';
          } else if (route.name === 'Cart') {
            iconName = 'ios-cart';
          } else if (route.name === 'Info') {
            iconName = 'ios-map';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Menu" component={CustomizeStack} />
      <Tab.Screen name="Cart" component={ConfirmStack} />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
  )
}
