import React from 'react';
import {View, StyleSheet, Platform, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// REDUX
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesRequest} from '../../store/actions/get_movies';

// COMPONENTS
import CustomText from '../../components/CustomText';
import {SPACING, COLORS} from '../../constants/theme';

import MovieCard from '../../components/MovieCard';
import FullScreenLoader from '../../components/FullScreenLoader';
function Movies(props) {
  const dispatch = useDispatch();
  //REDUX STATES
  const getMoviesState = useSelector(s => s.getMovies);

  // STATES
  const [selectedId, setSelectedId] = React.useState(null);

  const {
    result: {results},
    isLoading,
  } = getMoviesState;

  // API REQUEST
  React.useEffect(() => {
    dispatch(getMoviesRequest());
  }, []);

  // BASE IMAGE URL
  const imgSrc = 'https://image.tmdb.org/t/p/original/';

  function Item({item}) {
    const {id} = item;
    return (
      <MovieCard
        imgSrc={`${imgSrc}${item.poster_path}`}
        onPress={() => props.navigation.navigate('MovieDetails', {id})}
        imgMode={'cover'}>
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
              xsmall
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
    );
  }

  if (isLoading) {
    return <FullScreenLoader title={'Movies'} />;
  } else {
    return (
      <View style={{...styles.container}}>
        <FlatList
          data={results}
          renderItem={Item}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS == 'ios' ? 50 : 10,
    paddingBottom: SPACING.xxsmall,
  },

  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.xxsmall,
  },
});

export default Movies;
