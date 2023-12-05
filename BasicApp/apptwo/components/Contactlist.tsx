import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

export default function Contactlist() {
  const contacts = [
    {
      id: 1,
      imageurl:
        'https://robohash.org/sintaccusantiumet.png?size=50x50&set=set1',
      status: 'Pacocha-Haag',
      name: 'Gerard',
    },
    {
      id: 2,
      imageurl: 'https://robohash.org/utquiplaceat.png?size=50x50&set=set1',
      status: 'Glover-Bayer',
      name: 'Haroun',
    },
    {
      id: 3,
      imageurl: 'https://robohash.org/estatqueet.png?size=50x50&set=set1',
      status: 'Dach Group',
      name: 'Lucias',
    },
    {
      id: 4,
      imageurl:
        'https://robohash.org/accusamusvoluptatenostrum.png?size=50x50&set=set1',
      status: 'Kunde, Effertz and Renner',
      name: 'Ortensia',
    },
    {
      id: 5,
      imageurl: 'https://robohash.org/sedidoccaecati.png?size=50x50&set=set1',
      status: 'Hoeger LLC',
      name: 'Kippie',
    },
    {
      id: 6,
      imageurl:
        'https://robohash.org/quaedoloremqueharum.png?size=50x50&set=set1',
      status: 'Hudson-Windler',
      name: 'Marjory',
    },
    {
      id: 7,
      imageurl: 'https://robohash.org/etremdignissimos.png?size=50x50&set=set1',
      status: 'Zieme Group',
      name: 'Reidar',
    },
    {
      id: 8,
      imageurl: 'https://robohash.org/nonetea.png?size=50x50&set=set1',
      status: "Stark, O'Hara and Hayes",
      name: 'Nancey',
    },
    {
      id: 9,
      imageurl: 'https://robohash.org/sintmodia.png?size=50x50&set=set1',
      status: 'Wisoky LLC',
      name: 'Frans',
    },
    {
      id: 10,
      imageurl:
        'https://robohash.org/ipsamaperiamtotam.png?size=50x50&set=set1',
      status: 'Stehr Inc',
      name: 'Estella',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contactlist</Text>

      <ScrollView horizontal scrollEnabled={true} style={styles.container}>
        {
          contacts.map(({id, imageurl, name, status}) => (
            <View key={id} style={styles.contact}>
              <Image
                source={{
                  uri: imageurl,
                }}
                style={styles.image}
              />
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          )) //() if used this , no return statement , if used {} then-> return() is used and return the dynamic statement
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    marginLeft: 10,
  },
  contact: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 125,
    borderRadius: 9,
    marginVertical: 14,
    marginHorizontal: 5,
    paddingHorizontal: 10,

    backgroundColor: 'lightgrey',
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  image: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  status: {
    fontStyle: 'italic',
    fontSize: 15,
    color: 'grey',
  },
});
