import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Hom';
import Details from './screens/Details';
import Prehome from './screens/Prehome';
import Checkout from './screens/Checkout';

export type RootStackPramList = {
  Prehome: undefined;
  Home: undefined;
  Details: {product: Product};
  Checkout: {item: Product};
};

const Stack = createNativeStackNavigator<RootStackPramList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Prehome">
        <Stack.Screen
          name="Prehome"
          component={Prehome}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Trending Products',
          }}></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: true}}></Stack.Screen>
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: true}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
