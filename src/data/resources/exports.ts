/*!
 * Mux Exports
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base';
import { RequestOptions } from '../../RequestOptions';
import { ExportsListResponse } from '../domain';

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
export class Exports extends Base {
  constructor(base: Base);
  constructor(config: RequestOptions);
  constructor(accessToken: string, secret: string, config: RequestOptions);
  constructor(
    accessTokenOrConfigOrBase: string | RequestOptions | Base,
    secret?: string,
    config?: RequestOptions
  ) {
    if (accessTokenOrConfigOrBase instanceof Base) {
      super(accessTokenOrConfigOrBase);
    } else if (typeof accessTokenOrConfigOrBase === 'object') {
      super(accessTokenOrConfigOrBase);
    } else {
      super(accessTokenOrConfigOrBase, secret!, config!);
    }
  }

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
   * @see https://docs.mux.com/api-reference/data#operation/list-exports
   */
  list(): Promise<ExportsListResponse> {
    return this.http.get(PATH);
  }
}
