import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIES_CLEANUP,
} from '../../actionTypes';
import {getMovies} from '../../initialState';

const getMoviesReducer = (state = getMovies, action) => {
  switch (action.type) {
    case GET_MOVIES_START:
      return {...state, isLoading: true, error: '', isSuccessful: false};
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLoading: false,
        isSuccessful: true,
      };
    case GET_MOVIES_FAIL:
      return {...state, error: action.payload, isLoading: false};
    case GET_MOVIES_CLEANUP:
      return {...state, error: '', isLoading: false, isSuccessful: false};
    default:
      return state;
  }
};

export default getMoviesReducer;
