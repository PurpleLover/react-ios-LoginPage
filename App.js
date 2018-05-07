/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  StackNavigator,
  navigatino
} from 'react-navigation';
import LoginPage from './LoginPage';

const App = StackNavigator(
  {
    Home: { screen: LoginPage, },
  },
  {
    headerMode: 'none',
  },
);
export default App;