/*!
 * Mux
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from './base';
import { Video } from './video/video';
import { Data } from './data/data';
import { Webhooks } from './webhooks/webhooks';
import { JWT } from './utils/jwt';
import { RequestOptions } from './RequestOptions';
/**
 * Mux Class - Provides access to the Mux Video and Mux Data API
 *
 * @extends Base
 * @type {Video}
 * @property {Video} Mux.Video provides access to the Mux Video API
 * @type {Data}
 * @property {Data} Mux.Data provides access to the Mux Data API
 * @type {Webhooks}
 * @property {Webhooks} Mux.Webhooks provides access to verifying Webhooks signatures
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video, Data, Webhooks } = muxClient;
 *
 * // Create an asset
 * // returns a Promise
 * Video.Assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'})
 *   .then((data) => {
 *     assetId = data.id;
 *   });
 *
 * // Create a playback Id for an asset
 * // returns a Promise
 * Video.Assets.createPlaybackId(assetId, { policy: 'public' });
 *
 * // List all of the values across every breakdown for the `aggregate_startup_time` metric
 * // returns a Promise
 * Data.Metrics.breakdown('aggregate_startup_time', { group_by: 'browser' });

 * // Verify a webhook signature
 * Webhooks.verifyHeader(body, signature, secret);
 */
export declare class Mux extends Base {
    static readonly JWT: typeof JWT;
    static readonly Webhooks: typeof Webhooks;
    readonly Video: Video;
    readonly Data: Data;
    /**
     * Mux Constructor
     *
     * @param {string=process.env.MUX_TOKEN_ID} accessToken - Mux API Access Token
     * @param {string=process.env.MUX_TOKEN_SECRET} secret - Mux API secret
     * @param {object} options - Optional configuration object
     * @param {string='https://api.mux.com'} options.baseUrl - Change the base URL for API requests.
     * @constructor
     */
    constructor();
    constructor(config: RequestOptions);
    constructor(accessToken: string, secret: string, config: RequestOptions);
}
