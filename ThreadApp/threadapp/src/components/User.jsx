import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getData} from '../Async Storage/storage';
import axios from 'axios';

const User = ({item}) => {
  const [requestSent, setRequestSent] = useState(false);
  const [userid, setUserId] = useState('');

  const sendFollowrequest = async () => {
    try {
      const currentUserId = await getData('userid');
      setUserId(currentUserId);

      const user = {
        currentUserId: currentUserId,
        selectedUserId: item._id,
      };

      const response = await axios.post(
        'http://your own ip config cmd ip address :3000/follow',
        user,
      );

      if (response.status === 200) {
        setRequestSent(true);
        console.log('followed Successfully');
      } else {
        console.error('Follow request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Follow request error:', error);
    }
  };

  //console.log(userid, item._id);

  const hadnleUnfollow = async () => {
    const user = {
      loggedInuserId: userid,
      targetuserId: item._id,
    };
    try {
      const response = await axios.post(
        'http://your own ip config cmd ip address :3000/unfollow',
        user,
      );
      if (response.status === 200) {
        setRequestSent(false);
        console.log('Unfollowed Successfully');
      }
    } catch (error) {
      console.log('unfollow error', error);
    }
  };

  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
          }}
        />
        <Text
          style={{fontSize: 15, fontWeight: '500', color: 'black', flex: 1}}>
          {item?.name}
        </Text>
        {item?.followers?.includes(userid) || requestSent ? (
          <Pressable
            onPress={() => hadnleUnfollow()}
            style={{
              borderColor: '#D0D0D0',
              borderWidth: 1,
              padding: 10,
              marginLeft: 10,
              width: 100,
              borderRadius: 7,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Following
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => sendFollowrequest()}
            style={{
              borderColor: '#D0D0D0',
              borderWidth: 1,
              padding: 10,
              marginLeft: 10,
              width: 100,
              borderRadius: 7,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Follow
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
