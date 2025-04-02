import { NavigationContainer } from '@react-navigation/native';
import ProductsStackNav from './app/navigation/ProductsStack';
import React, { useEffect, useRef } from 'react';
import {trackScreenView} from './app/components/AnalyticsTracker';

export default function App() {

  const navigationRef = useRef(null);
  useEffect(() => {
  const unsubscribe = navigationRef.current?.addListener('state', () => {
      const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
      if (currentRouteName) {
        trackScreenView(currentRouteName, currentRouteName);
      }
  });
  return unsubscribe;
  }, []);

  return (
    <NavigationContainer ref = {navigationRef}>
      <ProductsStackNav />
    </NavigationContainer>
  );
}
