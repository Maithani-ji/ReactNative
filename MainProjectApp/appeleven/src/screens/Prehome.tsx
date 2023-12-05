import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import React, {useContext} from 'react';
import {Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
//import {RootStackPramList} from '../App';
import one from '../assests/one.png';
import {AppStackParamList} from '../routes/AppStack';

import {AppwriteContext} from '../appwrite/AppwriteContext';
import Snackbar from 'react-native-snackbar';
import {FAB} from '@rneui/themed';

type PreHomeProps = NativeStackScreenProps<AppStackParamList, 'Prehome'>;

const Prehome = ({navigation}: PreHomeProps) => {
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);

  const handleLogout = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'Logout Successful',
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  };

  return (
    <>
      <StatusBar translucent={true} hidden={true} />
      <ImageBackground
        blurRadius={10}
        source={one}
        //{{uri: 'https://wepik.com/api/image/ai/9a549fd0-3ff3-4675-ae6b-7912459cf268?thumb=1'}} ,
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Button
      title="Go To Products"
      onPress={() => {
        navigation.navigate('Home');
      }}
    /> */}
          <FAB
            //placement="right"
            color="orange"
            size="large"
            title={
              <Text style={{fontWeight: 'bold', fontSize: 25}}>
                Go To Products
              </Text>
            }
            icon={{name: 'arrow-right', color: '#FFFFFF'}}
            onPress={() => {
              navigation.navigate('Home'); // Replace 'ProductsList' with the actual screen name for the Products List
            }}
          />
          <FAB
            // placement="center"
            color="#f02e65"
            size="small"
            title={
              <Text style={{fontWeight: 'bold', color: 'white'}}>Log Out</Text>
            }
            icon={{name: 'logout', color: '#FFFFFF'}}
            onPress={handleLogout}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default Prehome;

const styles = StyleSheet.create({});
