import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

// COMPONENTS
import CustomText from '../../../components/CustomText';
// import CustomText from "../../Movies";
import {
  FONTSIZE,
  SPACING,
  SIZES,
  IMAGES,
  COLORS,
  BORDERRADIUS,
} from '../../../constants/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Login() {
  return (
    <>
      <ScrollView>
        <View>
          <CustomText>hello Login</CustomText>
          <CustomText>hello Login</CustomText>
          <CustomText>hello Login</CustomText>
          <CustomText>hello Login</CustomText>
          <CustomText>hello Login</CustomText>
        </View>
      </ScrollView>
    </>
  );
}

export default Login;
