// app/components/HeaderButtons.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../navigation/ProductsStack';
import useCartStore from '@/state/cartStore';

const HeaderButtons = () => {
  const navigation = useNavigation<StackNavigation>();
  const { products } = useCartStore((state) => ({
    products: state.products,
  }));

  // Calculate cart count
  const cartCount = products.reduce((total, item) => total + item.quantity, 0);

  return (
    <View style={styles.container}>
      {/* Profile button */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('UserProfile')}
      >
        <Ionicons name="person" size={24} color="#141414" />
      </TouchableOpacity>

      {/* Cart button */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('CartModal')}
      >
        {/* Small badge with the cart count */}
        {cartCount > 0 && (
          <View style={styles.countContainer}>
            <Text style={styles.countText}>{cartCount}</Text>
          </View>
        )}
        <Ionicons name="cart" size={24} color="#141414" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 8,
    position: 'relative',
  },
  countContainer: {
    position: 'absolute',
    top: -5,
    right: -10,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  countText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#141414',
  },
});
