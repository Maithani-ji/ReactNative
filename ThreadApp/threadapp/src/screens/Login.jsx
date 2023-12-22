import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {clearAsyncStorage, getData, storeData} from '../Async Storage/storage';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const checkloginStatus = async () => {
      try {
        const token = await getData('authtoken');
        // console.log(token);
        if (token) {
          setTimeout(() => {
            navigation.replace('Main');
          }, 40);
        }
      } catch (error) {
        console.log('error', error);
      }
    };
    checkloginStatus();
  }, []);

  const handlelogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post('http://your own ip config cmd ip address :3000/login', user, {
        timeout: 5000,
      })
      .then(response => {
        console.log(response);
        const token = response.data.token;
        const key = response.data.key;
        const userid = response.data.userId;
        storeData('userid', userid);
        //storeData('secretKey', key);
        storeData('authtoken', token);
        navigation.navigate('Main');
      })
      .catch(error => {
        console.log('error is ', error);
        Alert.alert('Login error');
      });
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <View style={{marginTop: 50}}>
        <Image
          style={{width: 150, height: 100, resizeMode: 'contain'}}
          source={{
            uri: 'https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png',
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 25,
              color: 'black',
            }}>
            Login to your account.
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 20,
            }}>
            <Icon style={{marginLeft: 10}} name="mail" size={30} color="gray" />

            <TextInput
              style={{
                color: 'gray',
                marginVertical: 5,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter Your E-mail"
              placeholderTextColor={'gray'}
              value={email}
              onChangeText={text => setemail(text)}
            />
          </View>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                borderWidth: 1,
                paddingVertical: 5,
                borderRadius: 20,
              }}>
              <Icon
                style={{marginLeft: 10}}
                name="lock"
                size={30}
                color="gray"
              />

              <TextInput
                secureTextEntry
                style={{
                  color: 'gray',
                  marginVertical: 5,
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                placeholder="Enter Your Passwrod"
                placeholderTextColor={'gray'}
                value={password}
                onChangeText={text => setpassword(text)}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text>Keep Me Logged In</Text>
            <Text style={{fontWeight: 500, color: '#007fff'}}>
              Forgot Password?
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}} />
        <Pressable
          onPress={handlelogin}
          style={{
            width: 200,
            backgroundColor: 'black',
            padding: 15,
            marginTop: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 6,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Login
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Signup')}
          style={{marginTop: 10}}>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
