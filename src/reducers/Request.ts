import axios from './AxiosConfig';
// const baseUrl = Config.API_URL;

export const getRequest = (route: string, options = {}) => {
  const promise = axios
    .get(route, {
      ...options,
    })
    .catch((error: any) => console.log(error));

  return {
    $promise: promise,
  };
};
