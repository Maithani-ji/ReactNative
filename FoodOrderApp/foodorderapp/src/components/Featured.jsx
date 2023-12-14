import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {themeColors} from '../theme/index.js';
import Restaurantcard from './Restaurantcard';
import * as Icon from 'react-native-feather';

const Featured = ({title, description, restaurants}) => {
  return (
    <>
      <View>
        <View className="flex-row justify-between items-center px-4">
          <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-500 text-xs">{description}</Text>
          </View>

          <TouchableOpacity>
            <Text style={{color: themeColors.text}} className="font-semibold">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 15,

            //  overflow: 'visible',
          }}
          showsHorizontalScrollIndicator={false}
          className="overflow-visible py-5">
          {restaurants.map(restaurant => {
            //console.log(restaurant);
            return <Restaurantcard item={restaurant} key={restaurant._id} />;
          })}
        </ScrollView>
        <View className=""></View>
      </View>
    </>
  );
};

export default Featured;
