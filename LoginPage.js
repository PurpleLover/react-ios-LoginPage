import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Animated,
  Keyboard,
} from 'react-native';
import MainContext from './loginPage-component/MainContext';
import { scale, moderateScale, verticalScale } from './loginPage-scaling/Scaling';
// const {Keyboard} = require('react-native');
//Keyboard.addListener('keyboardWillShow');

const IMAGE_HEIGHT = scale(201);
const IMAGE_HEIGHT_SMALL = scale(100);

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    this.viewFlex = new Animated.Value(1);
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT_SMALL,
      }),
      Animated.timing(this.viewFlex, {
        duration: event.duration,
        toValue: 0,
      }),
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT,
      }),
      Animated.timing(this.viewFlex, {
        duration: event.duration,
        toValue: 1,
      }),
    ]).start();
  };

  render() {
    // const backgroundImage = require('./loginPage-assets/loginPage-background.png');
    const backgroundImageHeader = require('./loginPage-assets/loginPage-bg-header.png');
    const backgroundImageBody = require('./loginPage-assets/loginPage-bg-body.png');
    const backgroundImageFooter = require('./loginPage-assets/loginPage-bg-footer.png');

    return (
      <Animated.View style={[
        styles.containerFluid,
        { flex: 1, paddingBottom: this.keyboardHeight }
      ]}
      >
        <Animated.View style={{ flex: this.viewFlex, }}>
          <Animated.Image
            source={backgroundImageHeader}
            style={[
              styles.image,
              { height: '100%', opacity: 1 }
            ]}
          />
        </Animated.View>
        <Animated.View style={{ flex: 3 }}>
          <Animated.Image
            source={backgroundImageBody}
            style={[
              styles.image,
              { height: '100%', }
            ]}
          />
          <MainContext/>
        </Animated.View>
        <Animated.View style={{ flex: this.viewFlex }}>
          <Animated.Image
            source={backgroundImageFooter}
            style={[
              styles.image,
              { height: '100%'}
            ]}
          />
        </Animated.View>

      </Animated.View>
    );
  }
}

// Number in comments is used-to-atrributes
const styles = StyleSheet.create({
  containerFluid: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    //flex: 1,
    position: 'absolute',
    width: '100%',
    //height: scale(201),
    resizeMode: 'stretch',
    //top: 0, bottom: 0, left: 0, right: 0,
  },
});