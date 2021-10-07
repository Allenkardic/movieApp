import React from 'react';
import {View, StyleSheet, Platform, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {COLORS} from '../constants/theme';
import CustomText from './CustomText';

function FullScreenLoader({isLoading, title}) {
  return (
    <View style={{...styles.container}}>
      <ActivityIndicator size="large" color="#00ff00" />
      <CustomText white>{`Loading ${title} ...`}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
});

export default React.memo(FullScreenLoader);
