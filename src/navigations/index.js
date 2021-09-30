import React, {Component} from 'react';
import {View, Text} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PrivateNavigation from './PrivateNavigation';
import PublicNavigation from './PublicNavigation';
const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties
function Main() {
  const isAuth = true;
  return (
    <NavigationContainer>
      <FlashMessage floating={true} position={'top'} hideOnPress={true} />
      <PublicNavigation />
    </NavigationContainer>
  );
}

export default Main;
