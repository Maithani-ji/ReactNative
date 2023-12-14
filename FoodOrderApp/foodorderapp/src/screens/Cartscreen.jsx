import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {featured} from '../constants';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectrestaurant} from '../slices/restaurantSlice';
import {
  removefromcart,
  selectcartitems,
  selectcarttotal,
} from '../slices/cartSlice';
import {urlFor} from '../sanity';

const Cartscreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectrestaurant);
  const cartitems = useSelector(selectcartitems);
  const carttotal = useSelector(selectcarttotal);
  const [groupeditems, setgroupeditems] = useState({});
  const dispatch = useDispatch();
  const deliveryfee = 2;

  useEffect(() => {
    const items = cartitems.reduce((group, item) => {
      if (group[item._id]) {
        //
        group[item._id].push(item); //
      } else {
        group[item._id] = [item]; //
      }
      return group;
    }, {});
    setgroupeditems(items);
  }, [cartitems]);

  useEffect(() => {
    if (cartitems.length === 0) {
      Alert.alert('Your Cart is Empty', 'Please add items to your cart.', [
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
    }
  }, [cartitems, navigation]);

  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="absolute z-10  rounded-full p-1 shadow top-5 left-2"
          onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 items-center">
        <Image
          source={require('../assets/images/bikeguy.png')}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4 ">Delivery in 20 to 30 mins</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{color: themeColors.text}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottomL: 50}}
        className="bg-white pt-5 ">
        {Object.entries(groupeditems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg">
              <Text className="font-bold " style={{color: themeColors.text}}>
                {items.length} x
              </Text>
              <Image
                className="h-14 w-14 rounded-full "
                source={{uri: urlFor(dish.image).url()}}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                onPress={() => dispatch(removefromcart({id: dish._id}))}
                className="p-1 rounded-full"
                style={{backgroundColor: themeColors.bgColor(1)}}>
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={'white'}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        className="p-6 px-8 rounded-t-xl space-y-4"
        style={{backgroundColor: themeColors.bgColor(0.2)}}>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${carttotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryfee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">
            ${deliveryfee + carttotal}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Orderplace')}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="p-3 rounded-full">
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cartscreen;
