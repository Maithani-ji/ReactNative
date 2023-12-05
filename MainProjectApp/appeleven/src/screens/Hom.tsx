import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
//import {RootStackPramList} from '../App';
import ProductItem from '../components/ProductItem';
import Seperator from '../components/Seperator';
import {PRODUCTS_LIST} from '../data/constants';
import {AppStackParamList} from '../routes/AppStack';
import {ImageBackground} from 'react-native';
import one from '../assests/one.png';
type HomeProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 60}}
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {product: item});
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
