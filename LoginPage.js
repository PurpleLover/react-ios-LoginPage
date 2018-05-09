import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import MainContext from './loginPage-component/MainContext';
import { scale, moderateScale, verticalScale } from './loginPage-scaling/Scaling';
// const {Keyboard} = require('react-native');
//Keyboard.addListener('keyboardWillShow');


export default class LoginPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = ({
  //     visibleHeight: Dimensions.get('window').height,
  //     backgroundImageSize: {
  //       width: Dimensions.get('window').width,
  //     }
  //   });
  // }

  // componentWillMount = () => {
  //   this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
  //   this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  // }

  // componentWillUnmount = () => {
  //   this.keyboardDidShowListener.remove();
  //   this.keyboardDidHideListener.remove();
  // }

  // keyboardDidShow = (event) => {
  //   let newSize = Dimensions.get('window').height - event.endCoordinates.height;
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  //   this.setState({
  //     visibleHeight: newSize,
  //     backgroundImageSize: {
  //       height: '50%',
  //     }
  //   });
  // }

  // keyboardDidHide = (event) => {
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  //   this.setState({
  //     visibleHeight: Dimensions.get('window').height,
  //     topLogo: {
  //       height: '100%',
  //     }
  //   });
  // }

  render() {
    const backgroundImage = require('./loginPage-assets/loginPage-background.png');

    return (
      <KeyboardAvoidingView 
        style={[
          styles.containerFluid,
        ]}
        behavior='position'
        contentContainerStyle={{
          flex: 1,
        }}
        keyboardVerticalOffset={verticalScale(-180)}
      >
        <Image
          source={backgroundImage}
          style={[
            styles.image,
          ]}
        />
        <MainContext />
      </KeyboardAvoidingView>
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
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});