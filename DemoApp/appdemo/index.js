/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Appnew from './Appnew';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Appnew); // using another  component  instead of app
