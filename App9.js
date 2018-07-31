import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default class App9 extends Component {
  render() {
    return (
      <ScrollView style={{flexDirection: 'column', marginTop: 40}}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
          <Text>Unique Device ID</Text>
          <Text>{DeviceInfo.getUniqueID()}</Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
          <Text>Brand Name</Text>
          <Text>{DeviceInfo.getBrand()}</Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
          <Text>Serial Number</Text>
          <Text>{DeviceInfo.getSerialNumber()}</Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
          <Text>Time Zone</Text>
          <Text>{DeviceInfo.getTimezone()}</Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
          <Text>Device ID</Text>
          <Text>{DeviceInfo.getDeviceId()}</Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
          <Text>User Agent</Text>
          <Text>{DeviceInfo.getUserAgent()}</Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
          <Text>System Version</Text>
          <Text>{DeviceInfo.getSystemVersion()}</Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}></View>
        </View>
      </ScrollView>
    );
  }
}