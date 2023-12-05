import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [generatedcolor, setgeneratedcolor] = useState('#ffffff');

  const Generatecolor = () => {
    let color = '#';

    const hexacoderange = '0123456789abcdef';

    for (let i = 0; i < 6; i++) {
      color += hexacoderange[Math.floor(Math.random() * 16)];
    }
    setgeneratedcolor(color);
  };

  return (
    // <View style={styles.collageContainer}>
    //   <View style={styles.shape}>
    //     <View style={styles.triangle} />
    //   </View>
    //   <View style={styles.shape}>
    //     <View style={styles.square} />
    //   </View>
    //   <View style={styles.shape}>
    //     <View style={styles.circle} />
    //   </View>
    //   <View style={styles.shape}>
    //     <View style={styles.rectangle} />
    //   </View>
    // </View>
    <>
      <StatusBar backgroundColor={generatedcolor} />
      {/* Statusbar ie your phone's status bar where battery%,networkbaretc* is shown*/}
      <View style={[styles.container, {backgroundColor: generatedcolor}]}>
        <View>
          <TouchableOpacity onPress={Generatecolor}>
            <View style={styles.actionbtn}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                }}>
                Generate Colour
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.codebtn}>
          <Text selectable={true} style={{color: 'black'}}>
            {generatedcolor}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionbtn: {
    borderRadius: 12,
    backgroundColor: 'transparent',
    padding: 10,
    borderWidth: 1.5,
    borderColor: 'black',
  },
  codebtn: {
    margin: 10,
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  // collageContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  // },
  // shape: {
  //   marginBottom: 20,
  // },
  // triangle: {
  //   width: 0,
  //   height: 0,
  //   borderLeftWidth: 50,
  //   borderRightWidth: 50,
  //   borderBottomWidth: 100,
  //   borderStyle: 'solid',
  //   borderLeftColor: 'transparent',
  //   borderRightColor: 'transparent',
  //   borderBottomColor: 'blue', // Change the color as needed
  // },
  // square: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: 'green', // Change the color as needed
  // },
  // circle: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  //   backgroundColor: 'red', // Change the color as needed
  // },
  // rectangle: {
  //   width: 150,
  //   height: 75,
  //   backgroundColor: 'purple', // Change the color as needed
  // },
});

export default App;
