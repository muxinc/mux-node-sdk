// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@mux/mux-node/resource';
import * as jwt from '@mux/mux-node/_shims/auto/jwt';
import {
  type SignOptions,
  type MuxJWTSignOptions,
  TypeClaim,
  DataTypeClaim,
} from '@mux/mux-node/util/jwt-types';

export class Jwt extends APIResource {
  /**
   * Creates a new token to be used with a signed Playback ID
   */
  async signPlaybackId(
    playbackId: string,
    config: MuxJWTSignOptions<keyof typeof TypeClaim> = {},
  ): Promise<string> {
    const claim = TypeClaim[config.type ?? 'video'];
    if (!claim) {
      throw new Error(`Invalid signature type: ${config.type}; Expected one of ${Object.keys(TypeClaim)}`);
    }

    const tokenOptions: SignOptions = {
      keyid: jwt.getSigningKey(this._client, config),
      subject: playbackId,
      audience: claim,
      expiresIn: config.expiration ?? '7d',
      noTimestamp: true,
      algorithm: 'RS256',
    };

    return jwt.sign(config.params ?? {}, await jwt.getPrivateKey(this._client, config), tokenOptions);
  }

  /**
   * Creates a new token to be used with a signed statistics request
   */
  async signSpaceId(spaceId: string, config: MuxJWTSignOptions<never> = {}): Promise<string> {
    const tokenOptions: SignOptions = {
      keyid: jwt.getSigningKey(this._client, config),
      subject: spaceId,
      audience: 'rt',
      expiresIn: config.expiration ?? '7d',
      noTimestamp: true,
      algorithm: 'RS256',
    };

    return jwt.sign(config.params ?? {}, await jwt.getPrivateKey(this._client, config), tokenOptions);
  }

  /**
   * Creates a new token to be used with a signed playback ID
   */
  async signViewerCounts(
    id: string,
    config: MuxJWTSignOptions<keyof typeof DataTypeClaim> = {},
  ): Promise<string> {
    const claim = DataTypeClaim[config.type ?? 'video'];
    if (!claim) {
      throw new Error(
        `Invalid signature type: ${config.type}; Expected one of ${Object.keys(DataTypeClaim)}`,
      );
    }

    const tokenOptions: SignOptions = {
      keyid: jwt.getSigningKey(this._client, config),
      subject: id,
      audience: claim,
      expiresIn: config.expiration ?? '7d',
      noTimestamp: true,
      algorithm: 'RS256',
    };

    return jwt.sign(config.params ?? {}, await jwt.getPrivateKey(this._client, config), tokenOptions);
  }
}
