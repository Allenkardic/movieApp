import React, {Component} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Movies from '../screens/Movies';
import MovieDetails from '../screens/Movies/MovieDetails';
import {COLORS} from '../constants/theme';

const Stack = createNativeStackNavigator();
function PublicNavigation() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerStatusBarHeight: 0,
        headerShown: true,
      }}
      initialRouteName="Movies">
      <Stack.Group
        // screenOptions={{headerStyle: {backgroundColor: 'papayawhip'}}}>
        screenOptions={{headerStyle: {backgroundColor: COLORS.black}}}>
        <Stack.Screen
          name="Movies"
          component={Movies}
          options={{
            headerShown: true,
            title: 'Movies',
            headerTintColor: COLORS.white,
            headerStyle: {
              backgroundColor: COLORS.black,
            },
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            headerShown: true,
            title: 'Movie Detail',
            headerTintColor: COLORS.white,
            headerStyle: {
              backgroundColor: COLORS.black,
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default PublicNavigation;
