/*!
 * Mux Data
 * Copyright(c) 2018 Mux Inc.
 */

import Base from '../base';
import { RequestOptions } from '../RequestOptions';
import Errors from './resources/errors';
import Exports from './resources/exports';
import Filters from './resources/filters';
import Incidents from './resources/incidents';
import Metrics from './resources/metrics';
import RealTime from './resources/real_time';
import VideoViews from './resources/video_views';

/**
 * @ignore
 * @extends Base
 * Data Class - Provides access to the Mux Data API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 */
export default class Data extends Base {
  readonly Errors: Errors;
  readonly Exports: Exports;
  readonly Filters: Filters;
  readonly Incidents: Incidents;
  readonly Metrics: Metrics;
  readonly RealTime: RealTime;
  readonly VideoViews: VideoViews;

  /**
   * Data Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API secret
   * @constructor
   */
  constructor(base: Base)
  constructor(config: RequestOptions)
  constructor(accessToken: string, secret: string, config: RequestOptions)
  constructor(accessTokenOrConfigOrBase: string | RequestOptions | Base, secret?: string, config?: RequestOptions) {
    if (accessTokenOrConfigOrBase instanceof Base) {
      super(accessTokenOrConfigOrBase);
    } else if (typeof accessTokenOrConfigOrBase === 'object') {
      super(accessTokenOrConfigOrBase);
    } else {
      super(accessTokenOrConfigOrBase, secret, config);
    }


    /** @type {Errors} */
    this.Errors = new Errors(this);

    /** @type {Exports} */
    this.Exports = new Exports(this);

    /** @type {Filters} */
    this.Filters = new Filters(this);

    /** @type {Incidents} */
    this.Incidents = new Incidents(this);

    /** @type {Metrics} */
    this.Metrics = new Metrics(this);

    /** @type {RealTime} */
    this.RealTime = new RealTime(this);

    /** @type {VideoViews} */
    this.VideoViews = new VideoViews(this);
  }
}
