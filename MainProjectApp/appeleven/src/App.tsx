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
import {AppStack} from './routes/AppStack';
import {AuthStack} from './routes/AuthStack';
import {AppwriteProvider} from './appwrite/AppwriteContext';
import {Router} from './routes/Router';

function App(): JSX.Element {
  return (
    <AppwriteProvider>
      <Router />
    </AppwriteProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
