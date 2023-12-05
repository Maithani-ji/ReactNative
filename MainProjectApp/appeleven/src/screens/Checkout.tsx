import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, useContext, useState, useEffect} from 'react';
import one from '../assests/one.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
//import {RootStackPramList} from '../App';
import {AppStackParamList} from '../routes/AppStack';
import {ImageBackground} from 'react-native';
import {FAB} from '@rneui/themed';

import {AppwriteContext} from '../appwrite/AppwriteContext';

type UserObj = {
  name: String;
  email: String;
};

type CheckoutProps = NativeStackScreenProps<AppStackParamList, 'Checkout'>;
type itemprop = PropsWithChildren<{
  product: Product;
}>;

const Checkout = ({route}: CheckoutProps) => {
  const {item} = route.params;
  const [userData, setUserData] = useState<UserObj>();
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);

  useEffect(() => {
    appwrite.getCurrentUser().then(response => {
      if (response) {
        const user: UserObj = {
          name: response.name,
          email: response.email,
        };
        setUserData(user);
      }
    });
  }, [appwrite]);

  return (
    <ImageBackground
      blurRadius={10}
      source={one}
      //{{uri: 'https://wepik.com/api/image/ai/9a549fd0-3ff3-4675-ae6b-7912459cf268?thumb=1'}} ,
      style={{width: '100%', height: '100%'}}>
      {/* <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 1000,
          shadowColor: '#000', // Set the shadow color to black
          shadowOffset: {width: 0, height: 10}, // Set the shadow offset to 0 horizontally and 10 vertically
          shadowOpacity: 0.5, // Set the shadow opacity to 50%
          shadowRadius: 10, // Set the shadow blur radius to 10px
        }}>
        <Text style={{fontSize: 50, color: 'black'}}>Checkout Page</Text>
      </View> */}

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.productImageContainer}>
            <Image source={{uri: item.imageUrl}} style={styles.productImage} />
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>

            <Text style={styles.productAddress}>User Details:</Text>

            {userData && (
              <View style={styles.details}>
                <Text style={styles.nameText}>Name: {userData.name}</Text>
                <Text style={styles.emailText}>Email: {userData.email}</Text>
                <Text style={styles.productQuantity}>Quantity:1</Text>
              </View>
            )}

            <Text style={styles.productPrice}>
              Price: ₹{item.discountPrice}
            </Text>
          </View>
        </View>
        <View>
          <FAB
            //placement="right"
            color="green"
            size="large"
            title={
              <Text style={{fontWeight: 'bold', fontSize: 25}}>PayNow</Text>
            }
            icon={{name: 'arrow-right', color: '#FFFFFF'}}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  details: {
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    marginVertical: 5,
  },
  container: {
    margin: 100,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1, // Make the card take up 100% of the available space in its parent view
    flexGrow: 1, // Make the card grow proportionally with its parent view
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
    borderRadius: 10,
    elevation: 1000,
    marginBottom: 10,

    width: '200%',
  },
  productImageContainer: {
    flex: 1, // Give the product image container 1 unit of flex space
    justifyContent: 'center', // Align the product image vertically
    alignItems: 'center', // Align the product image horizontally
  },
  productImage: {
    width: '100%', // Set the product image width to 80% of the parent container
    height: '100%', // Set the product image height to 80% of the parent container
    resizeMode: 'contain', // Maintain the aspect ratio of the image
  },
  productDetails: {
    flex: 1, // Give the product details container 1 unit of flex space
    marginTop: 100,
    color: 'white',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  productQuantity: {
    marginVertical: 5,
    color: 'black',
  },
  productAddress: {
    marginVertical: 5,
    color: 'white',
  },
  productPrice: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
