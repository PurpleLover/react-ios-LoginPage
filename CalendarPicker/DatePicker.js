import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
  Text,
} from 'react-native'

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Choose your deadline</Text>
        </View>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
          mode='date'
          minimumDate={new Date()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})