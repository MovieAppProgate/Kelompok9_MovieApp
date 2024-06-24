import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/AccountUser';
import UserDetail from '../screens/UserDetail';
import AccountUser from '../screens/AccountUser';
import FAQ from '../screens/FAQ'; 

const Stack = createStackNavigator();

const AccountStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="AccountUser" component={AccountUser} />
    <Stack.Screen name="UserDetail"component={UserDetail} />
    <Stack.Screen name="FAQ" component={FAQ} />
  </Stack.Navigator>
);

export default AccountStackNavigation;
