import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Detailsprops = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route, navigation}: Detailsprops) => {
  const {userid} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.smalltext}>Details :{userid}</Text>
      <Button title="Go One Screen Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to first Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smalltext: {
    color: 'black',
  },
});
