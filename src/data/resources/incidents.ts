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

export interface Incident {
  id: string;
  threshold?: number;
  status: string;
  started_at: string;
  severity?: string;
  sample_size_unit?: string;
  sample_size?: number;
  resolved_at?: string;
  notifications?: Array<any>;
  notification_rules?: Array<any>;
  measurement?: string;
  measured_value_on_close?: number;
  measured_value?: number;
  incident_key?: string;
  impact?: string;
  error_description?: string;
  description?: string;
  breakdowns?: Array<any>;
  affected_views_per_hour_on_open?: number;
  affected_views_per_hour?: number;
  affected_views?: number;
}

export interface IncidentsQueryParams {
  limit?: number;
  page?: number;
  order_by?: string;
  order_direction?: string;
  status?: string;
}

export interface IncidentsRelatedQueryParams {
  limit?: number;
  page?: number;
  order_by?: string;
  order_direction?: string;
}


export declare interface IncidentsListResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<Incident>;
}

export declare interface IncidentsGetResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Incident;
}

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
  list(params?: IncidentsQueryParams): Promise<IncidentsListResponse> {
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
  get(incidentId: string): Promise<IncidentsGetResponse> {
    if (!incidentId) {
      throw new Error('An incident id is required for incident details.');
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
  related(incidentId: string, params?: IncidentsRelatedQueryParams) {
    if (!incidentId) {
      throw new Error('An incident id is required for related incidents.');
    }
    return this.http.get(`${PATH}/${incidentId}/related`, { params });
  }
}
