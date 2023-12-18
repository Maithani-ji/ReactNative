import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './screen/Login';
import {onAuthStateChanged, User} from 'firebase/auth';
import {Firebaseauth} from './firebaseauth';
import inside from './screen/inside';

const Stack = createNativeStackNavigator();
//const insideStack = createNativeStackNavigator();

// function inside() {
//   return (
//     <NavigationContainer>
//       <insideStack.Navigator initialRouteName="Login">
//         <insideStack.Screen name="Inside" component={inside} />
//       </insideStack.Navigator>
//     </NavigationContainer>
//   );
// }

function App(): React.JSX.Element {
  const [user, setuser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(Firebaseauth, user => {
      console.log(user, 'user');
      setuser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen name="Inside" component={inside} />
        ) : (
          <Stack.Screen name="login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
