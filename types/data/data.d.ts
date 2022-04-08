/*!
 * Mux Data
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../base';
import { RequestOptions } from '../RequestOptions';
import { Errors } from './resources/errors';
import { Exports } from './resources/exports';
import { Filters } from './resources/filters';
import { Incidents } from './resources/incidents';
import { Metrics } from './resources/metrics';
import { RealTime } from './resources/real_time';
import { VideoViews } from './resources/video_views';
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
export declare class Data extends Base {
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
}
