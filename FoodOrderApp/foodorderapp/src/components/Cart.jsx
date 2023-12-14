import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectcartitems, selectcarttotal} from '../slices/cartSlice';

const Cart = () => {
  const navigation = useNavigation();
  const cartitems = useSelector(selectcartitems);
  const carttotal = useSelector(selectcarttotal);
  if (!cartitems.length) return;
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('Cartscreen')}
        style={{backgroundColor: themeColors.bgColor(1)}}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
        <View
          className="p-2 px-4 rounded-full "
          style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
          <Text className="font-extrabold text-white text-lg">
            {cartitems.length}
          </Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">${carttotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
