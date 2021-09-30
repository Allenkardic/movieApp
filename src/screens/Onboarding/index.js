import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';

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

function Onboarding() {
  const getMoviesState = useSelector(s => s.getMovies);
  const getMovieByIdState = useSelector(s => s.getMovieById);
  const rateMovieState = useSelector(s => s.rateMovie);

  //   console.log(getMoviesState, 'all movies');
  console.log(rateMovieState, 'rate movie');
  return (
    <>
      <ScrollView>
        <View>
          <CustomText>hello Onboarding</CustomText>
          <CustomText>hello Onboarding</CustomText>
          <CustomText>hello Onboarding</CustomText>
          <CustomText>hello Onboarding</CustomText>
        </View>
      </ScrollView>
    </>
  );
}

export default Onboarding;
