import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
type CurrencyBtnProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyBtn = (props: CurrencyBtnProps): JSX.Element => {
  return (
    <View style={styles.btncontainer}>
      <Text style={styles.flags}>{props.flag}</Text>
      <Text style={styles.countryname}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btncontainer: {
    alignItems: 'center',
  },
  flags: {
    fontSize: 16,
    color: 'darkgrey',
    marginBottom: 4,
  },
  countryname: {
    fontSize: 28,
    color: 'purple',
    marginBottom: 4,
  },
});
export default CurrencyBtn;
