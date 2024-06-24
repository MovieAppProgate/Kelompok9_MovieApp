import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/Account';
import UserDetail from '../screens/UserDetail';
import Favorite from '../screens/Favorite';

const Stack = createStackNavigator();

const AccountStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="UserDetail"component={UserDetail} />
    <Stack.Screen name="Favorite" component={Favorite} />
  </Stack.Navigator>
);

export default AccountStackNavigation;
