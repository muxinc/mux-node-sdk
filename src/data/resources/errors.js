/*!
 * Mux Errors
 * Copyright(c) 2018 Mux Inc.
 */

const api = require('../../utils/api');

/**
 * @private Base errors path for the Mux API
 * */
const PATH = '/data/v1/errors';

/**
 * Errors Class - Provides access to the Mux Data Errors API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Returns a list of playback errors
 * Data.errors.list({filters: ['operating_system:windows']});
 */
class Errors {
  /**
   * @ignore
   * Errors Constructor
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
   * Returns a list of playback errors
   *
   * @param {Object} queryParams -
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Lists the available video view exports along with URLs to retrieve them
   * Data.errors.list({filters: ['operating_system:windows']});
   *
   * @see https://api-docs.mux.com/#view-error
   */
  list(queryParams) {
    return api.get(PATH, queryParams, this.requestOptions);
  }
}

module.exports = Errors;
