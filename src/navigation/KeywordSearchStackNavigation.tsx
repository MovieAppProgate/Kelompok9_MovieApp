import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KeywordSearch from '../components/search/KeywordSearch';
import MovieDetail from '../screens/MovieDetail';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import Search from '../screens/Search'
import CategorySearch from "../components/search/CategorySearch";
import CategorySearchResults from "../screens/CategorySearchResults";

const Stack = createNativeStackNavigator();

const KeywordSearchStackNavigation = (): JSX.Element => {
    console.log('KeywordSearchStackNavigation Component Rendered');
return (
  <Stack.Navigator initialRouteName="Search">
  <Stack.Screen
    name="SearchScreen"
    component={Search}
    options={{ headerShown: false }}
  />
    <Stack.Screen
      name="KeywordSearch"
      component={KeywordSearch}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CategorySearch"
      component={CategorySearch}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CategorySearchResults"
      component={CategorySearchResults}
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
