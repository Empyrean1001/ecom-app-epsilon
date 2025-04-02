import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PreviousOrders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previous Orders</Text>
      <Text>This is a placeholder for your previous orders.</Text>
    </View>
  );
};

export default PreviousOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
});
