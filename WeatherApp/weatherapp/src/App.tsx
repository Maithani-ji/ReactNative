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
import AppNavigation from './appnavigation/AppNavigation';

function App(): JSX.Element {
  return <AppNavigation />;
}

const styles = StyleSheet.create({});

export default App;
