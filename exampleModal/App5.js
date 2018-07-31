import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../loginPage-scaling/Scaling';
export default class App5 extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          transparent={true}
          animationType={'slide'}
          visible={this.state.modalVisible}
          onRequestClose={() => { }}>
          <View style={styles.modalBackground}>
            <View style={styles.aiWrapper}>
              <View style={{ alignContent: 'center'}} >
                <Text style={{ textAlign: 'center' }} >Something</Text>
              </View>
              <View style={styles.separator} />
              <View style={{ alignContent: 'center'}} >
                <Text style={{ textAlign: 'center' }} >Something</Text>
              </View>
              <View style={styles.separator} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity>
              <Text style={{ flex: 1, textAlign: 'center' }}>oke</Text>
              </TouchableOpacity>
                
              <TouchableOpacity>
              <Text style={{ flex: 1, textAlign: 'center' }}>oke</Text>
              </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    opacity: 0.7
  }, aiWrapper: {
    backgroundColor: '#f7f7f7',
    borderColor: '#acb7b1',
    borderWidth: 1,
    borderRadius: 10,
    width: scale(200),
    height: verticalScale(300),
    flexDirection: 'column',
    //  alignItems: 'center',
    justifyContent: 'space-around',
  }, textAuth: {
    fontWeight: 'bold',
    fontSize: moderateScale(16, 2),
    color: 'red',
    paddingLeft: scale(20),
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});