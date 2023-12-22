import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {clearAsyncStorage} from '../Async Storage/storage';

const Signup = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigation = useNavigation();

  const handleregister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post('http://your own ip config cmd ip address :3000/register', user, {
        timeout: 5000,
      }) //use your own ip address instead of localhost ie last one in ipconfig command in cmd or git bash
      .then(response => {
        // console.log(response);
        Alert.alert('Registered Successfully. Please Login');
        navigation.navigate('Login');
        setname('');
        setemail('');
        setpassword('');
      })
      .catch(error => {
        Alert.alert('Registration Failure');
        console.log(error, 'error occurred');
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
      <KeyboardAvoidingView behavior={{padding: 100}}>
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
              marginTop: 20,
              color: 'black',
            }}>
            Register to your account.
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
            <Icon
              style={{marginLeft: 10}}
              name="person"
              size={30}
              color="gray"
            />

            <TextInput
              style={{
                color: 'gray',
                marginVertical: 5,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder="Enter Your Name"
              placeholderTextColor={'gray'}
              value={name}
              onChangeText={text => setname(text)}
            />
          </View>
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
                placeholder="Enter Your Password"
                placeholderTextColor={'gray'}
                value={password}
                onChangeText={text => setpassword(text)}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: 0}} />
        <Pressable
          style={{
            width: 200,
            backgroundColor: 'black',
            padding: 15,
            marginTop: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 6,
          }}
          onPress={handleregister}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            SignUp
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()} style={{marginTop: 10}}>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
            Already have an Account? Login
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
