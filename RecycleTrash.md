Testing template
  alert('>> '+something+' '+something);

<CheckBox style={styles.textCheckBox} title={rememberMe} checked={this.state.rememberChecked} onPress={this._checkRemember} />
behavior='position' contentContainerStyle={{ flexGrow: 2 }} keyboardVerticalOffset={150}



  componentWillMount = () => {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentWillUnmount = () => {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = (event) => {
    let newSize = Dimensions.get('window').height - event.endCoordinates.height;
    this.setState({
      visibleHeight: newSize,
      imageSize: {
        width: '100%',
        height: 450,
      }
    });
  }

  style={[
          styles.containerFluid,
        ]}
        behavior='position'
        contentContainerStyle={{
          flex: 1,
        }}
        keyboardVerticalOffset={verticalScale(-180)}


        123456


        react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
