import React, {Component} from 'react';

// IMPORTS
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// NAVIGATION STYLES
// import styles from './styles';

// COMPONENTS
import NavigationHeader from '../components/NavigationHeader';

// SCREENS
import Movies from '../screens/Movies';
import MovieDetails from '../screens/Movies/MovieDetails';

const Stack = createNativeStackNavigator();
function PrivateNavigation(props) {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerStatusBarHeight: 0,
        headerShown: true,
      }}
      initialRouteName="Movies">
      <Stack.Group screenOptions={{}}>
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

export default PrivateNavigation;
