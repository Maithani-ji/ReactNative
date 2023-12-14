import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import delivery from '../assets/images/delivery.gif';
import {useNavigation} from '@react-navigation/native';
const Orderplace = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 2000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={require('../assets/images/deliver.png')}
        className=" w-60 h-60 "
      />
    </View>
  );
};

export default Orderplace;
