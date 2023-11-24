import {getRequest} from './Request';

export const generateGetAction = (action: string, url: string, params: any, options: any) => (dispatch: any) => {
  const request = getRequest(url, params);
  request.$promise.then((response: any) => dispatch({type: action, payload: response.data, params}));
  return request;
};

export const generateAction = (action: string, payload: any) => (dispatch: any) => dispatch({type: action, payload});