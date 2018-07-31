import React, { Component } from 'react';
import {View, Text} from 'react-native';

import {StackNavigator} from 'react-navigation';
import QRCodeGen from './QRCodeGen';
import ScanScreen from './ScanScreen';

const App4 = StackNavigator(
  {
    Home: {screen: ScanScreen},
  }
)
export default App4;