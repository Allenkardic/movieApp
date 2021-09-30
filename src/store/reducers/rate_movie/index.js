import {
  RATE_MOVIE_START,
  RATE_MOVIE_SUCCESS,
  RATE_MOVIE_FAIL,
  RATE_MOVIE_CLEANUP,
} from '../../actionTypes';
import {rateMovie} from '../../initialState';

const rateMovieReducer = (state = rateMovie, action) => {
  switch (action.type) {
    case RATE_MOVIE_START:
      return {...state, isLoading: true, error: '', isSuccessful: false};
    case RATE_MOVIE_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLoading: false,
        isSuccessful: true,
      };
    case RATE_MOVIE_FAIL:
      return {...state, error: action.payload, isLoading: false};
    case RATE_MOVIE_CLEANUP:
      return {...state, error: '', isLoading: false, isSuccessful: false};
    default:
      return state;
  }
};

export default rateMovieReducer;
