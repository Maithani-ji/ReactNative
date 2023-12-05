import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Actioncard() {
  function openwebsite(link: string) {
    Linking.openURL(link); // used with button with onPress when pressed Linking uses openurl to open that url connected to button.
  }

  return (
    <View>
      <Text style={styles.headingText}>Actioncard</Text>
      <View style={[styles.card, styles.cardelevated]}>
        <View style={styles.headingcontainer}>
          <Text style={styles.headertext}>
            What's new in GOOGLE these days.?
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOGDG4fx_hNG4flUi0jt6XsQlO0xgdp6WgQ&usqp=CAU',
          }}
          style={styles.image}
        />
        <View style={styles.carddesc}>
          <Text numberOfLines={5} style={styles.desc}>
            Google System updates make your Android devices more secure and
            reliable and give you new and useful features. They include updates
            from Google to the Android operating system, Google Play Store, and
            Google Play services. Google System updates are available for
            phones, tablets, Android TV and Google TV devices, Android
            Auto-enabled vehicles, Wear OS devices
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() =>
              openwebsite(
                'https://support.google.com/product-documentation/answer/11412553?hl=en',
              )
            }>
            <Text style={styles.footertext}>Learn more</Text>
          </TouchableOpacity>
          <TouchableOpacity // to make it like a button used with onPress like onClick.
            onPress={() =>
              openwebsite(
                'https://support.google.com/product-documentation/answer/11412553?hl=en',
              )
            }>
            <Text style={styles.footertext}> Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  card: {
    height: 420,
    width: 370,
    borderRadius: 9,
    marginVertical: 14,
    marginHorizontal: 12,
  },
  headingcontainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertext: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: 'grey',
  },
  cardelevated: {
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
    marginTop: 20,
    height: 150,
    width: '100%',
    borderRadius: 15,
  },
  carddesc: {
    padding: 10,
  },
  desc: {
    color: 'darkgrey',
    fontSize: 15,
    fontWeight: 'bold',
    flexShrink: 1,
    marginTop: 20,
    marginBottom: 8,
  },
  footer: {
    padding: 10,
    flexDirection: 'row', //to make some element in a same line otherwise default it goes to next line
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  footertext: {fontSize: 15, fontWeight: 'bold', color: 'grey'},
});
