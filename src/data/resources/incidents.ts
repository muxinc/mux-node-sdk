/*!
 * Mux Incidents
 * Copyright(c) 2019 Mux Inc.
 */
import { Base } from '../../base';
import { RequestOptions } from '../../RequestOptions';

/**
 * @private Base incidents path for the Mux API
 * */
const PATH = '/data/v1/incidents';

/**
 * Incidents Class - Provides access to the Mux Data Incidents API
 * @extends Base
 * @example
 * const { Data } = new Mux(accessToken, secret);
 *
 * // Returns a list of all open incidents
 * Data.Incidents.list({ status: 'open' });
 */
export class Incidents extends Base {
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
   * Returns a list of all open incidents
   *
   * @param {Object} [params] - example { status: 'open', severity: 'warning' }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Data } = new Mux(accessToken, secret);
   *
   * // Returns a list of all open incidents
   * Data.Incidents.list({ status: 'open' });
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-incidents
   */
  list(params) {
    return this.http.get(PATH, { params });
  }

  /**
   * Returns the details for a single incident
   *
   * @param {string} incidentId - The ID for the incident
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * //Returns the details for a single incident
   * Data.Incidents.get('ABCD1234');
   *
   * @see https://docs.mux.com/api-reference/data#operation/get-incident
   */
  get(incidentId) {
    if (!incidentId) {
      throw new Error('An incident Id is required for incident details.');
    }
    return this.http.get(`${PATH}/${incidentId}`);
  }

  /**
   * Returns all the incidents that seem related to a specific incident
   *
   * @param {string} incidentId - The ID for the incident
   * @param {Object} [params] - example { measurement: 'median' }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * //Returns all the incidents that seem related to a specific incident
   * Data.Incidents.related('ABCD1234');
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-related-incidents
   */
  related(incidentId, params) {
    if (!incidentId) {
      throw new Error('An incident Id is required for related incidents.');
    }
    return this.http.get(`${PATH}/${incidentId}/related`, { params });
  }
}
