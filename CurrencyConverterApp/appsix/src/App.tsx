import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

//constant currency array
import {currencyByRupee} from './constants';
// componenet currencybtn
import CurrencyBtn from './components/CurrencyBtn';

function App(): JSX.Element {
  const [inputvalue, setinputvalue] = useState('');
  const [resultvalue, setresultvalue] = useState('');
  const [targetcurrency, settargetcurrency] = useState('');

  const btnpressed = (targetvalue: Currency) => {
    if (!inputvalue) {
      return Snackbar.show({
        text: 'Enter A Value To Convert',
        backgroundColor: 'violet',
        textColor: 'white',
      });
    }

    const inputamount = parseFloat(inputvalue);
    if (!isNaN(inputamount)) {
      const convertedvalue = inputamount * targetvalue.value;
      const result = `${targetvalue.symbol} ${convertedvalue.toFixed(2)}`;
      setresultvalue(result);
      settargetcurrency(targetvalue.name);
    } else {
      return Snackbar.show({
        text: 'Not a Valid Number to Convert',
        backgroundColor: 'violet',
        textColor: 'white',
      });
    }
  };

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputvalue}
              clearButtonMode="always"
              onChangeText={setinputvalue}
              keyboardType="number-pad"
              keyboardAppearance="dark"
              placeholder="Enter Amount in Rupee"
            />
          </View>
          {resultvalue && <Text style={styles.resultTxt}>{resultvalue}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={2}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetcurrency === item.name && styles.selected,
                ]}
                onPress={() => btnpressed(item)}>
                <CurrencyBtn {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
