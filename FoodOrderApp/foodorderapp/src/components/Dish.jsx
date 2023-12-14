import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';
import {
  addtocart,
  removefromcart,
  selectcartitemsbyid,
} from '../slices/cartSlice';
import {urlFor} from '../sanity';

const Dish = ({item}) => {
  const dispatch = useDispatch();
  const totalitems = useSelector(state => selectcartitemsbyid(state, item._id));

  const handleincrease = () => {
    dispatch(addtocart({...item}));
  };
  const handledecrease = () => {
    dispatch(removefromcart({id: item._id}));
  };

  return (
    <>
      {/* <ScrollView showsVerticalScrollIndicator={false} /> */}
      <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
        <Image
          source={{uri: urlFor(item.image).url()}}
          className="rounded-3xl"
          style={{height: 100, width: 100}}
        />
        <View className="flex flex-1 space-y-3">
          <View className="pl-3">
            <Text className="text-xl">{item.name} </Text>
            <Text className="text-gray-700">{item.description}</Text>
          </View>
          <View className="flex-row justify-between pl-3 items-center">
            <Text className="text-gray-7-- text-lg font-bold">
              ${item.price}
            </Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                disabled={!totalitems.length}
                onPress={handledecrease}
                className="p-1 rounded-full "
                style={{
                  backgroundColor: totalitems.length
                    ? themeColors.bgColor(1)
                    : 'gray',
                }}>
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={'white'}
                />
              </TouchableOpacity>
              <Text className="px-3">{totalitems.length}</Text>
              <TouchableOpacity
                onPress={handleincrease}
                className="p-1 rounded-full "
                style={{backgroundColor: themeColors.bgColor(1)}}>
                <Icon.Plus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={'white'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Dish;
