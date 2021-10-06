import {showMessage} from 'react-native-flash-message';
import {COLORS} from '../../../constants/theme';

import axios from 'axios';

import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIES_CLEANUP,
} from '../../actionTypes';

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
        // HANDLE SUCCESS
        dispatch(getMoviesSuccess(response.data));
      })
      .catch(function (error) {
        // HANDLE ERRORS
        dispatch(getMoviesFail(error.status_message));
        showMessage({
          message: error.status_message,
          type: 'danger',
          color: COLORS.white, // text color
        });
      });
  };
};
