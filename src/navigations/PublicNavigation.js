import React, {Component} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// COMPONENTS
import NavigationHeader from '../components/NavigationHeader';

// SCREENS
import Onboarding from '../screens/Onboarding';
import Movies from '../screens/Movies';
import MovieDetails from '../screens/Movies/MovieDetails';

const Stack = createNativeStackNavigator();
function PublicNavigation() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerStatusBarHeight: 0,
        headerShown: true,
      }}
      initialRouteName="Onboarding">
      <Stack.Group
        // screenOptions={{headerStyle: {backgroundColor: 'papayawhip'}}}>
        screenOptions={{headerStyle: {backgroundColor: 'blue'}}}>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Movies"
          component={Movies}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            header: props => <NavigationHeader />,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default PublicNavigation;
