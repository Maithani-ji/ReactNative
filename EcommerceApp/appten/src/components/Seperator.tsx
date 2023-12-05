import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Seperator = () => {
  return <View style={styles.Seperator}></View>;
};

export default Seperator;

const styles = StyleSheet.create({
  Seperator: {
    height: 1,
    backgroundColor: 'darkGray',
  },
});
