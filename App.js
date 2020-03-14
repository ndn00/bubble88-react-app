import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from "./src/screens/main/index"
import MenuScreen from "./src/screens/menu/index"
import CartScreen from "./src/screens/cart/index"
import InfoScreen from "./src/screens/info/index"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName
            if (route.name === "Main") {
              iconName = 'ios-home'
            }
            else if (route.name === "Menu") {
              iconName = 'ios-book'
            }
            else if (route.name === "Cart") {
              iconName = 'ios-cart'
            }
            else if (route.name === "Info") {
              iconName = 'ios-map'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
