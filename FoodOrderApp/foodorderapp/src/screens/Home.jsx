import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import {themeColors} from '../theme';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import {featured} from '../constants';
import {getfeaturedRestaurants} from '../api/api';

const Home = () => {
  const [featuredrestaurant, setfeaturedrestaurant] = useState([]);

  useEffect(() => {
    getfeaturedRestaurants().then(data => {
      setfeaturedrestaurant(data);
      // console.log('got data:', data);
    });
  }, []);
  return (
    <SafeAreaView className="bg-white ">
      <StatusBar hidden={false} barStyle={'dark-content'} />

      <View className="flex-row items-center space-x-2 px-4 pb-2 my-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height={22} width={22} stroke={'gray'} />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height={20} width={20} stroke={'gray'} />
            <Text className="text-gray-600">New Delhi,India</Text>
          </View>
        </View>
        <View
          className="p-3 rounded-full "
          style={{backgroundColor: themeColors.bgColor(1)}}>
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke={'white'}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <Categories />

        <View className="mt-5 mb-20">
          {featuredrestaurant.map(item => {
            return (
              <Featured
                key={item._id}
                title={item.name}
                restaurants={item?.restaurants}
                description={item?.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
