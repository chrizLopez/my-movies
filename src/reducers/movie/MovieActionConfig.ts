import {createAction} from 'redux-actions';

// Action Declarations
export const getMoviesAction = createAction('APP_GET_MOVIES');
export const searchMoviesAction = createAction('APP_SEARCH_MOVIES');
export const addToFavoriteAction = createAction('APP_ADD_TO_FAVORITE');