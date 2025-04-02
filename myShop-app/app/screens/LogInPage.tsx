// src/screens/Login.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { getAuth } from '@react-native-firebase/auth';
import { getAnalytics }from '@react-native-firebase/analytics';
import { NavigationProp } from '@react-navigation/native';
import { ProductsStackParamList } from '../navigation/ProductsStackNav'; // or wherever this is defined
import { app } from '../../App'; // Adjust the path to your firebaseConfig
import { trackEvent, trackAppInstanceId } from '../components/AnalyticsTracker';

type LoginProps = {
  navigation: NavigationProp<ProductsStackParamList, 'Login'>;
};

const LogInPage: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authInstance = getAuth();
  const analytics = getAnalytics();

  trackAppInstanceId();

  useEffect(() => {
    const unsubscribe = authInstance.onAuthStateChanged((user) => {
      if (user) {
        // If already logged in, navigate to Products
        navigation.replace('Products');
      }
    });
    return unsubscribe;
  }, [navigation]);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    authInstance
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Success', 'Logged in!');
        // Analytics event for successful log in
        trackEvent('successful_login', {
            sign_up_method: "email",
            login_status: "successful"
        });
        navigation.navigate('Products');
      })
      .catch((error) => {
        Alert.alert('Login Error', error.message);
      });

  };

  const NavToSignInPage = () => {
    navigation.navigate('SignInPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Neon Shop! Please Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Optional Sign Up Flow */}
      <TouchableOpacity onPress={NavToSignInPage}>
        <Text style={styles.linkText}>Don't have an account? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: '600',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  loginButton: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#1FE687',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#141414',
    fontSize: 18,
    fontWeight: '600',
  },
  linkText: {
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 8,
  },
});
