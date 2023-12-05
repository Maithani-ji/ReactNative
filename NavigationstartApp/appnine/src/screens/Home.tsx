import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Homeprops = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home = ({navigation}: Homeprops) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smalltext}>Home</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details', {userid: '89'})}
      />
    </View>
  );
};

export default Home;

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
