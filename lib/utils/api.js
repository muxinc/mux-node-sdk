import axios from 'axios';

const makeRequest = (url, options) => (
  axios.request({
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    url,
    baseURL: 'https://api.mux.com',
    mode: 'cors',
    withCredentials: true,
  }, ...options)
);

const get = (url, options) => {
  const requestOptions = { method: 'get', ...options };
  return makeRequest(url, requestOptions);
};

const post = (url, body, options) => {
  const requestOptions = { method: 'post', body, ...options };
  return makeRequest(url, requestOptions);
};

const del = (url, options) => {
  const requestOptions = { method: 'delete', ...options };
  return makeRequest(url, requestOptions);
};

const put = (url, body, options) => {
  const requestOptions = { method: 'put', body, ...options };
  return makeRequest(url, requestOptions);
};

export {
  get,
  post,
  put,
  del,
};
