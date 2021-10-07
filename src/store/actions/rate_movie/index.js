import {showMessage} from 'react-native-flash-message';
import {COLORS} from '../../../constants/theme';

import axios from 'axios';

import {
  RATE_MOVIE_START,
  RATE_MOVIE_SUCCESS,
  RATE_MOVIE_FAIL,
  RATE_MOVIE_CLEANUP,
} from '../../actionTypes';

const rateMovieStart = () => {
  return {type: RATE_MOVIE_START};
};

const rateMovieSuccess = payload => {
  return {type: RATE_MOVIE_SUCCESS, payload};
};

const rateMovieFail = payload => {
  return {type: RATE_MOVIE_FAIL, payload};
};

export const rateMovieCleanUp = () => {
  return {type: RATE_MOVIE_CLEANUP};
};

export const rateMovieRequest = payload => {
  return async dispatch => {
    const {id, ratingValue} = payload;
    dispatch(rateMovieStart());

    axios
      .get(
        'https://api.themoviedb.org/3//authentication/guest_session/new?api_key=7a9c16870865627516be344954933a0d',
      )
      .then(function (response) {
        const {guest_session_id} = response.data;

        item = {
          value: ratingValue,
        };

        axios
          .post(
            `https://api.themoviedb.org/3/movie/${id}/rating?api_key=7a9c16870865627516be344954933a0d&guest_session_id=${guest_session_id}`,
            item,
          )
          .then(function (response) {
            const result = response.data;
            // HANDLE SUCCESS
            dispatch(rateMovieSuccess(result));
            showMessage({
              message: 'Rating submitted successfuly',
              type: 'success',
              color: COLORS.white, // text color
            });
          })
          .catch(function (error) {
            showMessage({
              message: error.status_message,
              type: 'danger',
              color: COLORS.white, // text color
            });
          });
      })
      .catch(function (error) {
        // HANDLE ERRORS
        dispatch(rateMovieFail(error.status_message));
        showMessage({
          message: error.status_message,
          type: 'danger',
          color: COLORS.white, // text color
        });
      });
  };
};
