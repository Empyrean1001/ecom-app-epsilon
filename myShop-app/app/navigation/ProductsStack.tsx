import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../screens/ProductDetails';
import Products from '../screens/Products';
import LogInPage from '../screens/LogInPage';
import SignInPage from '../screens/SignInPage';
import UserProfile from '../screens/UserProfile';
import PreviousOrders from '../screens/PreviousOrders';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import useCartStore from '@/state/cartStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CartModal from '../screens/CartModal';
import HeaderButtons from '../components/HeaderButtons';
import trackScreenView from '../components/AnalyticsTracker';

type ProductsStackParamList = {
  LogInPage: undefined;
  SignInPage: undefined;
  Products: undefined;
  ProductDetails: { id: number };
  CartModal: undefined;
  UserProfile: undefined;
  PreviousOrders: undefined;
};

const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();

export type ProductsPageProps = NativeStackScreenProps<ProductsStackParamList, 'Products'>;
export type ProductDetailsPageProps = NativeStackScreenProps<ProductsStackParamList, 'ProductDetails'>;
export type StackNavigation = NavigationProp<ProductsStackParamList>;

// const CartButton = () => {
//   const navigation = useNavigation<StackNavigation>();
//   const { products } = useCartStore((state) => ({
//     products: state.products,
//   }));
//   const [count, setCount] = useState(0);
//
//   useEffect(() => {
//     const count = products.reduce((prev, products) => prev + products.quantity, 0);
//     setCount(count);
//   }, [products]);
//
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         navigation.navigate('CartModal');
//       }}>
//       <View style={styles.countContainer}>
//         <Text style={styles.countText}>{count}</Text>
//       </View>
//       <Ionicons name="cart" size={28} color={'#000'} />
//     </TouchableOpacity>
//   );
// };

const ProductsStackNav = () => {


  return (
    <ProductsStack.Navigator
      initialRouteName="LogInPage"   // <--- set Login as the initial route
      screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#1FE687' },
          headerTintColor: '#141414',
          // Show both buttons on all screens except login/sign-in
          headerRight: () => {
            if (route.name === 'LogInPage' || route.name === 'SignInPage') {
              return null;
            }
            return <HeaderButtons />;
          },
        })}
    >
      {/* Login screen */}
        <ProductsStack.Screen
          name="LogInPage"
          component={LogInPage}
          options={{ headerTitle: 'Log In' }}
        />
        <ProductsStack.Screen
          name="SignInPage"
          component={SignInPage}
          options={{ headerTitle: 'Sign In' }}
        />
        <ProductsStack.Screen
          name="Products"
          component={Products}
          options={{ headerTitle: 'Neon Shop' }}
        />
        <ProductsStack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerTitle: '' }}
        />
        <ProductsStack.Screen
            name="CartModal"
            component={CartModal}
            options={{ headerShown: false, presentation: 'modal' }}
        />
        <ProductsStack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ headerTitle: 'Profile' }}
        />
        <ProductsStack.Screen
          name="PreviousOrders"
          component={PreviousOrders}
          options={{ headerTitle: 'Previous Orders' }}
        />
    </ProductsStack.Navigator>
  );
};

const styles = StyleSheet.create({
  countContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: -5,
    right: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProductsStackNav;
