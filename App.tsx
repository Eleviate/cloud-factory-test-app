/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './src/screens/AboutScreen';
import QuotesScreen from './src/screens/QuotesScreen';

const Tab = createBottomTabNavigator()

const icons = {
  'About': require('./src/img/icon/home_ic.png'),
  'Quotes': require('./src/img/icon/planet_ic.png')
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const iconStyle = {
      width: size,
      height: size,
      tintColor: focused ? '#e30611' : '#808080'
    }
    return <Image source={icons[route.name]} style={iconStyle} />
  },
  tabBarActiveTintColor: '#e30611',
  tabBarInactiveTintColor: '#808080'
})

const App = () => {
  return <NavigationContainer>
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="About">
      <Tab.Screen name="About" component={AboutScreen} options={{ title: 'О приложении' }} />
      <Tab.Screen name="Quotes" component={QuotesScreen} options={{ title: 'Котировки' }} />
    </Tab.Navigator>
  </NavigationContainer>
};

const styles = StyleSheet.create({
});

export default App;
