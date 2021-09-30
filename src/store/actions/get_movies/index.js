import {showMessage} from 'react-native-flash-message';

import {COLORS} from '../../../constants/theme';

import axios from 'axios';

import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIES_CLEANUP,
} from '../../actionTypes';

import AxiosCall from '../../../utils/Axios';

const getMoviesStart = () => {
  return {type: GET_MOVIES_START};
};

const getMoviesSuccess = payload => {
  return {type: GET_MOVIES_SUCCESS, payload};
};

const getMoviesFail = payload => {
  return {type: GET_MOVIES_FAIL, payload};
};

export const getMoviesCleanUp = () => {
  return {type: GET_MOVIES_CLEANUP};
};

export const getMoviesRequest = () => {
  return async dispatch => {
    dispatch(getMoviesStart());

    axios
      .get(
        'http://api.themoviedb.org/3/discover/movie?api_key=7a9c16870865627516be344954933a0d&certification_country=US&certification.lte=G&sort_by=popularity.desc',
      )
      .then(function (response) {
        // handle success

        dispatch(getMoviesSuccess(response.data));

        // console.log(response)
      })
      .catch(function (error) {
        // handle error
        dispatch(getMoviesFail(error.status_message));
      })
      .then(function () {
        // always executed
      });
  };
};
