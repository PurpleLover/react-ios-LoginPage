import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

import Works from './Works';
import Filter from './Filter';
import Header from './Header';
import AddNew from './AddNew';

import { SHOW_ALL, COMPLETED, ON_GOING } from '../styles/constant';

class Main extends Component {
  getWorkList() {
    const { myFilter, myWorks } = this.props;
    switch (myFilter) {
      case COMPLETED:
        return myWorks.filter(e => e.completed);
      case ON_GOING:
        return myWorks.filter(e => !e.completed);
      default:
        return myWorks;
    };
  }

  render() {
    const {myIsAdding} = this.props;
    const addNewForm = myIsAdding ? <AddNew/> : null;

    return (
      <View style={styles.containerFluid}>
        <Header/>
        <View style={{ flex: 10 }}>
          {addNewForm}
          <FlatList
            data={this.getWorkList()}
            renderItem={({ item }) => <Works myWork={item} />}
            keyExtractor={item => item.id}
          />
        </View>
        <Filter />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    myFilter: state.filterStatus,
    myWorks: state.arrWorks,
    myIsAdding: state.isAdding,
  };
};

const styles = StyleSheet.create({
  containerFluid: { 
    backgroundColor: '#f2f2f2', 
    flex: 1, 
    alignSelf: 'stretch' 
  }
});

export default connect(mapStateToProps)(Main);