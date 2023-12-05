import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 9,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 10,
  },
  cardOne: {backgroundColor: 'red'},
  cardTwo: {backgroundColor: 'blue'},
  cardThree: {backgroundColor: 'green'},
});
