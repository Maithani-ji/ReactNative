import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {getData} from '../Async Storage/storage';
import {jwtDecode} from 'jwt-decode';
import PureJWT from 'react-native-pure-jwt';
import axios from 'axios';
import {UserType} from '../contextfile/usercontext';

import {clearAsyncStorage} from '../Async Storage/storage';
import User from '../components/User';

const Activity = () => {
  const {UserId, setUserId} = useContext(UserType);
  const [selectedButton, setselectedButton] = useState('people');
  const [users, setusers] = useState([]);
  const [content, setcontent] = useState('peoplecontent');
  const handlepress = contentpressed => {
    setselectedButton(contentpressed);
  };

  useEffect(() => {
    //clearAsyncStorage();
    const fetchUsers = async () => {
      try {
        const userId = await getData('userid');

        console.log('userid', userId);

        if (userId) {
          setUserId(userId);

          const response = await axios.get(
            `http://your own ip config cmd ip address :3000/users/${userId}`,
          );
          setusers(response.data);
        } else {
          console.log('Invalid token format');
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchUsers();
  }, []);

  console.log('users', users);
  return (
    <ScrollView style={{marginTop: 50}}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Activity</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 12,
          }}>
          <TouchableOpacity
            onPress={() => handlepress('people')}
            style={[
              {
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: 'white',
                borderColor: '#D0D0D0',
                borderRadius: 6,
                borderWidth: 0.7,
              },
              selectedButton === 'people' ? {backgroundColor: 'black'} : null,
            ]}>
            <Text
              style={[
                {textAlign: 'center', fontWeight: 'bold'},
                {color: selectedButton === 'people' ? 'white' : 'black'},
              ]}>
              People
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlepress('all')}
            style={[
              {
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: 'white',
                borderColor: '#D0D0D0',
                borderRadius: 6,
                borderWidth: 0.7,
              },
              selectedButton === 'all' ? {backgroundColor: 'black'} : null,
            ]}>
            <Text
              style={[
                {textAlign: 'center', fontWeight: 'bold'},
                {color: selectedButton === 'all' ? 'white' : 'black'},
              ]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlepress('requests')}
            style={[
              {
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: 'white',
                borderColor: '#D0D0D0',
                borderRadius: 6,
                borderWidth: 0.7,
              },
              selectedButton === 'requests' ? {backgroundColor: 'black'} : null,
            ]}>
            <Text
              style={[
                {textAlign: 'center', fontWeight: 'bold'},
                {color: selectedButton === 'requests' ? 'white' : 'black'},
              ]}>
              Requests
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {selectedButton === 'people' && (
            <View style={{marginTop: 20}}>
              {users?.map((item, index) => (
                <User key={index} item={item} />
              ))}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Activity;

const styles = StyleSheet.create({});
