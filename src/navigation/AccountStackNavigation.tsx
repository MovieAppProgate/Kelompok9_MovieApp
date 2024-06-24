
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountUser from '../screens/AccountUser';
import UserDetail from '../screens/UserDetail';
import Favorite from '../screens/Favorite';
import FAQ from '../screens/FAQ';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const AccountStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="AccountUser" component={AccountUser} />
    <Stack.Screen name="UserDetail" component={UserDetail} />
    <Stack.Screen name="Favorite" component={Favorite} />
    <Stack.Screen name="FAQ" component={FAQ} />
    <Stack.Screen name="Login" component={Login} /> 
  </Stack.Navigator>
);

export default AccountStackNavigation;
