import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import Home from '../screens/Home'
import Home from '../screens/Hom';
import Checkout from '../screens/Checkout';
import Details from '../screens/Details';
import Prehome from '../screens/Prehome';
import {FAB} from '@rneui/themed';
import Snackbar from 'react-native-snackbar';
import AppwriteContext from '../appwrite/AppwriteContext';

export type AppStackParamList = {
  Prehome: undefined;
  Home: undefined;
  Details: {product: Product};
  Checkout: {item: Product};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);

  const handleLogout = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'Logout Successful',
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  };

  return (
    <Stack.Navigator
      initialRouteName="Prehome"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Prehome"
        component={Prehome}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Trending Products',
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <FAB
              // placement="center"
              color="#f02e65"
              size="small"
              icon={{name: 'logout', color: '#FFFFFF'}}
              onPress={handleLogout}
            />
          ),
        }}></Stack.Screen>
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerBlurEffect: 'dark',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <FAB
              // placement="center"
              color="#f02e65"
              size="small"
              icon={{name: 'logout', color: '#FFFFFF'}}
              onPress={handleLogout}
            />
          ),
        }}></Stack.Screen>
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerBlurEffect: 'dark',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <FAB
              // placement="center"
              color="#f02e65"
              size="small"
              icon={{name: 'logout', color: '#FFFFFF'}}
              onPress={handleLogout}
            />
          ),
        }}></Stack.Screen>
    </Stack.Navigator>
  );
};
