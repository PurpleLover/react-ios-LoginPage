import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';

export default class App8 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      selected: [],
      progress: 0,
    };
  }

  getSelectedImages = (images, current) => {
    var num = images.length;

    this.setState({
      num: num,
      selected: images,
    });
  }
  sendServer = () => {
    console.log(this.state.selected)
    const photos = this.state.selected;
    const data = new FormData();
    data.append('name', 'testName');
    photos.forEach((photo, index) => {
      data.append('photos', {
        uri: photo.uri,
        type: 'image/jpeg',
        name: 'image' + index
      });
    });
    const url = 192.168.1.5:26633/api/hscvcongviec/uploadfile;
    fetch(url, {
      method: 'post',
      body: data,
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.sendServer}>
          <View style={styles.content}>
            <Text style={styles.text}>
              <Text style={styles.bold}> {this.state.num}  {this.state.progress} </Text> images has been selected
            </Text>
          </View>
        </TouchableOpacity>
        <CameraRollPicker
          scrollRenderAheadDistance={500}
          initialListSize={1}
          pageSize={3}
          removeClippedSubviews={false}
          groupTypes='SavedPhotos'
          batchSize={5}
          maximum={10}
          selected={this.state.selected}
          assetType='Photos'
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D',
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
});