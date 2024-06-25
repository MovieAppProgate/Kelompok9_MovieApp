import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const UserDetail = (): JSX.Element => {
  const user = {
    name: 'Progate Kelompok 9',
    gender: 'Male',
    address: 'Di Indonesia'
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Feather name="user" size={24} color="#333" />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{user.name}</Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <Feather name="info" size={24} color="#007bff" />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.value}>{user.gender}</Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <Feather name="map-pin" size={24} color="#ff6347" />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{user.address}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#212121', // Warna background hitam (#212121)
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textContainer: {
    marginLeft: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121', // Warna teks putih (#ffffff)
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
});

export default UserDetail
