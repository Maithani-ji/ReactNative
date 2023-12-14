import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
//import {categories} from '../constants';
import {themeColors} from '../theme';
import {getCategories} from '../api/api';
import {data, urlFor} from '../sanity';

const Categories = () => {
  const [activecategory, setcategory] = useState(null);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    getCategories().then(data => {
      // console.log('got data', data[0]);
      setcategories(data);
    });
  }, []);

  return (
    <View>
      <View className="mt-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible"
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}>
          {categories.map((category, index) => {
            let isactive = category._id == activecategory;
            // let btnclass = isactive ? '' : 'bg-gray-200';
            let textclass = isactive
              ? 'font-semibold text-gray-800 '
              : 'text-gray-500';
            return (
              <View
                key={index}
                className="flex justify-center items-center mr-6">
                <TouchableOpacity
                  style={{
                    backgroundColor: isactive ? themeColors.bgColor(1) : null,
                  }}
                  onPress={() => setcategory(category._id)}
                  className={'p-1 rounded-full shadow bg-gray-200'}>
                  <Image
                    style={{width: 45, height: 45}}
                    source={{uri: urlFor(category.image).url()}}
                  />
                </TouchableOpacity>
                <Text className={'text-sm ' + textclass}>{category.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;
