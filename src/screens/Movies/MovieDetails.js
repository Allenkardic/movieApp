import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/Feather';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// REDUX
import {getMovieDetailRequest} from '../../store/actions/get_movies_id';
import {rateMovieRequest} from '../../store/actions/rate_movie';

// COMPONENTS
import CustomText from '../../components/CustomText';
import {SPACING, COLORS} from '../../constants/theme';
import MovieCard from '../../components/MovieCard';
import FullScreenLoader from '../../components/FullScreenLoader';

function MovieDetails(props) {
  // GET PARAMETERS FROM PREVIOUS SCREEN
  const {id} = props.route.params;

  const dispatch = useDispatch();
  //REDUX STATES
  const getMovieByIdState = useSelector(s => s.getMovieById);

  const {result, isLoading} = getMovieByIdState;

  // BASE IMAGE URL
  const imgSrc = 'https://image.tmdb.org/t/p/original/';

  // API REQUEST
  React.useEffect(() => {
    dispatch(getMovieDetailRequest(id));
  }, []);

  const {
    original_title,
    poster_path,
    overview,
    vote_average,
    release_date,
    genres,
  } = result;

  const ratingCompleted = rating => {
    const payload = {
      id,
      ratingValue: rating * 2,
    };
    dispatch(rateMovieRequest(payload));
  };

  if (isLoading) {
    return <FullScreenLoader title="movie details" />;
  } else {
    return (
      <>
        <ScrollView style={{...styles.container}}>
          <View>
            <View
              style={{
                ...styles.cardConatiner,
              }}>
              <MovieCard
                imgSrc={`${imgSrc}${poster_path}`}
                imgMode={'cover'}
                imgContainerHeight={hp('50%')}>
                <View style={{paddingHorizontal: SPACING.xxxsmall}}>
                  <View
                    style={{
                      ...styles.helperContainer,
                    }}>
                    <CustomText medium bold white>
                      {original_title}
                    </CustomText>
                    <CustomText xxsmall bold white>
                      {release_date}
                    </CustomText>
                  </View>

                  <View>
                    <CustomText style={{...styles.overViewText}} xsmall white>
                      {overview}
                    </CustomText>
                  </View>

                  <View
                    style={{
                      ...styles.genreContainer,
                    }}>
                    {genres &&
                      genres.map((item, index) => {
                        return (
                          <View key={index}>
                            <CustomText
                              style={{
                                marginRight: SPACING.xxxsmall,
                                color: COLORS.green,
                              }}
                              xsmall>
                              {item.name},
                            </CustomText>
                          </View>
                        );
                      })}
                  </View>

                  <View
                    style={{
                      ...styles.ratingContainer,
                    }}>
                    <Rating
                      type="custom"
                      onFinishRating={ratingCompleted}
                      style={{
                        paddingVertical: 10,
                        backgroundColor: COLORS.black,
                      }}
                      showRating={false}
                      ratingBackgroundColor={COLORS.black}
                      ratingCount={5}
                      imageSize={hp('3%')}
                    />
                    <CustomText xxsmall style={{color: COLORS.white}}>
                      {vote_average} /10
                    </CustomText>
                  </View>
                </View>
              </MovieCard>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    paddingTop: SPACING.xxsmall,
  },

  cardConatiner: {
    width: '100%',
    marginBottom: SPACING.xxsmall,
  },

  overViewText: {
    marginTop: SPACING.xxsmall,
    lineHeight: Platform.OS == 'android' ? 17 : 0,
  },

  helperContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.xxsmall,
    alignItems: 'baseline',
  },

  genreContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: SPACING.xxsmall,
  },
  ratingContainer: {
    marginTop: SPACING.xsmall,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
});

export default MovieDetails;
