import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {featured} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {Map, TileLayer} from 'react-native-leaflet';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';
import {selectrestaurant} from '../slices/restaurantSlice';
import {emptycart} from '../slices/cartSlice';
//import MapView, {Marker} from 'react-native-maps';

const Delivery = () => {
  const restaurant = useSelector(selectrestaurant);
  const navigation = useNavigation();
  const dispacth = useDispatch();
  const cancelorder = () => {
    navigation.navigate('Home');
    dispacth(emptycart());
  };

  return (
    <View className="flex-1">
      <Image
        source={require('../assets/images/map.png')}
        style={{height: 600, width: '100%'}}
      />
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your Order is on its way!
            </Text>
          </View>
          <Image
            source={require('../assets/images/bikeguy2.gif')}
            className="w-24 h-24"
          />
        </View>
        <View
          className="p-2 flex-row justify-between items-center rounded-full m-5 mx-2"
          style={{backgroundColor: themeColors.bgColor(1)}}>
          <View
            className="p-1 rounded-full"
            style={{backgroundColor: 'rgba(255,255,255,0.4'}}>
            <Image
              source={require('../assets/images/deliveryguy.png')}
              className="h-16 w-16 rounded-full"
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Bing Bing</Text>
            <Text className="text-lg font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full ">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelorder}
              className="bg-white p-2 rounded-full ">
              <Icon.X stroke={'red'} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Delivery;
