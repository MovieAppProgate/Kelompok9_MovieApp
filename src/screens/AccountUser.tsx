import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, BackHandler } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const AccountUser = () => {
  const navigation = useNavigation();

  const handleUserDetailPress = () => {
    navigation.navigate('UserDetail');
  };

  const handleFAQPress = () => {
    navigation.navigate('FAQ');
  };

  const handleLogoutPress = () => {
      Alert.alert(
        'Logout',
        'Apakah anda ingin Logout dari aplikasi?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Logout cancelled'),
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: false }
      );
    };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/user.png')} style={styles.headerImage} />
      </View>

      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={handleUserDetailPress}>
          <Feather name="info" size={24} color="#ffee2b" />
          <Text style={styles.iconText}>User Detail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={handleFAQPress}>
          <Feather name="help-circle" size={24} color="#ffee2b" />
          <Text style={styles.iconText}>FAQ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={handleLogoutPress}>
          <Feather name="log-out" size={24} color="#ffee2b" />
          <Text style={styles.iconText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#212121',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'center',
  },
  headerImage: {
    width: 180,
    height: 180,
    borderRadius: 40,
  },
  contentContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  iconText: {
    marginLeft: 12,
    fontSize: 18,
    color: '#ffee2b',
    textAlign: 'left',
  },
});

export default AccountUser;
