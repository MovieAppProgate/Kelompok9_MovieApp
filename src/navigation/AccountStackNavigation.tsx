import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/AccountUser';
import UserDetail from '../screens/UserDetail';
import Favorite from '../screens/Favorite';
import AccountUser from '../screens/AccountUser';

const Stack = createStackNavigator();

const AccountStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="AccountUser" component={AccountUser} />
    <Stack.Screen name="UserDetail"component={UserDetail} />
    <Stack.Screen name="Favorite" component={Favorite} />
  </Stack.Navigator>
);

export default AccountStackNavigation;
