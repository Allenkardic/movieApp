import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {FONTSIZE, COLORS, SIZES, SPACING} from '../constants/theme';

function NavigationHeader({onPress}) {
  return (
    <View style={{...styles.container}}>
      <Icon
        name={'arrow-left'}
        color={COLORS.black}
        size={FONTSIZE.xlarge}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS == 'ios' ? 74 : 65,
    paddingLeft: SPACING.xxsmall,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.white,
  },
});

export default React.memo(NavigationHeader);
