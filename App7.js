import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App7 extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.holder}>
          <View style={styles.circleHolder}>
            <View style={styles.circle} />
          </View>
          <View style={styles.square} />
        </View>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleHolder: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2
  },
  square: {
    backgroundColor: 'green',
    width: 200,
    height: 200,
  },
});