import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStack } from '../navigation/HomeStackNavigation';

type Props = NativeStackScreenProps<RootStack, 'MovieDetail'>;

export default function MovieDetail({ navigation }: Props): JSX.Element {
  return (
    <View>
      <Text>Movie Detail</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}