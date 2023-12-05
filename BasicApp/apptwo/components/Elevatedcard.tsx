import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Elevatedcard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>

      <ScrollView horizontal style={styles.container}>
        {/* using horizontal with ScrollView for scrolling horizontally */}
        <View style={[styles.card, styles.cardelevated]}>
          <Text>Slide</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>😁</Text>
        </View>
      </ScrollView>
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
    padding: 9,
  },
  card: {
    borderRadius: 5,
    margin: 10,
    height: 100,
    width: 100,
    color: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardelevated: {
    backgroundColor: '#CAD5E2',

    elevation: 10, // show elevation in  card like hover effect
    shadowOffset: {
      // for providing shadow , must be used with shadowColor.
      width: 1,
      height: 1,
    },
    shadowColor: 'red',
    shadowOpacity: 0.9, //give opacity to shadow
    shadowRadius: 15, // give radius to shadow
  },
});
