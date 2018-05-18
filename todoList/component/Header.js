import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import { toggleIsAdding } from '../redux/actionCreator';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>Menu</Text>
        </TouchableOpacity>
        <Text>To Do List</Text>
        <TouchableOpacity onPress={() => this.props.toggleIsAdding()}>
          <Text>Add New</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingTop: 10,
    paddingHorizontal: 20
  }
});

export default connect(null, { toggleIsAdding })(Header);