import { handleActions } from 'redux-actions';

import {
  addToFavoriteAction,
  getMoviesAction,
  searchMoviesAction,
} from './MovieActionConfig';

// reducers
const defaultState = {
  movieList: [],
  searchResult: [],
};

const reducer = handleActions({
  [getMoviesAction](state: any, { payload }: any) {
    const { results } = payload;
    const listData: any = [];
    results.forEach((item: any) => {
      const itemList = {...item};
      itemList.isFavorite = false;
      listData.push(itemList);
    });
    return {
      ...state,
      movieList: listData,
    };
  },
  [addToFavoriteAction](state: any, { payload }: any) {
    const {movieList} = state;
    const updatedData = movieList.map((item: any) => 
      item.trackId === payload ? { ...item, isFavorite: !item.isFavorite } : item
    );
    return {
      ...state,
      movieList: updatedData
    };
  },
  [searchMoviesAction](state: any, { payload }: any) {
    const {results} = payload;
    return {
      ...state,
      searchResult: results
    };
  },
}, defaultState);


export default reducer;
