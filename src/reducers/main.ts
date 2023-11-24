import {combineReducers} from 'redux';

import MovieReducer from './movie/MovieReducer';

const Reducers = combineReducers({
  movie: MovieReducer,
});

export default Reducers;
