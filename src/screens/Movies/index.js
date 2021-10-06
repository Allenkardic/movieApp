import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  FlatList,
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
    return (
      <MovieCard
        imgSrc={`${imgSrc}${item.poster_path}`}
        onPress={() => props.navigation.navigate('MovieDetails')}
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
    );
  }

  if (isLoading) {
    return (
      <View
        styles={{
          // ...styles.loadingContainer,
          // display: 'flex',
          // flex: 1,
          // alignItems: 'center',
          // justifyContent: 'center',
          height: 400,
          borderColor: 'red',
          borderWidth: 1,
          borderStyle: 'solid',
          backgroundColor: 'green',
        }}>
        <CustomText center>isLoading...</CustomText>
      </View>
    );
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

  loadingContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default Movies;
