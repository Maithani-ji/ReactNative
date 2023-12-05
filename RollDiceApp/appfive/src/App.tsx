import React, {useState, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import type {PropsWithChildren} from 'react';

import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import diceOne from '../asset/Onee.png';
import diceTwo from '../asset/Twoo.png';
import diceThree from '../asset/Threee.png';
import diceFour from '../asset/Fourr.png';
import diceFive from '../asset/Fivee.png';
import diceSix from '../asset/Sixx.png';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};
function App(): JSX.Element {
  const [diceImage, setDiceimage] = useState<ImageSourcePropType>(diceOne);
  const diceRoll = useRef(new Animated.Value(0)).current;

  const rolleddiceOnTap = () => {
    Animated.timing(diceRoll, {
      toValue: 1,
      duration: 125,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => {
      let randnumber = Math.floor(Math.random() * 6) + 1;

      switch (randnumber) {
        case 1:
          setDiceimage(diceOne);
          break;
        case 2:
          setDiceimage(diceTwo);
          break;
        case 3:
          setDiceimage(diceThree);
          break;
        case 4:
          setDiceimage(diceFour);
          break;
        case 5:
          setDiceimage(diceFive);
          break;
        case 6:
          setDiceimage(diceSix);
          break;
        default:
          break;
      }

      diceRoll.setValue(0);
    });
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  const rotate = diceRoll.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1440deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{rotate}]}}>
        <Image source={diceImage} style={styles.diceImage} />
      </Animated.View>

      <Pressable onPress={rolleddiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
      </Pressable>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <Dice imageUrl={diceImage} />
  //     <Pressable onPress={rolleddiceOnTap}>
  //       <Text style={styles.rollDiceBtnText}>Roll The Dice!</Text>
  //     </Pressable>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 450,
    height: 450,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
// import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   Image,
//   ImageSourcePropType,
//   Pressable,
//   StyleSheet,
//   Text,
//   View,
//   Animated,
// } from 'react-native';
// import {Easing} from 'react-native-reanimated';
// import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// import diceOne from '../asset/Onee.png';
// import diceTwo from '../asset/Twoo.png';
// import diceThree from '../asset/Threee.png';
// import diceFour from '../asset/Fourr.png';
// import diceFive from '../asset/Fivee.png';
// import diceSix from '../asset/Sixx.png';

// type DiceProps = PropsWithChildren<{
//   imageUrl: ImageSourcePropType;
// }>;

// const options = {
//   enableVibrateFallback: true,
//   ignoreAndroidSystemSettings: false,
// };

// const Dice = ({imageUrl}: DiceProps): JSX.Element => {
//   return (
//     <View>
//       <Image style={styles.diceImage} source={imageUrl} />
//     </View>
//   );
// };

// function App(): JSX.Element {
//   const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne);

//   const rotateValue = new Animated.Value(0);

//   const rolleddiceOnTap = () => {
//     // Reset the animation value
//     rotateValue.setValue(0);

//     Animated.timing(rotateValue, {
//       toValue: 1,
//       duration: 1000,
//       easing: Easing.out(Easing.exp),
//       useNativeDriver: true,
//     }).start(() => {
//       let randnumber = Math.floor(Math.random() * 6) + 1;

//       switch (randnumber) {
//         case 1:
//           setDiceImage(diceOne);
//           break;
//         case 2:
//           setDiceImage(diceTwo);
//           break;
//         case 3:
//           setDiceImage(diceThree);
//           break;
//         case 4:
//           setDiceImage(diceFour);
//           break;
//         case 5:
//           setDiceImage(diceFive);
//           break;
//         case 6:
//           setDiceImage(diceSix);
//           break;
//         default:
//           break;
//       }
//     });
//     ReactNativeHapticFeedback.trigger('impactLight', options);
//   };

//   const spin = rotateValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[styles.diceContainer, {transform: [{rotate: spin}]}]}>
//         <Dice imageUrl={diceImage} />
//       </Animated.View>
//       <Pressable onPress={rolleddiceOnTap}>
//         <Text style={styles.rollDiceBtnText}>Roll The Dice!</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFF2F2',
//   },
//   diceContainer: {
//     margin: 12,
//   },
//   diceImage: {
//     width: 450,
//     height: 450,
//   },
//   rollDiceBtnText: {
//     paddingVertical: 10,
//     paddingHorizontal: 40,
//     borderWidth: 2,
//     borderRadius: 8,
//     borderColor: '#E5E0FF',
//     fontSize: 16,
//     color: '#8EA7E9',
//     fontWeight: '700',
//     textTransform: 'uppercase',
//   },
// });

// export default App;
