'use strict'
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking, ScanScreenStyleheet } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

import ScanScreenStyle from './ScanScreenStyle';

export default class ScanScreen extends Component {
  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => Console.log('An error', err));
  }
  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text>This is scanner</Text>
        }
        bottomContent={
          <TouchableOpacity>
            <Text>Got it?</Text>
          </TouchableOpacity>
        }
        cameraStyle={
          ScanScreenStyle.cameraFocus
        }
        showMarker={true}
        customMarker={
          <View style={ScanScreenStyle.rectangleContainer}>
            <View style={ScanScreenStyle.rectangle}>
              <View style={[ScanScreenStyle.smallRectangle, ScanScreenStyle.smallRectangle_TopLeft]} />
              <View style={[ScanScreenStyle.smallRectangle, ScanScreenStyle.smallRectangle_TopRight]} />
              <View style={[ScanScreenStyle.smallRectangle, ScanScreenStyle.smallRectangle_BottomLeft]} />
              <View style={[ScanScreenStyle.smallRectangle, ScanScreenStyle.smallRectangle_BottomRight]} />
            </View>
          </View>
        }
      />
    )
  }
}

