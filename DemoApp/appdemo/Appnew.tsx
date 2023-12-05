import React from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function Appnew(): JSX.Element {
  const isDarkmode = useColorScheme() === 'dark'; // usecolorscheme detects the colormode ie dark or light from your device from appearence module

  return (
    <View style={styles.container}>
      <Text style={isDarkmode ? styles.whiteText : styles.darkText}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //stlesheet lets you create style properties
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});

export default Appnew;
