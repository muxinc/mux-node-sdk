const axios = require('axios');

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
    withCredentials: false,
    ...options,
  })
);

const get = (url, options) => {
  const requestOptions = { method: 'get', ...options };
  return makeRequest(url, requestOptions);
};

const post = (url, body, options) => {
  const requestOptions = { method: 'post', data: body, ...options };
  return makeRequest(url, requestOptions);
};

const del = (url, options) => {
  const requestOptions = { method: 'delete', ...options };
  return makeRequest(url, requestOptions);
};

const put = (url, body, options) => {
  const requestOptions = { method: 'put', data: body, ...options };
  return makeRequest(url, requestOptions);
};

module.exports = {
  get,
  post,
  put,
  del,
};
