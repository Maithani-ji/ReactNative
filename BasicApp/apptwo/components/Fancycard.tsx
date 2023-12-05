import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

export default function Fancycard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>

      <Text style={styles.txt}>Trending Places</Text>
      <ScrollView horizontal>
        <View style={[styles.card, styles.cardelevated]}>
          <Image
            style={styles.cardimage}
            source={{
              uri: 'https://imgs.search.brave.com/nCWKImwfAAF-oaBE-4_F8mde-BTPgZCtvRRNwZECCh0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3VsdHVyYWxpbmRp/YS5uZXQvaWxpaW1h/Z2VzL0hhd2EtTWFo/YWwtMi5qcGc',
            }}
          />
          <View style={styles.cardbody}>
            <Text style={styles.cardtitle}>Hawa Mahal</Text>
            <Text style={styles.cardlabel}>Pink City,Jaipur</Text>
            <Text style={styles.carddesc}>
              Built From red and pink sandstone ,one the edge of a city palace
              and extends to the Zenana, or women's chambers. The structure was
              built in 1799 by the Maharaja Sawai Pratap Singh, grandson of
              Maharaja Sawai Jai Singh
            </Text>
            <Text style={styles.cardloc}>12 mins away</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Image
            style={styles.cardimage}
            source={{
              uri: 'https://imgs.search.brave.com/nCWKImwfAAF-oaBE-4_F8mde-BTPgZCtvRRNwZECCh0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3VsdHVyYWxpbmRp/YS5uZXQvaWxpaW1h/Z2VzL0hhd2EtTWFo/YWwtMi5qcGc',
            }}
          />
          <View style={styles.cardbody}>
            <Text style={styles.cardtitle}>Hawa Mahal</Text>
            <Text style={styles.cardlabel}>Pink City,Jaipur</Text>
            <Text style={styles.carddesc}>
              Built From red and pink sandstone ,one the edge of a city palace
              and extends to the Zenana, or women's chambers. The structure was
              built in 1799 by the Maharaja Sawai Pratap Singh, grandson of
              Maharaja Sawai Jai Singh
            </Text>
            <Text style={styles.cardloc}>12 mins away</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Image
            style={styles.cardimage}
            source={{
              uri: 'https://imgs.search.brave.com/nCWKImwfAAF-oaBE-4_F8mde-BTPgZCtvRRNwZECCh0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3VsdHVyYWxpbmRp/YS5uZXQvaWxpaW1h/Z2VzL0hhd2EtTWFo/YWwtMi5qcGc',
            }}
          />
          <View style={styles.cardbody}>
            <Text style={styles.cardtitle}>Hawa Mahal</Text>
            <Text style={styles.cardlabel}>Pink City,Jaipur</Text>
            <Text style={styles.carddesc}>
              Built From red and pink sandstone ,one the edge of a city palace
              and extends to the Zenana, or women's chambers. The structure was
              built in 1799 by the Maharaja Sawai Pratap Singh, grandson of
              Maharaja Sawai Jai Singh
            </Text>
            <Text style={styles.cardloc}>12 mins away</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 22,
    fontWeight: 'normal',
    paddingHorizontal: 10,
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    height: 400,
    width: 340,
    borderRadius: 20,
    marginVertical: 14,
    marginHorizontal: 12,
  },
  cardelevated: {
    backgroundColor: 'black',
    elevation: 50,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardimage: {
    height: 180,
    marginBottom: 15,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 60,
  },
  cardbody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 13,
  },
  cardtitle: {
    color: 'lightgrey',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardlabel: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 10,
  },
  carddesc: {
    color: 'lightgrey',
    fontSize: 12,
    fontWeight: 'bold',
    flexShrink: 1,
    marginBottom: 20,
  },
  cardloc: {color: 'darkgrey'},
});
