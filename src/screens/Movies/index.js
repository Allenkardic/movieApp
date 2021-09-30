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
import CustomText from '../../components/CustomText';
import {
  FONTSIZE,
  SPACING,
  SIZES,
  IMAGES,
  COLORS,
  BORDERRADIUS,
} from '../../constants/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Movies() {
  return (
    <>
      <ScrollView>
        <View>
          <CustomText>hello movies</CustomText>
          <CustomText>hello movies</CustomText>
          <CustomText>hello movies</CustomText>
          <CustomText>hello movies</CustomText>
          <CustomText>hello movies</CustomText>
        </View>
      </ScrollView>
    </>
  );
}

export default Movies;
