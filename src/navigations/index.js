import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PublicNavigation from './PublicNavigation';
const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties
function Main() {
  return (
    <NavigationContainer>
      <PublicNavigation />
    </NavigationContainer>
  );
}

export default Main;
