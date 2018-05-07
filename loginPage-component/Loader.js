import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Modal,
  Dimensions,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
} from '../loginPage-scaling/Scaling';

const Loader = props => {
  const { loading, ...attributes } = props;
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={loading}
      onRequestClose={() => { }}>
      <View style={styles.modalBackground}>
        <View style={styles.aiWrapper}>
          <ActivityIndicator animating={loading} size='large' color='red' />
          <Text style={styles.textAuth}>Đang xác thực</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  aiWrapper: {
    backgroundColor: '#f7f7f7',
    borderColor: '#acb7b1',
    borderWidth: 1,
    borderRadius: 10,
    width: scale(200),
    height: verticalScale(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAuth: {
    fontWeight: 'bold',
    fontSize: moderateScale(16,2),
    color: 'red',
    paddingLeft: scale(20),
  },
});

export default Loader;