/*!
 * Mux Dimensions
 * Copyright(c) 2022 Mux Inc.
 */
import { Base } from '../../base.js';
import { DimensionGetResponse, DimensionQueryParams } from '../domain.js';

/**
 * @private Base dimensions path for the Mux API
 * */
const PATH = '/data/v1/dimensions';

/**
 * Dimensions Class - Provides access to the Mux Data Dimensions API
 *
 * @extends Base
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Lists all the dimensions broken out into basic and advanced
 * Data.Dimensions.list();
 */
export class Dimensions extends Base {
  /**
   * Lists the values for a dimension along with a total count of related views
   *
   * @param {string} dimensionId - The dimension name/id, see https://docs.mux.com/api-reference/data#operation/list-dimensions for a list of all dimensions
   * @param {Object} [queryParams] - example { timeframe: ['7:days'], filters: ['operating_system:windows'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Lists the values for a dimension along with a total count of related views
   * Data.Dimensions.get('browser', { timeframe: ['7:days'] });
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-dimension-values
   */
  get(
    dimensionId: string,
    params?: DimensionQueryParams
  ): Promise<DimensionGetResponse> {
    if (!dimensionId) {
      throw new Error('Dimension Id is required to get dimension information.');
    }
    return this.http.get(`${PATH}/${dimensionId}`, { params });
  }

  /**
   * Lists all the dimensions broken out into basic and advanced
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Lists the available Data dimensions
   * Data.Dimensions.list();
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-dimensions
   */
  list() {
    return this.http.get(PATH);
  }
}
