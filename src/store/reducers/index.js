import {combineReducers} from 'redux';
import getMovies from './get_movies';
import getMovieById from './get_movie_id';
import rateMovie from './rate_movie';

const appReducer = combineReducers({
  getMovies,
  getMovieById,
  rateMovie,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = {};
    //   SecureStore.deleteItemAsync("sessionId");
    //   SecureStore.deleteItemAsync("token");
  }

  return appReducer(state, action);
};

export default rootReducer;
