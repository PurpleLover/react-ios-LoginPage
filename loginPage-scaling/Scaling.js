import {
  Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get('window');
//alert(width);

const baseWidth = 350;
const baseHeight = 680;

const scale = size => width / baseWidth * size;
const verticalScale = size => height / baseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

//alert (moderateScale(14, 2));

export { scale, verticalScale, moderateScale };