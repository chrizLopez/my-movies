import axios from 'axios';
import {store} from '../store';

const configuredAxios: any = {...axios};
configuredAxios.defaults.headers = {
  common: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

configuredAxios.interceptors.request.use(
  async (value: any) => value,
  (error: any) => Promise.reject(error),
);

function interceptSuccess(response: any) {
  return response;
}

function interceptError(err: any) {
  if (configuredAxios.isCancel(err)) {
    console.log('Request canceled');
  }

  const {response} = err;
  if (!response) {
    console.log('response', response);
  } else if (response.status === 401) {
    store.dispatch({type: 'STRUMN_USER_LOGOUT'});
  }
  return Promise.reject(err);
}

// interceptors
configuredAxios.interceptors.response.use(interceptSuccess, interceptError);

export default configuredAxios;
