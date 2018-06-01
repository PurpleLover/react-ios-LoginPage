import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from '../loginPage-scaling/Scaling';

const ScanScreenStyle = StyleSheet.create({
  cameraFocus: {
    opacity: 0.8
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }, rectangle: {
    height: moderateScale(200),
    width: moderateScale(200),
    backgroundColor: 'transparent',
  }, smallRectangle: {
    height: verticalScale(50),
    width: scale(70),
    borderColor: '#fff',
  }, smallRectangle_TopLeft: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
  }, smallRectangle_TopRight: { 
    position: 'absolute', 
    right: 0,
    borderTopWidth: 2,
    borderRightWidth: 2,
  }, smallRectangle_BottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  }, smallRectangle_BottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  }

})