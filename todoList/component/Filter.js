import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

import { SHOW_ALL, COMPLETED, ON_GOING } from '../styles/constant';

import {showAll, showCompleted, showOnGoing} from '../redux/actionCreator';

class Filter extends Component {
  getTextStyle(statusName) {
    const { myFilterStatus } = this.props;
    return (statusName === myFilterStatus) ? styles.buttonTextChosen : styles.buttonText;
  }

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress={()=>this.props.showAll()}>
          <Text style={this.getTextStyle(SHOW_ALL)}>SHOW ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.showCompleted()}>
          <Text style={this.getTextStyle(COMPLETED)}>COMPLETED</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.showOnGoing()}>
          <Text style={this.getTextStyle(ON_GOING)}>ON GOING</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    myFilterStatus: state.filterStatus,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  buttonTextChosen: {
    color: '#ff8533',
    fontWeight: 'bold',
  }
})

export default connect(mapStateToProps, {
  showAll,
  showCompleted,
  showOnGoing
})(Filter);