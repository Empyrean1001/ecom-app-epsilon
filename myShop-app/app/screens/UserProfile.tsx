import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../navigation/ProductsStack';

const UserProfile = () => {
  const navigation = useNavigation<StackNavigation>();
  const authInstance = getAuth();
  const handleSignOut = async () => {
    try {
      await authInstance.signOut();
      // Navigate to login page after sign out
      navigation.navigate('LogInPage');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleViewOrders = () => {
    // Navigate to the Previous Orders screen
    navigation.navigate('PreviousOrders');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleViewOrders}>
        <Text style={styles.buttonText}>View Previous Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1FE687',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#141414',
    fontWeight: 'bold',
  },
});
