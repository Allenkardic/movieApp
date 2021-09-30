import {
  GET_MOVIE_BYID_START,
  GET_MOVIE_BYID_SUCCESS,
  GET_MOVIE_BYID_FAIL,
  GET_MOVIE_BYID_CLEANUP,
} from '../../actionTypes';
import {getMovieById} from '../../initialState';

const getMovieByIdReducer = (state = getMovieById, action) => {
  switch (action.type) {
    case GET_MOVIE_BYID_START:
      return {...state, isLoading: true, error: '', isSuccessful: false};
    case GET_MOVIE_BYID_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLoading: false,
        isSuccessful: true,
      };
    case GET_MOVIE_BYID_FAIL:
      return {...state, error: action.payload, isLoading: false};
    case GET_MOVIE_BYID_CLEANUP:
      return {...state, error: '', isLoading: false, isSuccessful: false};
    default:
      return state;
  }
};

export default getMovieByIdReducer;
