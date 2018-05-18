import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import { addNewWork, toggleIsAdding } from '../redux/actionCreator';

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      deadline: '',
    }
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    const { name, deadline } = this.state;
    this.props.addNewWork(name, deadline);
    this.props.toggleIsAdding();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
          placeholder='Name'
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.deadline}
          onChangeText={text => this.setState({ deadline: text })}
          placeholder='Deadline'
        />
        <TouchableOpacity onPress={this.onAdd}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { myIsAdding: state.isAdding };
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    height: 40,
    width: '90%',
    color: 'yellow',
    backgroundColor: 'grey',
    marginHorizontal: 10,
    margin: 10,
  }
});

export default connect(null, {
  addNewWork,
  toggleIsAdding
})(AddNew);