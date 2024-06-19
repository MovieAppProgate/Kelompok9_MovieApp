import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';
import { NavigationContainer } from '@react-navigation/native';

export type RootStack = {
  Home: undefined;
  MovieDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStack>();

const HomeStackNavigation: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
        headerShown: false,
        }}
        />
        <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
        headerShown: false,
        }}
        />
      </Stack.Navigator>

  );
};

export default HomeStackNavigation;