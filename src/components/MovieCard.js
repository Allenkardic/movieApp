import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableHighlight,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

// COMPONENTS

import {
  FONTSIZE,
  SPACING,
  SIZES,
  IMAGES,
  COLORS,
  BORDERRADIUS,
} from '../constants/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {screenWidth, screenHeight} = SIZES;

function MovieCard({
  onPress,
  imgSrc,
  imgContainerWidth,
  imgContainerHeight,
  children,
  backgroundColor,
  imgMode,
}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={{paddingBottom: SPACING.xsmall}}>
      <View
        style={{
          ...styles.container,
          backgroundColor: backgroundColor ? backgroundColor : COLORS.black,
        }}>
        <View
          style={{
            width: imgContainerWidth ? imgContainerWidth : '100%',
            height: imgContainerHeight ? imgContainerHeight : hp('20%'),
          }}>
          <Image
            style={{
              ...styles.imgStyle,
              resizeMode: imgMode ? imgMode : 'contain',
            }}
            source={{uri: imgSrc}}
          />
        </View>
        <View>{children}</View>
      </View>
    </TouchableHighlight>
  );
}

MovieCard.propTypes = {
  onPress: PropTypes.func,
  imgSrc: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};
const styles = StyleSheet.create({
  container: {
    borderRadius: BORDERRADIUS.small,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.midGrey,
  },
  imgStyle: {
    // resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
});

export default React.memo(MovieCard);
