import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';

type CheckoutProps = NativeStackScreenProps<RootStackPramList, 'Checkout'>;
type itemprop = PropsWithChildren<{
  product: Product;
}>;

const Checkout = ({route}: CheckoutProps) => {
  const {item} = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1000,
      }}>
      <Text style={{fontSize: 50, color: 'lightgrey'}}>Checkout Page</Text>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
