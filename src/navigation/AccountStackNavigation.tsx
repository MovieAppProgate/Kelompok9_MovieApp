
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountUser from '../screens/AccountUser';
import UserDetail from '../screens/UserDetail';
import Favorite from '../screens/Favorite';
import FAQ from '../screens/FAQ';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const AccountStackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#333', // Set the background color of the header
      },
      headerTintColor: '#fff', // Set the color of the back button and title
      headerTitleStyle: {
        fontWeight: 'bold', // Set the title font weight
        fontSize: 18, // Set the title font size
      },
    }}
    >
    <Stack.Screen name="AccountUser" component={AccountUser} options={{ title: 'Account User' }} />
    <Stack.Screen name="UserDetail" component={UserDetail} options={{ title: 'User Detail' }}/>
    <Stack.Screen name="Favorite" component={Favorite} options={{ title: 'Favorite' }}/>
    <Stack.Screen name="FAQ" component={FAQ} options={{ headerShown: false, }}/>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }}/>
  </Stack.Navigator>
);

export default AccountStackNavigation;
