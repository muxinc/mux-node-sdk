/*!
 * Mux Filters
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base';
import { RequestOptions } from '../../RequestOptions';

/**
 * @private Base filters path for the Mux API
 * */
const PATH = '/data/v1/filters';

export interface FilterQueryParams {
  filter_id: string;
  limit?: number;
  page?: number;
  filters?: Array<string>;
  timeframe?: Array<string>;
}

export interface FilterValue {
  value: string;
  total_count: number;
}

export declare interface FilterGetResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<FilterValue>;
}

/**
 * Filters Class - Provides access to the Mux Data Filters API
 *
 * @extends Base
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Lists all the filters broken out into basic and advanced
 * Data.Filters.list();
 */
export class Filters extends Base {
  constructor(base: Base)
  constructor(config: RequestOptions)
  constructor(accessToken: string, secret: string, config: RequestOptions)
  constructor(accessTokenOrConfigOrBase: string | RequestOptions | Base, secret?: string, config?: RequestOptions) {
    if (accessTokenOrConfigOrBase instanceof Base) {
      super(accessTokenOrConfigOrBase);
    } else if (typeof accessTokenOrConfigOrBase === 'object') {
      super(accessTokenOrConfigOrBase);
    } else {
      super(accessTokenOrConfigOrBase, secret!, config!);
    }
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
   * Data.Filters.get('browser', { timeframe: ['7:days'] });
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-filter-values
   */
  get(filterId: string, params?: FilterQueryParams): Promise<FilterGetResponse> {
    if (!filterId) {
      throw new Error('Filter Id is required to get filter information.');
    }
    return this.http.get(`${PATH}/${filterId}`, { params });
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
   * Data.Filters.list();
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-filters
   */
  list() {
    return this.http.get(PATH);
  }
}
