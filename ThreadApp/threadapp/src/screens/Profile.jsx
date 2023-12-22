import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {clearAsyncStorage, getData} from '../Async Storage/storage';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const [userdata, setuserdata] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = await getData('userid');
        const response = await axios.get(
          `http://your own ip config cmd ip address :3000/profile/${userId}`,
        );
        const {user} = response.data;
        setuserdata(user);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchProfile();
  }, []);
  console.log('profile', userdata);

  const logout = () => {
    clearAsyncStorage();
    console.log('logout');
    navigation.replace('Login');
  };
  return (
    <View style={{marginTop: 10, padding: 15}}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {userdata?.name}
          </Text>
          <View
            style={{
              paddingHorizontal: 7,
              paddingVertical: 5,
              borderRadius: 8,
              backgroundColor: '#D0D0D0',
            }}>
            <Text>Threads.net</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            marginTop: 25,
          }}>
          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                resizeMode: 'contain',
              }}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 15, fontWeight: '400'}}>
              Fresher || Graduate
            </Text>
            <Text style={{fontSize: 15, fontWeight: '400'}}>
              Mobile App & Web Developer
            </Text>
            <Text style={{fontSize: 15, fontWeight: '400'}}>
              Keep Learning Keep Hustling
            </Text>
          </View>
        </View>
        <Text style={{color: 'gray', fontSize: 15, marginTop: 25}}>
          {userdata?.followers?.length} followers
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 40,
          }}>
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <Text>Edit Profile</Text>
          </Pressable>

          <Pressable
            onPress={logout}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <Text>Logout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
