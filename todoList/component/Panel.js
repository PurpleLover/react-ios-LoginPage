import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  Animated
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: true,
      animation: new Animated.Value(),
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    let initialValue = this.state.isExpanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue = this.state.isExpanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight
    
        this.setState({
      isExpanded: !this.state.isExpanded,
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(
      this.state.animation,
      {toValue: finalValue}
    ).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
    })
  }
  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    })
  }

  render() {
    const { isExpanded } = this.state;
    const { title } = this.props;
    const icon = isExpanded ? 
      <Icon type='feather' name='arrow-up' /> 
      : 
      <Icon type='feather' name='arrow-down' />;

    return (
      <Animated.View style={[styles.container, {height: this.state.animation}]}>
        <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
          <Text style={styles.title}>{title}</Text>
          <TouchableHighlight
            onPress={this.toggle}
            underlayColor='grey'
          >
            {icon}
          </TouchableHighlight>
        </View>
        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    color: 'red',
  },
  body: {
    padding: 10,
    paddingTop: 0,
  }
});