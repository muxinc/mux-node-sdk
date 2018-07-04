const axios = require('axios');

/**
 * @ignore
 * Mux API request
 *
 * @param {string} url - Specific Mux url
 * @param {Object} options - request options
 * @returns {Promise}
 */
const makeRequest = (url, options) => (
  axios.request(Object.assign({
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    url,
    baseURL: 'https://api.mux.com',
    mode: 'cors',
    withCredentials: false
  }, options)
);

/**
 * @ignore
 * HTTP GET request to the Mux API
 *
 * @param {string} url - Specific Mux url
 * @param {Object} queryParams - request query parameters
 * @param {Object} options - request options
 * @returns {Promise}
 */
const get = (url, queryParams, options) => {
  const requestOptions = { method: 'get', params: queryParams, ...options };
  return makeRequest(url, requestOptions);
};

/**
 * @ignore
 * HTTP POST request to the Mux API
 *
 * @param {string} url - Specific Mux url
 * @param {Object} body - POST body
 * @param {Object} options - request options
 * @returns {Promise}
 */
const post = (url, body, options) => {
  const requestOptions = { method: 'post', data: body, ...options };
  return makeRequest(url, requestOptions);
};

/**
 * @ignore
 *
 * @param {string} url - Specific Mux url
 * @param {Object} options - request options
 * @returns {Promise}
 */
const del = (url, options) => {
  const requestOptions = { method: 'delete', ...options };
  return makeRequest(url, requestOptions);
};

/**
 * @ignore
 * HTTP PUT request to the Mux API
 *
 * @param {string} url - Specific Mux url
 * @param {Object} body - PUT body
 * @param {Object} options - request options
 * @returns {Promise}
 */
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
