/*!
 * Mux Exports Views
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../../base.js';
import { ExportsViewsListResponse } from '../../domain.js';

/**
 * @private Base exports path for the Mux API
 * */
const PATH = '/data/v1/exports/views';

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
export class Views extends Base {
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
   * Data.Exports.Views.list();
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-exports
   */
  list(): Promise<ExportsViewsListResponse> {
    return this.http.get(PATH);
  }
}
