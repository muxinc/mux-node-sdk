/*!
 * Mux Exports
 * Copyright(c) 2018 Mux Inc.
 */
const Base = require('../../base');

/**
 * @private Base exports path for the Mux API
 * */
const PATH = '/data/v1/exports';

/**
 * Exports Class - Provides access to the Mux Data Exports API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Lists the available video view exports along with URLs to retrieve them
 * Data.Exports.list();
 */
class Exports extends Base {
  /**
   * Lists the available video view exports along with URLs to retrieve them
   * @extends Base
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Lists the available video view exports along with URLs to retrieve them
   * Data.Exports.list();
   *
   * @see https://api-docs.mux.com/#export-get
   */
  list() {
    return this.http.get(PATH);
  }
}

module.exports = Exports;
