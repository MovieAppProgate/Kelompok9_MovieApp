import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_ACCESS_TOKEN } from '@env';
import type { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

type RootStackParamList = {
  Main: undefined;
  Login: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleLogin = async () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    setLoading(true);

    try {
      // First, get a new request token
      const tokenResponse = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_ACCESS_TOKEN}`);

      const tokenData = await tokenResponse.json();
      console.log(tokenData);
      const requestToken = tokenData.request_token;

      // Then, validate the request token with username and password
//       const validateResponse = await fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_ACCESS_TOKEN}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           password,
//           request_token: requestToken,
//         }),
//       });
//
//       const validateData = await validateResponse.json();
//
//       if (!validateResponse.ok) {
//         throw new Error(validateData.status_message || 'Invalid username or password');
//       }

      // Finally, create a new session
//       const sessionResponse = await fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${API_ACCESS_TOKEN}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           request_token: validateData.request_token,
//         }),
//       });
//
//       const sessionData = await sessionResponse.json();
//
//       if (!sessionResponse.ok) {
//         throw new Error(sessionData.status_message || 'Failed to create session');
//       }
//
//       Alert.alert('Success', 'Logged in successfully');
//       navigation.replace('Main');
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.titledesc}>Please sign in to continue.</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.visibilityToggle}
          >
            <FontAwesome
              name={isPasswordVisible ? 'eye' : 'eye-slash'}
              size={24}
              color="#555"
            />
          </TouchableOpacity>
        </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titledesc: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#a6a6a6',
  },
  input: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#FFF',
  },
  button: {
    height: 50,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#CCC',
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom:16,
    },
    passwordInput: {
      flex: 1,
      height: 50,
      paddingHorizontal: 16,
    },
    visibilityToggle: {
//         flex: 1,
      padding: 10,
    },
});

export default Login;