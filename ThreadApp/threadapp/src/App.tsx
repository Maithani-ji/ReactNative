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
import StackNavigation from './Navigation/stackNavigation';
import {UserContext} from './contextfile/usercontext';

function App(): JSX.Element {
  return (
    <>
      <UserContext>
        <StackNavigation />
      </UserContext>
    </>
  );
}

export default App;
