import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';

import { toggleCompleted } from '../redux/actionCreator';

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  render() {
    const { id, name, deadline, completed } = this.props.myWork;
    const checkBoxCircle = completed ?
      <Icon
        type='material-community'
        name='checkbox-marked-circle'
      />
      :
      <Icon
        type='material-community'
        name='checkbox-blank-circle-outline'
      />;
    const textStyle = completed ? 'line-through' : 'none';
    const showChildren = this.state.isShow ? <View>
      <Text>Something here</Text>
    </View> : null;

    return (
      <View style={styles.container} >
        <TouchableOpacity
          style={styles.checkBox}
          onPress={() => this.props.toggleCompleted(id)}
        >
          {checkBoxCircle}
        </TouchableOpacity>
        <View>
          <Text style={{ textDecorationLine: textStyle }}>{name}</Text>
          <Text>{deadline}</Text>
        </View>
        <TouchableOpacity
          style={styles.viewMore}
          onPress={() => this.setState({isShow: !this.state.isShow})}
        >
          <Icon
            type='ionicon'
            name='ios-arrow-forward'
          />
        </TouchableOpacity>
        {showChildren}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  checkBox: {
    marginRight: '5%',
  },
  viewMore: {
    position: 'absolute',
    right: '5%',
  }
})

export default connect(null, {
  toggleCompleted
})(Works);