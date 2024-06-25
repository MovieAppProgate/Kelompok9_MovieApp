import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Favorite from '../screens/Favorite'
import HomeStackNavigation from './HomeStackNavigation'
import FavoriteStackNavigation from './FavoriteStackNavigation';
import KeywordSearchStackNavigation from './KeywordSearchStackNavigation';
import AccountStackNavigation from './AccountStackNavigation'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = (): JSX.Element => (
  <Tab.Navigator>
     
    <Tab.Screen
      name="Beranda"
      component={HomeStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={28} color={'#ffee2b'} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Search"
      component={KeywordSearchStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={28} color={'#ffee2b'} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="heart" size={28} color={'#ffee2b'} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="user" size={28} color={'#ffee2b'} />
        ),
        headerShown: false,
      }}
    />

  </Tab.Navigator>
  
)

export default BottomTabNavigator

