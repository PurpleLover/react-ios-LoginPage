/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { 
  CheckBox,
} 
from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class InputBox extends React.PureComponent {
  render() {
    const textField = this.props.textField;
    return (
      <View style={styles.content}>
        <Text style={styles.textBold}>{textField}</Text>
        <TextInput style={styles.inputBox} />
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  _onPress = (event) => {
    if (this.state.checked) {
      this.setState({
        checked: false,
      });
    }
    else {
      this.setState({
        checked: true,
      });
    }
  }

  render() {
    const backgroundImage = require('./loginPage-assets/loginPage-background.png');
    const loginTitle = 'ĐĂNG NHẬP HỆ THỐNG';
    const usernameLabel = 'Tên đăng nhập:';
    const passwordLabel = 'Mật khẩu:';
    const rememberMe = 'Nhớ mật khẩu';
    const forgotPassword = 'Quên mật khẩu?';
    const buttonValue = 'ĐĂNG NHẬP';

    return (
      <View style={styles.containerFluid}>
      <Image source={backgroundImage} style={styles.image} />
      
        <View style={styles.container}>
          <Text style={styles.title}>{loginTitle}</Text>
          <View style={styles.separator} />
          <View style={styles.content}>
            <Text style={styles.textBold}>{usernameLabel}</Text>
            <TextInput style={styles.inputBox} />
            <Text style={styles.textBold}>{passwordLabel}</Text>
            <TextInput style={styles.inputBox} />
            <View style={styles.footer}>
              <CheckBox title={rememberMe} checked={this.state.checked} onPress={this._onPress} />
              <TouchableOpacity>
                <Text style={styles.textDanger}>{forgotPassword}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableHighlight onPress={() => { }} underlayColor="#e13748" style={styles.loginButton}>
            <Text style={styles.loginButtonText}>{buttonValue}</Text>
          </TouchableHighlight>
        </View>
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  containerFluid: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 15,
    margin: 30,
    marginTop: 220,
    marginBottom: 240,
  },
  content: {
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    alignSelf: 'stretch',
  },
  inputBox: {
    height: 36,
    padding: 4,
    marginBottom: 5,
    flexGrow: 1,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#acb7b1',
    borderRadius: 8,
    color: '#666666',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  separator: {
    borderBottomColor: '#cdd4d0',
    borderBottomWidth: 1,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'flex-start',
    paddingBottom:5,
  },
  textDanger: {
    color: 'red',
    fontWeight: 'bold',
  },
  footer: {
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButton: {
    backgroundColor: '#da2032',
    borderRadius: 10,
    marginLeft: '30%',
    marginRight: '30%',
  },
  loginButtonText: {
    textAlign: 'center',
    fontSize: 14,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  }
});