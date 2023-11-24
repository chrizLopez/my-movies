// import Config from 'react-native-config';

import {
  generateGetAction,
  generateAction,
} from '../ActionDispatcher';

import {
  addToFavoriteAction,
  getMoviesAction,
  searchMoviesAction,
} from './MovieActionConfig';

const searchMoviesRequest = (searchKey: string) => generateGetAction(
  searchMoviesAction,
  `https://itunes.apple.com/search?term=${searchKey}`,
  null,
  null,
);

const getMoviesRequest = () => generateGetAction(
  getMoviesAction,
  `https://itunes.apple.com/search?term=star&amp;country=au&amp;media=movie&amp;all`,
  null,
  null,
);

const addToFavoriteRequest = (movie: any) => generateAction(
  addToFavoriteAction,
  movie
)
// register actions here
export {
  getMoviesRequest,
  addToFavoriteRequest,
  searchMoviesRequest,
};
