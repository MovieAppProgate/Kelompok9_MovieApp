import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KeywordSearch from '../components/search/KeywordSearch';
import MovieDetail from '../screens/MovieDetail';

const Stack = createNativeStackNavigator();

const KeywordSearchStackNavigation = (): JSX.Element => {
    console.log('KeywordSearchStackNavigation Component Rendered');
return (
  <Stack.Navigator initialRouteName="KeywordSearch">
    <Stack.Screen
      name="KeywordSearch"
      component={KeywordSearch}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetail}
      options={{ title: 'Movie Details' }}
    />
  </Stack.Navigator>
)};

export default KeywordSearchStackNavigation;
