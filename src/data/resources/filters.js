/*!
 * Mux Filters
 * Copyright(c) 2018 Mux Inc.
 */

const api = require('../../utils/api');

/**
 * @private Base filters path for the Mux API
 * */
const PATH = '/data/v1/filters';

/**
 * Filters Class - Provides access to the Mux Data Filters API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Lists all the filters broken out into basic and advanced
 * Data.filters.list();
 */
class Filters {
  /**
   * @ignore
   * Filters Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API Access Token secret
   * @constructor
   */
  constructor(accessToken, secret) {
    if (typeof accessToken === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    /**
     *  @ignore
     *  @type {Object} requestOptions - The HTTP request options for Mux Assets
     *  @property {string} requestOptions.auth.username - HTTP basic auth username (access token)
     *  @property {string} requestOptions.auth.password - HTTP basic auth password (secret)
     * */
    this.requestOptions = {
      auth: {
        username: accessToken,
        password: secret,
      },
    };
  }

  /**
   * Lists the values for a filter along with a total count of related views
   *
   * @param {string} filterId - The filter name/id for see https://api-docs.mux.com/#filter-get-1 for a list of all filter ids
   * @param {Object} [queryParams] - example { timeframe: ['7:days'], filters: ['operating_system:windows'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Lists the values for a filter along with a total count of related views
   * Data.filters.get('browser', queryParams);
   *
   * @see https://api-docs.mux.com/#filter-get-1
   */
  get(filterId, queryParams) {
    return api.get(`${PATH}/${filterId}`, queryParams, this.requestOptions);
  }

  /**
   * Lists all the filters broken out into basic and advanced
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Lists the available video view exports along with URLs to retrieve them
   * Data.filters.list();
   *
   * @see https://api-docs.mux.com/#filter-get
   */
  list() {
    return api.get(PATH, {}, this.requestOptions);
  }
}

module.exports = Filters;
