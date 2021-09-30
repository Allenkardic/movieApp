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

import MovieCard from '../../components/MovieCard';

function MovieDetails() {
  const imgSrc =
    'https://image.tmdb.org/t/p/original//uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg';

  const rating = 8.0;
  const data = [
    {
      img: imgSrc,
      title: 'The return of the Gods',
      rating: 2,
      year: 2020,
    },
  ];
  return (
    <>
      <ScrollView style={{...styles.container}}>
        <View>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: '100%',
                  marginBottom: SPACING.xxsmall,
                  backgroundColor: COLORS.darkGray,
                }}>
                <MovieCard
                  imgSrc={imgSrc}
                  imgMode={'cover'}
                  imgContainerHeight={hp('50%')}>
                  <View style={{paddingHorizontal: SPACING.xxxsmall}}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: SPACING.xxsmall,
                      }}>
                      <CustomText xxsmall bold white>
                        {item.title}
                      </CustomText>
                      <CustomText xxsmall bold white>
                        {item.year}
                      </CustomText>
                    </View>

                    <View
                      style={{
                        marginTop: SPACING.xsmall,
                        alignSelf: 'flex-end',
                      }}>
                      <CustomText xxsmall style={{color: COLORS.white}}>
                        {item.rating} /10
                      </CustomText>
                    </View>
                  </View>
                </MovieCard>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    paddingTop: SPACING.large,
  },

  cardConatiner: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
  },
});

export default MovieDetails;
