import {showMessage} from 'react-native-flash-message';
import {COLORS} from '../../../constants/theme';

import axios from 'axios';

import {
  GET_MOVIE_BYID_START,
  GET_MOVIE_BYID_SUCCESS,
  GET_MOVIE_BYID_CLEANUP,
  GET_MOVIE_BYID_FAIL,
} from '../../actionTypes';

const getMovieDetailStart = () => {
  return {type: GET_MOVIE_BYID_START};
};

const getMovieDetailSuccess = payload => {
  return {type: GET_MOVIE_BYID_SUCCESS, payload};
};

const getMovieDetailFail = payload => {
  return {type: GET_MOVIE_BYID_FAIL, payload};
};

export const getMovieDetailCleanUp = () => {
  return {type: GET_MOVIE_BYID_CLEANUP};
};

export const getMovieDetailRequest = payload => {
  return async dispatch => {
    dispatch(getMovieDetailStart());

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${payload}?api_key=7a9c16870865627516be344954933a0d`,
      )
      .then(function (response) {
        // HANDLE SUCCESS
        dispatch(getMovieDetailSuccess(response.data));
      })
      .catch(function (error) {
        // HANDLE ERRORS
        dispatch(getMovieDetailFail(error.status_message));
        showMessage({
          message: error.status_message,
          type: 'danger',
          color: COLORS.white, // text color
        });
      });
  };
};
