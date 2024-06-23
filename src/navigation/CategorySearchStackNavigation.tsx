import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategorySearch from '../components/search/CategorySearch';
import MovieDetail from '../screens/MovieDetail';
import CategorySearchResults from '../screens/CategorySearchResults';

const Stack = createNativeStackNavigator();

const CategorySearchStackNavigation = (): JSX.Element => (
  <Stack.Navigator initialRouteName="CategorySearch">
    <Stack.Screen
      name="CategorySearch"
      component={CategorySearch}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetail}
      options={{ title: 'Movie Details' }}
    />
    <Stack.Screen
      name="CategorySearchResults"
      component={CategorySearchResults}
      options={{ title: 'Search Results' }}
    />
  </Stack.Navigator>
);

export default CategorySearchStackNavigation;