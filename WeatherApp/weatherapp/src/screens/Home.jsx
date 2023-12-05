import {useState, toggleSearch, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import two from '../assets/images/two.png';

import wind from '../assets/icons/wind.png';
import drop from '../assets/icons/drop.png';
import sun from '../assets/icons/sun.png';

import {theme} from '../theme';
import {debounce} from 'lodash';

import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from 'react-native-heroicons/solid';
import {fetchlocation, fetchwetherforecast} from '../api/weather';
import {weatherImages} from '../constants';
import * as Progress from 'react-native-progress';
import {getData, storeData} from '../asyncstorage/storage';

const Home = () => {
  const [showsearch, setshowsearch] = useState(false);
  const [locations, setlocations] = useState([]);
  const [weather, setweather] = useState({});
  const [loading, setloading] = useState(true);

  const handlelocation = item => {
    console.log(item);
    setlocations([]);
    setloading(true);
    setshowsearch(false);
    fetchwetherforecast({
      cityName: item.name,
      days: '7',
    }).then(data => {
      setweather(data);
      setloading(false);
      storeData('city', item.name);
      // console.log('WEather forecast', data);
    });
  };
  const handlesearch = value => {
    if (value.length > 2) {
      fetchlocation({cityName: value}).then(data => {
        setlocations(data);
      });
    }
  };

  useEffect(() => {
    fetchwetherforecastdata();
  }, []);

  const fetchwetherforecastdata = async () => {
    let mycity = await getData('city');
    let cityName = 'New Delhi';
    if (mycity) cityName = mycity;

    fetchwetherforecast({
      cityName,
      days: '7',
    }).then(data => {
      setweather(data);
      setloading(false);
    });
  };
  const handletextDebounce = useCallback(debounce(handlesearch, 900), []);

  const {current, location} = weather;

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Text>hello</Text>
      <StatusBar hidden style={'light'} />
      <Image
        blurRadius={35}
        source={two}
        style={{position: 'absolute', height: '100%', width: '100%'}}
      />

      {loading ? (
        <View className="flex-1 flex-row justify-center items-center">
          <Progress.CircleSnail thickness={90} size={100} color={'violet'} />
        </View>
      ) : (
        <SafeAreaView className="flex flex-1">
          <View style={{height: '7%'}} className="mx-5 relative z-20">
            <View
              className="flex-row justify-end items-center rounded-full"
              style={{
                backgroundColor: showsearch
                  ? theme.bgWhite(0.1)
                  : 'transparent',
              }}>
              {showsearch ? (
                <TextInput
                  onChangeText={handletextDebounce}
                  placeholder="Search city "
                  placeholderTextColor={'white'}
                  className="pl-6 h-10 flex-1 text-base text-black"
                />
              ) : null}

              <TouchableOpacity
                onPress={() => setshowsearch(!showsearch)}
                style={{backgroundColor: theme.bgWhite(0.1)}}
                className="rounded-full p-3 m-1">
                <MagnifyingGlassIcon size={24} color="black" />
              </TouchableOpacity>
            </View>
            {locations.length > 0 && showsearch ? (
              <View className="absolute w-full bg-white-300 top-16 rounded-3xl ">
                {locations.map((item, index) => {
                  // let showBorder = index + 1 != locations.length;
                  // let borderClass = showBorder
                  // ? ' ' //border-b-2 border-b-ligthviolet-400'
                  //  : '';
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handlelocation(item)}
                      className={
                        'flex-row items-center border-0 p-3 px-4 mb-1 '
                      }>
                      <MapPinIcon size="20" color="gray" />
                      <Text className="text-white text-lg ml-2">
                        {item?.name}, {item?.country}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>

          {showsearch ? null : (
            <View className="mx-4 flex justify-around flex-1 mb-2">
              <Text className="text-white text-center text-2xl font-bold">
                {location?.name},
                <Text className="text-lg font-semibold text-gray">
                  {' ' + location?.country}
                </Text>
              </Text>
              <View className="flex-row justify-center">
                <Image
                  source={weatherImages[current?.condition?.text]}
                  className="w-52 h-52"
                />
              </View>
              <View className=" space-y-2">
                <Text className="text-center font-bold text-white text-6xl ml-5">
                  {current?.temp_c}&#176;
                </Text>
                <Text className="text-center text-white text-xl tracking-widest">
                  {current?.condition?.text}
                </Text>
              </View>

              {showsearch ? null : (
                <View className="flex-row justify-between mx-4">
                  <View className="flex-row space-x-2 items-center">
                    <Image source={(uri = wind)} className="h-6 w-6" />
                    <Text className="text-white font-semibold text-base">
                      {current?.wind_kph}km
                    </Text>
                  </View>

                  <View className="flex-row space-x-2 items-center">
                    <Image source={(uri = drop)} className="h-6 w-6" />
                    <Text className="text-white font-semibold text-base">
                      {current?.humidity}%
                    </Text>
                  </View>

                  <View className="flex-row space-x-2 items-center">
                    <Image source={(uri = sun)} className="h-6 w-6" />
                    <Text className="text-white font-semibold text-base">
                      {weather.forecast.forecastday[0]?.astro?.sunrise}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}
          {showsearch ? null : (
            <View className="mb-2 space-y-3">
              <View className="flex-row items-center mx-5 space-x-2">
                <CalendarDaysIcon size={22} color="white" />
                <Text className="text-white text-base">Daily Forecast</Text>
              </View>
              <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal: 15}}
                showsHorizontalScrollIndicator={false}>
                {weather?.forecast?.forecastday?.map((item, index) => {
                  let date = new Date(item.date);
                  let options = {weekday: 'long'};
                  let dayName = date.toLocaleDateString('en-US', options);

                  dayName = dayName.split(',')[0];

                  return (
                    <View
                      key={index}
                      className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                      style={{backgroundColor: theme.bgWhite(0.15)}}>
                      <Image
                        source={weatherImages[item?.day?.condition?.text]}
                        h-11
                        w-11
                        className="h-11 w-11"
                      />
                      <Text className="text-white ">{dayName}</Text>
                      <Text className="text-white texxt-xl font-semibold">
                        {item?.day?.avgtemp_c}&#176;
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          )}
        </SafeAreaView>
      )}
    </View>
  );
};

export default Home;
