import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import HomeStackNavigation from './HomeStackNavigation';
import Search from '../screens/Search';
import AccountStackNavigation from './AccountStackNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (): JSX.Element => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#007bff',
      tabBarInactiveTintColor: '#333',
      tabBarLabelStyle: {
        fontSize: 14,
      },
      tabBarStyle: [
        {
          display: 'flex',
        },
        null,
      ],
    }}
  >
    <Tab.Screen
      name="Beranda"
      component={HomeStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="user" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
