import {Dimensions, Platform, PixelRatio, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {isRequired} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

const {width, height} = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

export const COLORS = {
  //base color
  lightprimary: '#4EBDEF',
  primary: '#082E7C',
  tertiary: '#FF7C00',
  success: '#219653',
  error: '#fe3b30',
  background: '#F2F5F7',
  profileLine: '#D7E2E4',
  transparent: '#67dbef',
  descText: '#717171',
  green: '#4ED765',
  placeholder: '#cfd8dc',
  offprimary: '#21b9d7',
  //neutral
  black: '#060606',
  white: '#ffffff',
  red: '#D20404',
  lightBlue: '#f2f7ff',
  darkBlue: '#0361f0',

  //color variations
  darkGray: '#222435',
  midGrey: '#515151',
  estateGray: '#E8E8E8',
  darkPurple: '#241332',
  lightPurple: '#5E05A2',
  greyText: '#312F2F',
  greyTextTwo: '#374750',
  greyTextThree: '#8D8B8B',

  greenOne: '#417623',
  greenTwo: '#253E12',
  greenThree: '#B4C55B',
  greenFour: '#A3C68F',
  greenSuccess: '#2ea25c',
  greenSuccessHelper: '#6dbf8f',

  lightGrey: '#E8E3E5',
  darkerGrey: '#414141',
  lighterGrey: '#ABAFB3',
  loginGrey: '#F1F0F2',
  // inputGrey: '#eaf0f1',
  placeholderGrey: '#0A0A0A80',
  inputGrey: '#DDDDDD',
  communityGrey: '#F4F6F7',
  SettingTabGrey: '#F8F8F8',
  inputBackground: '#F5F7F7',

  formBackground: '#f9f9f9',
  formBorder: '#C4CECF',
  snow: '#F7F7F7',
  orange: '#ffa500',
  darkWhite: '#f3f3f3',
  designGrey: 'rgba(227, 231, 235, 0.4)',
  placeholderText: '#A9A5AF',
};

export const SIZES = {
  //font sizes
  base: 8,
  xsmall: 12,
  smallish: 13,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 20,
  xxlarge: 24,
  xxxlarge: 28,

  //margin
  marginHorizontal: 10,
  marginVertical: 10,

  //padding
  padding: 24,

  //radius
  buttonRadius: 50,
  cardRadius: 5,
  radius: 8,

  //dimensions
  screenWidth,
  screenHeight,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
};

export const FONTS = {
  xsmall: {fontSize: SIZES.xsmall, letterSpacing: 0.15},
  mini: {fontSize: SIZES.xsmall, letterSpacing: 0},
  smallish: {fontSize: SIZES.smallish, letterSpacing: 0},
  small: {fontSize: SIZES.smallish, letterSpacing: 0},
  medium: {fontSize: SIZES.medium, letterSpacing: 0},
  large: {fontSize: SIZES.large, letterSpacing: 0},
  xlarge: {fontSize: SIZES.xlarge, letterSpacing: 0},
  xxlarge: {fontSize: SIZES.xxlarge, letterSpacing: 0},
  xxxlarge: {fontSize: SIZES.xxxlarge, letterSpacing: 0},
};

const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

const scaledSize = size => Math.ceil(size * scale);

// guideline height for standard 5" device screen is 680
function RFValue(fontSize, standardScreenHeight = 680) {
  const {height, width} = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    Platform.OS === 'android' ? standardLength - offset : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export const FONTSIZE = {
  xxxsmall: RFValue(6),
  xxsmall: RFValue(8),
  // xxsmall: hp('5%'),
  xsmall: RFValue(12),
  // xsmall: hp('10%'),
  // smallish: RFValue(SIZES.smallish),
  small: RFValue(SIZES.small),
  medium: RFValue(SIZES.medium),
  large: RFValue(SIZES.large),
  xlarge: RFValue(SIZES.xlarge),
  xxlarge: RFValue(SIZES.xxlarge),
  xxxlarge: RFValue(SIZES.xxxlarge),
};

export const SPACING = {
  mini: scaledSize(4),
  xxxsmall: scaledSize(6),
  xxsmall: scaledSize(12),
  xsmall: scaledSize(24),
  small: scaledSize(32),
  medium: scaledSize(48),
  large: scaledSize(64),
  xlarge: scaledSize(96),
  xxlarge: scaledSize(128),
  xxxlarge: scaledSize(170),
};

export const BOXWITHSMALLSHADOW = {
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
};

export const BOXWITHSHADOW = {
  borderWidth: 0.3,
  boprderStyle: 'solid',
  borderColor: '#fafafa',
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 1,
};

export const BOXWITHBIGSHADOW = {
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 5},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 5,
};

export const BORDERRADIUS = {
  small: scaledSize(5),
  medium: scaledSize(10),
  large: scaledSize(15),
  xlarge: scaledSize(20),
  round: scaledSize(50),
};

export const IMAGES = {
  avatar: require('../../assets/images/avatar.png'),
  woman: require('../../assets/images/woman.png'),
  cash: require('../../assets/images/cash.png'),
  expired: require('../../assets/images/expired.png'),
  headPhone: require('../../assets/images/headPhone.png'),
  hotelCard: require('../../assets/images/hotelCard.png'),
  power: require('../../assets/images/power.png'),
  siren: require('../../assets/images/siren.png'),
  tap: require('../../assets/images/tap.png'),
  paystack: require('../../assets/images/paystack.png'),
  flutterwave: require('../../assets/images/flutterwave.png'),
  saveMoney: require('../../assets/images/saveMoney.png'),
  // dashBoardCard: require('../../assets/images/airplaneCard.jpeg'),
  // airplane: require('../../assets/images/airplaneCard.jpeg'),
  // bottomStrip: require('../../assets/images/bottomstrip.png'),
  // airtel: require('../../assets/images/airtel.png'),
  // figure: require('../../assets/images/figure.png'),
  // blue: require('../../assets/images/blueBackground.png'),
  // productLogo: require('../../assets/images/TvestNameLogo.png'),
  // productLogoTwo: require('../../assets/images/TvestLogo.png'),
};

export default {
  COLORS,
  SIZES,
  FONTS,
  SPACING,
  BOXWITHSMALLSHADOW,
  BOXWITHSHADOW,
  BOXWITHBIGSHADOW,
  IMAGES,
  BORDERRADIUS,
  FONTSIZE,
};
