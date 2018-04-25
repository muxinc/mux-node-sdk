const axios = require('axios');

/**
 *
 * @param url
 * @param options
 */
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

/**
 *
 * @param url
 * @param options
 */
const get = (url, options) => {
  const requestOptions = { method: 'get', ...options };
  return makeRequest(url, requestOptions);
};

/**
 *
 * @param url
 * @param body
 * @param options
 */
const post = (url, body, options) => {
  const requestOptions = { method: 'post', data: body, ...options };
  return makeRequest(url, requestOptions);
};

/**
 *
 * @param url
 * @param options
 */
const del = (url, options) => {
  const requestOptions = { method: 'delete', ...options };
  return makeRequest(url, requestOptions);
};

/**
 *
 * @param url
 * @param body
 * @param options
 */
const put = (url, body, options) => {
  const requestOptions = { method: 'put', data: body, ...options };
  return makeRequest(url, requestOptions);
};

export {
  get,
  post,
  put,
  del,
};
