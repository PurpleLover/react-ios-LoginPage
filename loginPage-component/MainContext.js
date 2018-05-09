import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Icon,
} from 'react-native-elements';
import Loader from './Loader';
import { scale, moderateScale, verticalScale } from '../loginPage-scaling/Scaling';

export default class MainContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isVisibility: true,
      rememberChecked: false,
      username: '',
      password: '',
    }
  }
  _next = () => {
    this._passwordInput && this._passwordInput.focus();
  }

  _submit = () => {
    const { username, password } = this.state;
    if (username == '' || password == '') {
      alert('err');
    }
    else {
      this.setState({
        isLoading: true,
      });
      //alert('welcome ' + username + password);
    }
  }

  _handleChange = fieldName => text => {
    this.setState({
      [fieldName]: text
    });
  }

  _checkRemember = () => {
    this.setState({
      rememberChecked: !this.state.rememberChecked,
    });
  }

  managePasswordVisibility = () => {
    this.setState({
      isVisibility: !this.state.isVisibility,
    });
  }
  
  render() {
    const checkBoxChecked = require('../loginPage-assets/loginPage-checkbox-checked.png');
    const checkBoxUncheck = require('../loginPage-assets/loginPage-checkbox-unchecked.png');

    const passwordVisibilityImage = this.state.isVisibility ? <Icon name='eye-slash' type='font-awesome' /> : <Icon name='eye' type='font-awesome' />;
    const checkboxImage = this.state.rememberChecked ? checkBoxChecked : checkBoxUncheck;

    const loginTitle = 'ĐĂNG NHẬP HỆ THỐNG';
    const usernameLabel = 'Tên đăng nhập:';
    const passwordLabel = 'Mật khẩu:';
    const rememberMe = 'Nhớ mật khẩu';
    const forgotPassword = 'Quên mật khẩu?';
    const buttonValue = 'ĐĂNG NHẬP';
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{loginTitle}</Text>
        <View style={styles.separator} />
        <View style={styles.content}>
          <Text style={styles.textBold}>{usernameLabel}</Text>
          <TextInput
            style={styles.inputBox}
            ref={ref => { this._usernameInput = ref }}
            onChangeText={this._handleChange('username')}
            returnKeyType='next'
            onSubmitEditing={this._next}
          />
          <Text style={styles.textBold}>{passwordLabel}</Text>
          <View style={styles.passwordBox}>
            <TextInput
              style={styles.inputBox}
              ref={ref => { this._passwordInput = ref }}
              onChangeText={this._handleChange('password')}
              returnKeyType='done'
              secureTextEntry={this.state.isVisibility}
            />
            <TouchableOpacity
              style={styles.visibleIcon}
              onPress={this.managePasswordVisibility}
            >
              {passwordVisibilityImage}
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.rememberMe} onPress={this._checkRemember}>
              <Image source={checkboxImage} />
              <Text style={styles.textCheckBox}>{rememberMe}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.textBold, styles.textDanger]}>{forgotPassword}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableHighlight onPress={this._submit} underlayColor="#e13748" style={styles.loginButton}>
          <Text style={styles.loginButtonText}>{buttonValue}</Text>
        </TouchableHighlight>
        <Loader loading={this.state.isLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 15,
    marginLeft: scale(20), //30
    marginRight: scale(20),
    marginTop: verticalScale(190), //220
    marginBottom: verticalScale(190),  //240
  },
  content: {
    marginTop: '4.5%', //10
    marginRight: '8%', //30
    marginLeft: '8%', //30
    alignSelf: 'stretch',
  },
  passwordBox: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    position: 'relative',
  },
  visibleIcon: {
    position: 'absolute',
    right: 0,
    margin: '1.5%', //5
  },
  inputBox: {
    height: verticalScale(40), //36
    padding: scale(4), //4
    marginBottom: verticalScale(12), //5
    flexGrow: 1,
    fontSize: moderateScale(14, 2), //14,2
    borderWidth: 1,
    borderColor: '#acb7b1',
    borderRadius: 8,
    color: '#666666',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    textAlign: 'center',
    margin: scale(10), //10
  },
  separator: {
    borderBottomColor: '#cdd4d0',
    borderBottomWidth: 1,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: moderateScale(13, 1.5),
    alignSelf: 'flex-start',
    paddingBottom: moderateScale(5, 1), //5
  },
  textDanger: {
    color: 'red',
    fontWeight: 'bold',
  },
  textCheckBox: {
    marginLeft: scale(5),
    fontSize: moderateScale(13, 1.5),
  },
  footer: {
    paddingBottom: moderateScale(8, 1), //5
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberMe: {
    flex: 1,
    flexDirection: 'row',
  },
  loginButton: {
    backgroundColor: '#da2032',
    borderRadius: 10,
    marginLeft: '30%',
    marginRight: '30%',
  },
  loginButtonText: {
    textAlign: 'center',
    fontSize: moderateScale(14, 2),
    padding: '5%',
    color: 'white',
    fontWeight: 'bold',
  },
  checkboxImage: {
    width: '100%',
    height: '100%',
  },
});