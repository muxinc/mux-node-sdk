// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@mux/mux-node/resource';
import * as jwt from '@mux/mux-node/_shims/auto/jwt';
import {
  type SignOptions,
  TypeClaim,
  TypeToken,
  type MuxJWTSignOptions,
  type MuxJWTSignOptionsMultiple,
  type Tokens,
  isMuxJWTSignOptionsMultiple,
} from '@mux/mux-node/util/jwt-types';

export class Jwt extends APIResource {
  async signPlaybackId(
    playbackId: string,
    config: MuxJWTSignOptions<keyof typeof TypeClaim>,
  ): Promise<string>;

  async signPlaybackId(
    playbackId: string,
    config: MuxJWTSignOptionsMultiple<keyof typeof TypeClaim>,
  ): Promise<Tokens>;

  /**
   * Creates a new token or tokens to be used with a signed Playback ID
   */
  async signPlaybackId(
    playbackId: string,
    config:
      | MuxJWTSignOptions<keyof typeof TypeClaim>
      | MuxJWTSignOptionsMultiple<keyof typeof TypeClaim> = {},
  ): Promise<string | Tokens> {
    if (isMuxJWTSignOptionsMultiple(config)) {
      return this.signPlaybackIdMultipleTypes(playbackId, config);
    } else {
      return this.signPlaybackIdSingleType(playbackId, config);
    }
  }

  private async signPlaybackIdSingleType(
    playbackId: string,
    config: MuxJWTSignOptions<keyof typeof TypeClaim>,
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

  private async signPlaybackIdMultipleTypes(
    playbackId: string,
    config: MuxJWTSignOptionsMultiple<keyof typeof TypeClaim>,
  ): Promise<Tokens> {
    const tokens: Tokens = {};

    for (const typeOption of config.type) {
      let type: keyof typeof TypeClaim;
      let params: Record<string, string> | undefined;

      if (Array.isArray(typeOption)) {
        [type, params] = typeOption;
      } else {
        type = typeOption;
        params = undefined;
      }

      const singleConfig = {
        ...config,
        type,
        params: {
          ...config.params,
          ...params,
        },
      };

      const token = await this.signPlaybackIdSingleType(playbackId, singleConfig);

      const tokenKey = TypeToken[type];
      if (tokenKey) {
        tokens[tokenKey] = token;
      }
    }

    return tokens;
  }

  /**
   * Creates a new token for a license for playing back DRM'd video content
   */
  async signDrmLicense(
    playbackId: string,
    config: MuxJWTSignOptions<keyof typeof TypeClaim> = {},
  ): Promise<string> {
    const claim = TypeClaim[config.type ?? 'drm_license'];
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
   * Creates a new token to be used with a space
   * @deprecated Mux Real-Time Video (spaces) has been shut down. This function will be removed in the next major version.
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
   * Creates a new token to be used with a signed statistics request
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
