/*!
 * Mux Video
 * Copyright(c) 2018 Mux Inc.
 */

import { Base } from '../base';
import { RequestOptions } from '../RequestOptions';

import { Assets } from './resources/assets';
import { LiveStreams } from './resources/liveStreams';
import { PlaybackIds } from './resources/playbackIds';
import { Uploads } from './resources/uploads';
import { SigningKeys } from './resources/signingKeys';
import { DeliveryUsage } from './resources/deliveryUsage';

/**
 * @ignore
 * @extends Base
 * Video Class - Provides access to the Mux Video API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video } = muxClient;
 *
 * // Create an asset
 * Video.Assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 *
 * // Create an asset playback ID
 * Video.Assets.createPlaybackId(assetId, { policy: 'public' });
 */
export class Video extends Base {
  readonly Assets: Assets;
  readonly LiveStreams: LiveStreams;
  readonly PlaybackIds: PlaybackIds;
  readonly Uploads: Uploads;
  readonly SigningKeys: SigningKeys;
  readonly DeliveryUsage: DeliveryUsage;

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

    /** @type {Assets} */
    this.Assets = new Assets(this);

    /** @type {LiveStreams} */
    this.LiveStreams = new LiveStreams(this);

    /** @type {PlaybackIds} */
    this.PlaybackIds = new PlaybackIds(this);

    /** @Type {Uploads} */
    this.Uploads = new Uploads(this);

    /** @Type {SigningKeys} */
    this.SigningKeys = new SigningKeys(this);

    /** @Type {DeliveryUsage} */
    this.DeliveryUsage = new DeliveryUsage(this);
  }
}
