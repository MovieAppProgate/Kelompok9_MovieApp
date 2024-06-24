
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const AccountUser = (): JSX.Element => {
  const navigation = useNavigation();

  const handleUserDetailPress = () => {
    navigation.navigate('UserDetail');
  };

  const handleLogoutPress = () => {
    console.log('Logout pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/user.png')} style={styles.headerImage} />
      </View>

      <View style={styles.contentContainer}>
        
        <TouchableOpacity style={styles.iconButton} onPress={handleUserDetailPress}>
          <Feather name="info" size={24} color="#007bff" />
          <Text style={styles.iconText}>User Detail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={handleLogoutPress}>
          <Feather name="log-out" size={24} color="#dc3545" />
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
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'center',
  },
  headerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  contentContainer: {
    backgroundColor: '#fff',
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
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  iconText: {
    marginLeft: 12,
    fontSize: 18,
    textAlign: 'left',
  },
});

export default AccountUser;