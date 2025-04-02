
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {getAuth} from '@react-native-firebase/auth';
import { NavigationProp } from '@react-navigation/native';
import { ProductsStackParamList } from '../navigation/ProductsStackNav'; // or wherever this is defined
import { app } from '../../App'; // Adjust the path to your firebaseConfig

type SigninProps = {
  navigation: NavigationProp<ProductsStackParamList, 'Signin'>;
};

const SignInPage: React.FC<SigninProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authInstance = getAuth();

  // Initialize the auth object once
//   const auth = getAuth(app);
//

//   useEffect(() => {
//     const unsubscribe = authInstance.onAuthStateChanged((user) => {
//       if (user) {
//         // If already logged in, navigate to Products
//         navigation.replace('Products');
//       }
//     });
//     return unsubscribe;
//   }, [navigation]);

  const handleSignin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    authInstance
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User Account Created & signed in");
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
            console.log('The email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  const NavToLogInPage = () => {
      navigation.navigate('LogInPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Neon Shop! Please Sign In</Text>

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

      <TouchableOpacity style={styles.signinButton} onPress={handleSignin}>
        <Text style={styles.signinButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Optional Sign Up Flow */}
      <TouchableOpacity onPress={NavToLogInPage}>
        <Text style={styles.linkText}>Already Have An Account? Log In Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInPage;

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
  signinButton: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#1FE687',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  signinButtonText: {
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
