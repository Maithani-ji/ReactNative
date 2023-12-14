import {LogBox, View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Restaurant from '../screens/Restaurant';
import Cartscreen from '../screens/Cartscreen';
import Orderplace from '../screens/Orderplace';
import Delivery from '../screens/Delivery';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Restaurant"
          options={{headerShown: false}}
          component={Restaurant}
        />
        <Stack.Screen
          name="Cartscreen"
          options={{headerShown: false, presentation: 'modal'}}
          component={Cartscreen}
        />
        <Stack.Screen
          name="Orderplace"
          options={{headerShown: false, presentation: 'fullScreenModal'}}
          component={Orderplace}
        />
        <Stack.Screen
          name="Delivery"
          options={{headerShown: false, presentation: 'fullScreenModal'}}
          component={Delivery}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
