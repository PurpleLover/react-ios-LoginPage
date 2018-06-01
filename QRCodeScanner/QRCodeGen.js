'use strict'
import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import QRCode from 'react-native-qrcode';

export default class QRCodeGen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          placeholder='Enter some text to generate qr code'
          onChangeText={(text)=>this.setState({text})}
          value={this.state.text}
        />
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='pink'
          fgColor='white'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});