/*!
 * Mux Data
 * Copyright(c) 2018 Mux Inc.
 */

import Base from '../base';
import Errors from '../../src/data/resources/errors';
import Exports from '../../src/data/resources/exports';
import Filters from '../../src/data/resources/filters';
import Incidents from '../../src/data/resources/incidents';
import Metrics from '../../src/data/resources/metrics';
import RealTime from '../../src/data/resources/real_time';
import VideoViews from '../../src/data/resources/video_views';

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

  /** @type {Errors} */
  Errors = new Errors(this);

  /** @type {Exports} */
  Exports = new Exports(this);

  /** @type {Filters} */
  Filters = new Filters(this);

  /** @type {Incidents} */
  Incidents = new Incidents(this);

  /** @type {Metrics} */
  Metrics = new Metrics(this);

  /** @type {RealTime} */
  RealTime = new RealTime(this);

  /** @type {VideoViews} */
  VideoViews = new VideoViews(this);

/**
 * Data Constructor
 *
 * @param {string} accessToken - Mux API Access Token
 * @param {string} secret - Mux API secret
 * @constructor
 */
  constructor(accessToken?: string, secret?: string);
  constructor(accessToken?: Object, secret?: string);
  constructor(...params: any[]) {
    super(...params);
  }
}