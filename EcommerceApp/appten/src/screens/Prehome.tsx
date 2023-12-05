import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import React from 'react';
import {Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import one from '../assests/one.png';
type PreHomeProps = NativeStackScreenProps<RootStackPramList, 'Prehome'>;

const Prehome = ({navigation}: PreHomeProps) => {
  return (
    <ImageBackground
      source={one}
      //{{uri: 'https://wepik.com/api/image/ai/9a549fd0-3ff3-4675-ae6b-7912459cf268?thumb=1'}} ,

      style={{width: '100%', height: '100%'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 1000,
        }}>
        <StatusBar barStyle="light-content" />
        <View style={{height: 50, width: 100, borderColor: 'white'}}>
          <Button
            title="Go To Products"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Prehome;

const styles = StyleSheet.create({});
