import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

export default class App3 extends Component {
  constructor(props) {
    super(props);
    this.getDownload = this.getDownload.bind(this);
  }
  getDownload() {
    // async function requestToDownload() {
    //   try { 
    //     const granted =await PermissionsAndroid.request()(
    //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
    //         'title': 'Download Permission',
    //         'message': 'Me need this',
    //       }
    //     )
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //       alert('You can use');
    //     }
    //     else {
    //       alert('Failed');
    //     }
    //   } catch(err) {
    //     alert(err);
    //   }
    // }
    // RNFetchBlob.fetch('GET', 'https://i-vnexpress.vnecdn.net/2018/05/22/Thieu-tuong-Nguyen-Hong-Quan-1-8098-1527006322_500x300.jpg', {
    //   Authorization: 'Bearer access-token...',
    //   // more headers  ..
    // })
    //   // when response status code is 200
    //   .then((res) => {
    //     // the conversion is done in native code
    //     let base64Str = res.base64()
    //     // the following conversions are done in js, it's SYNC
    //     let text = res.text()
    //     let json = res.json()

    //   })
    //   // Status code is not 200
    //   .catch((errorMessage, statusCode) => {
    //     // error handling
    //   })
    //    const link = 'https://i-vnexpress.vnecdn.net/2018/05/23/tuongnguyenhongquan-8725-1527049171_500x300.jpg';
    let link = 'http://192.168.1.21:8355/Uploads/Tập%20đoàn%20Vàng%20bạc%20đá%20quý%20DOJI/KHỐI%20NHÂN%20SỰ%20TẬP%20ĐOÀN/Phòng%20Nhân%20sự%20Tập%20đoàn/lanct/eFile/Văn%20bản%20trình%20ký/53/Capture.PNG';
    //link='https://i-vnexpress.vnecdn.net/2018/06/04/de-Sinh-1-1528086368_600x0.jpg';
    link ='http://pechanoi.com/wp-content/uploads/2017/08/newday-830x400.jpg';
    // if (Platform.OS === 'ios') {
    //   link = encodeURI(link);
    // }
    
    RNFetchBlob
      .config({
        fileCache: true,
        addAndroidDownloads: {
          //useDownloadManager : true, // <-- this is the only thing required
          // Optional, override notification setting (default to true)
          notification: false,
          // Optional, but recommended since android DownloadManager will fail when
          // the url does not contains a file extension, by default the mime type will be text/plain
          mime: 'text/plain',
          description: 'File downloaded by download manager.'
        }
      })
      .fetch('GET', link)
      .then((resp) => {
        // the path of downloaded file
        alert('co vao?');
        resp.path();
        alert(resp.path());
      })
  }
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity
          onPress={this.getDownload}
        >
          <Text>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity><Text>Upload</Text></TouchableOpacity>
      </View>
    );
  }
}