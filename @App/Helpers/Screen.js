import { Dimensions, Platform, PixelRatio } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters/extend';

// import { SIZE_MATTERS_DEFAULT_SCALE_FACTOR } from 'react-native-dotenv';

// const guidelineBaseWidth = 375;
// const guidelineBaseHeight = 667;
const { width, height } = Dimensions.get('window');
const proportionValue = Dimensions.get('screen').width / Dimensions.get('screen').height;
const dimensionsHeight = height;

// const scale = size => height / guidelineBaseWidth * size;

// const moderateScale = (size) => {
//   const scaleT = size => {
//     const factor = height * 0.0015;
//     return size * factor;
//   };

//   return size + (scaleT(size) - size);
// };

// const verticalScale = size => height / guidelineBaseHeight * size;

// const isX = !!(Platform.OS === 'ios' && (height > 800 || width > 800));

export default {
  width,
  height,
  // eslint-disable-next-line no-nested-ternary
  proportion: proportionValue >= 0.75 ? '4:3' : proportionValue >= 0.6 ? '16:10' : '16:9',
  virtualBar:
    Platform.OS === 'ios' ? false : dimensionsHeight !== Dimensions.get('screen').height,
  // onePixel: 1 / PixelRatio.get(),
  // statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
  // keyboardShow: Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
  // keyboardHide: Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
  // hardwareWidth: Dimensions.get('window').width * Dimensions.get('window').scale,
  // hardwareHeight: Dimensions.get('window').height * Dimensions.get('window').scale,
  // tabHeight: moderateScale(56),
  size:
    Dimensions.get('window').width * Dimensions.get('window').scale > 1080 ? 'L' : 'S',
  // verticalScale,
  // moderateScale,
  // screenSize:
  // isX,
  // scale: (size, factor = parseInt(SIZE_MATTERS_DEFAULT_SCALE_FACTOR, 10)) => ms(size, factor),
  scale,
  verticalScale,
  moderateScale,
};
