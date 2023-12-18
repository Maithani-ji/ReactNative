import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {Firebaseauth} from '../firebaseauth';

interface routerprops {
  navigation: NavigationProp<any, any>;
}

const inside = ({navigation}: routerprops) => {
  return (
    <View>
      <Button onPress={() => Firebaseauth.signOut()} title="Logout" />
    </View>
  );
};

export default inside;

const styles = StyleSheet.create({});
