/*!
 * Mux Data
 * Copyright(c) 2018 Mux Inc.
 */

import { Base } from '../base.js';
import { RequestOptions } from '../RequestOptions.js';

import { Errors } from './resources/errors.js';
import { Exports } from './resources/exports.js';
import { Filters } from './resources/filters.js';
import { Incidents } from './resources/incidents.js';
import { Metrics } from './resources/metrics.js';
import { RealTime } from './resources/real_time.js';
import { VideoViews } from './resources/video_views.js';

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
export class Data extends Base {
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
