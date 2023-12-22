import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Thread from '../screens/Thread';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {
              color: 'black',
              fontWeight: 'bold',
              fontSize: 11,
            },
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{marginBottom: focused ? 5 : 0}}>
                <Icon
                  name="home"
                  size={30}
                  color={focused ? 'black' : 'gray'}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Threads"
          component={Thread}
          options={{
            tabBarLabel: 'Threads',
            tabBarLabelStyle: {
              color: 'black',
              fontWeight: 'bold',
              fontSize: 11,
            },
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{marginBottom: focused ? 5 : 0}}>
                <Icon
                  name="edit"
                  size={30}
                  color={focused ? 'black' : 'gray'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarLabel: 'Activity',
            tabBarLabelStyle: {
              color: 'black',
              fontWeight: 'bold',
              fontSize: 11,
            },
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{marginBottom: focused ? 5 : 0}}>
                <Icon
                  name="favorite"
                  size={30}
                  color={focused ? 'black' : 'gray'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {
              color: 'black',
              fontWeight: 'bold',
              fontSize: 11,
            },
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{marginBottom: focused ? 5 : 0}}>
                <Icon
                  name="person"
                  size={30}
                  color={focused ? 'black' : 'gray'}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
