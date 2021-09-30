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

import MovieCard from '../../components/MovieCard';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useDispatch, useSelector} from 'react-redux';

import {getMoviesRequest} from '../../store/actions/get_movies';
function Movies(props) {
  const dispatch = useDispatch();
  // STATES
  const getMoviesState = useSelector(s => s.getMovies);

  // const data = getMoviesState.result.results;

  const imgSrc = 'https://image.tmdb.org/t/p/original/';

  const data = [
    {
      title: 'The end game',
      imgSrc:
        'https://image.tmdb.org/t/p/original//uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg',
      release_date: '10-02-2019',
      vote_average: '22/2',
    },
    {
      title: 'End of God of war',
      imgSrc:
        'https://image.tmdb.org/t/p/original//uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg',
      release_date: '20-10-2020',
      vote_average: '9/10',
    },
    {
      title: 'Beging of break',
      imgSrc:
        'https://image.tmdb.org/t/p/original//uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg',
      release_date: '10-02-2019',
      vote_average: '3/10',
    },
    {
      title: 'Yes i do',
      imgSrc:
        'https://image.tmdb.org/t/p/original//uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg',
      release_date: '10-02-2019',
      vote_average: '9/10',
    },
    {
      title: 'Coming home',
      imgSrc:
        'https://image.tmdb.org/t/p/original//uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg',
      release_date: '10-02-2017',
      vote_average: '2/10',
    },
  ];

  React.useEffect(() => {
    dispatch(getMoviesRequest());
  }, []);

  // if (getMoviesState.isLoading) {
  //   return (
  //     <View>
  //       <CustomText>isLoading...</CustomText>
  //     </View>
  //   );
  // } else {
  return (
    <>
      <ScrollView style={{...styles.container}}>
        <View>
          <CustomText
            bold
            center
            white
            medium
            style={{marginBottom: SPACING.xsmall}}>
            Movies
          </CustomText>

          <View
            style={{
              ...styles.helperContainer,
            }}>
            {data &&
              data.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: '49%',
                      marginBottom: SPACING.xxsmall,
                      // backgroundColor: COLORS.black,
                    }}>
                    <MovieCard
                      // imgSrc={`${imgSrc}${item.poster_path}`}
                      imgSrc={`${item.imgSrc}`}
                      onPress={() => props.navigation.navigate('MovieDetails')}>
                      <View style={{paddingHorizontal: SPACING.xxxsmall}}>
                        <View
                          style={{
                            ...styles.content,
                          }}>
                          <CustomText
                            style={{
                              width: wp('30%'),
                              lineHeight: Platform.OS == 'android' ? 15 : 0,
                            }}
                            xxsmall
                            bold
                            white>
                            {item.title}
                          </CustomText>
                          <CustomText xxsmall bold white>
                            {item.release_date}
                          </CustomText>
                        </View>

                        <View
                          style={{
                            marginTop: SPACING.xsmall,
                            alignSelf: 'flex-end',
                          }}>
                          <CustomText xxsmall style={{color: COLORS.white}}>
                            {item.vote_average} /10
                          </CustomText>
                        </View>
                      </View>
                    </MovieCard>
                  </View>
                );
              })}
          </View>
        </View>
      </ScrollView>
    </>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS == 'ios' ? SPACING.small : SPACING.xxsmall,
    paddingBottom: SPACING.xxsmall,
  },

  cardConatiner: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
  },

  helperContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.xxsmall,
  },
});

export default Movies;
