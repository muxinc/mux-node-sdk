/*!
 * JWT - Signed URL Helpers
 * Note: Hacking this module into a class with static methods because ESDoc forces it. We'll revisit ESDoc later.
 * Documentationjs looks real nice.
 */
import fs from 'fs';
import jwt from 'jsonwebtoken';

// eslint-disable-next-line no-shadow
export enum TypeClaim {
  video = 'v',
  thumbnail = 't',
  gif = 'g',
  storyboard = 's',
  stats = 'playback_id',
}

export enum DataTypeClaim {
  video = 'video_id',
  asset = 'asset_id',
  playback = 'playback_id',
  live_stream = 'livestream_id',
}

export interface MuxJWTSignOptions {
  keyId?: string;
  keySecret?: string;
  keyFilePath?: string;
  type?: string;
  expiration?: string;
  params?: Record<string, string>;
}

const getSigningKey = (options: MuxJWTSignOptions) => {
  const keyId = options.keyId || process.env.MUX_SIGNING_KEY;
  if (!keyId) {
    throw new TypeError('Signing Key ID required');
  }

  return keyId;
};

const getPrivateKey = (options: MuxJWTSignOptions): string | Buffer => {
  let key;
  if (options.keySecret) {
    key = options.keySecret;
  } else if (options.keyFilePath) {
    key = fs.readFileSync(options.keyFilePath);
  } else if (process.env.MUX_PRIVATE_KEY) {
    key = Buffer.from(process.env.MUX_PRIVATE_KEY, 'base64');
  }

  if (Buffer.isBuffer(key)) {
    return key;
  }

  if (key) {
    const [rsaHeader] = key.toString().split('\n');
    if (rsaHeader === '-----BEGIN RSA PRIVATE KEY-----') {
      return key;
    }

    try {
      return Buffer.from(key, 'base64');
    } catch (err) {
      throw new TypeError(
        'Specified signing key must be either a valid PEM string or a base64 encoded PEM.'
      );
    }
  }

  throw new TypeError('Signing Key ID required');
};

/**
 * JWT - Signed URL token generation helpers
 *
 * @example
 * const Mux = require('@mux/mux-node');
 *
 * const token = Mux.JWT.signPlaybackId('some-playback-id', { keyId: 'your key id', keySecret: 'your key secret' })
 */
export class JWT {
  /**
   * Creates a new token to be used with a signed playback ID
   * @param {string} playbackId - The Playback ID (of type 'signed') that you'd like to generate a token for.
   * @param {Object} options - Configuration options to use when creating the token
   * @param {string} [options.keyId] - The signing key ID to use. If not specified, process.env.MUX_SIGNING_KEY is attempted
   * @param {string} [options.keySecret] - The signing key secret. If not specified, process.env.MUX_PRIVATE_KEY is used.
   * @param {string} [options.type=video] - Type of token this will be. Valid types are `video`, `thumbnail`, `gif`, `storyboard` or `stats`
   * @param {string} [options.expiration=7d] - Length of time for the token to be valid.
   * @param {Object} [options.params] - Any additional query params you'd use with a public url. For example, with a thumbnail this would be values such as `time`.
   * @returns {string} - Returns a token to be used with a signed URL.
   *
   * @example
   * const Mux = require('@mux/mux-node');
   *
   * const token = Mux.JWT.sign('some-playback-id', { keyId: 'your key id', keySecret: 'your key secret' });
   * // Now you can use the token in a url: `https://stream.mux.com/some-playback-id.m3u8?token=${token}`
   *
   * @deprecated This method should not be used, you should use signPlaybackId instead
   */
  static sign(playbackId: string, options: MuxJWTSignOptions = {}) {
    process.emitWarning(
      'The JWT.sign() method has been deprecated, please use JWT.signPlaybackId() instead',
      'DeprecatedWarning'
    );
    return this.signPlaybackId(playbackId, options);
  }
  /**
   * Creates a new token to be used with a signed playback ID
   * @param {string} playbackId - The Playback ID (of type 'signed') that you'd like to generate a token for.
   * @param {Object} options - Configuration options to use when creating the token
   * @param {string} [options.keyId] - The signing key ID to use. If not specified, process.env.MUX_SIGNING_KEY is attempted
   * @param {string} [options.keySecret] - The signing key secret. If not specified, process.env.MUX_PRIVATE_KEY is used.
   * @param {string} [options.type=video] - Type of token this will be. Valid types are `video`, `thumbnail`, `gif`, `storyboard` or `stats`
   * @param {string} [options.expiration=7d] - Length of time for the token to be valid.
   * @param {Object} [options.params] - Any additional query params you'd use with a public url. For example, with a thumbnail this would be values such as `time`.
   * @returns {string} - Returns a token to be used with a signed URL.
   *
   * @example
   * const Mux = require('@mux/mux-node');
   *
   * const token = Mux.JWT.sign('some-playback-id', { keyId: 'your key id', keySecret: 'your key secret' });
   * // Now you can use the token in a url: `https://stream.mux.com/some-playback-id.m3u8?token=${token}`
   */
  static signPlaybackId(playbackId: string, options: MuxJWTSignOptions = {}) {
    const opts = {
      type: 'video',
      expiration: '7d',
      params: {},
      ...options,
    };

    const keyId = getSigningKey(options);
    const keySecret = getPrivateKey(options);

    // TODO: come back through sometime and replace this with runtypes validation?
    // @ts-ignore
    const typeClaim = TypeClaim[opts.type];
    if (!typeClaim) {
      throw new Error(`Invalid signature type: ${opts.type}`);
    }

    const tokenOptions: jwt.SignOptions = {
      keyid: keyId,
      subject: playbackId,
      audience: typeClaim,
      expiresIn: opts.expiration,
      noTimestamp: true,
      algorithm: 'RS256',
    };

    return jwt.sign(opts.params, keySecret, tokenOptions);
  }
  /**
   * Creates a new token to be used with a signed Space ID
   * @param {string} spaceId - The Space ID (of type 'signed') that you'd like to generate a token for.
   * @param {Object} options - Configuration options to use when creating the token
   * @param {string} [options.keyId] - The signing key ID to use. If not specified, process.env.MUX_SIGNING_KEY is attempted
   * @param {string} [options.keySecret] - The signing key secret. If not specified, process.env.MUX_PRIVATE_KEY is used.
   * @param {string} [options.expiration=7d] - Length of time for the token to be valid.
   * @param {Object} [options.params] - Any additional query params you'd use with a public url.
   * @returns {string} - Returns a token to be used with a signed URL.
   *
   * @example
   * const Mux = require('@mux/mux-node');
   *
   * const token = Mux.JWT.signSpaceId('some-space-id', { keyId: 'your key id', keySecret: 'your key secret' });
   */
  static signSpaceId(spaceId: string, options: MuxJWTSignOptions = {}) {
    const opts = {
      expiration: '7d',
      params: {},
      ...options,
    };

    const keyId = getSigningKey(options);
    const keySecret = getPrivateKey(options);

    const tokenOptions: jwt.SignOptions = {
      keyid: keyId,
      subject: spaceId,
      audience: 'rt',
      expiresIn: opts.expiration,
      noTimestamp: true,
      algorithm: 'RS256',
    };

    if (!spaceId) {
      throw new TypeError('A valid Space ID is required');
    }

    return jwt.sign(opts.params, keySecret, tokenOptions);
  }

  /**
   * Creates a new token to be used with a signed statistics request
   * @param {string} Id - The ID of the object that you'd like to generate a token for
   * @param {Object} options - Configuration options to use when creating the token
   * @param {string} [options.keyId] - The signing key ID to use. If not specified, process.env.MUX_SIGNING_KEY is attempted
   * @param {string} [options.keySecret] - The signing key secret. If not specified, process.env.MUX_PRIVATE_KEY is used.
   * @param {string} [options.type=video] - Type of token this will be. Valid types are `video`, `asset`, `playback`, or `live_stream`
   * @param {string} [options.expiration=7d] - Length of time for the token to be valid.
   * @param {Object} [options.params] - Any additional query params you'd use with a public url. For example, with a thumbnail this would be values such as `time`.
   * @returns {string} - Returns a token to be used with a signed URL.
   *
   * @example
   * const Mux = require('@mux/mux-node');
   *
   * const token = Mux.JWT.sign('some-id', { type: 'video', keyId: 'your key id', keySecret: 'your key secret' });
   * // Now you can use the token in a url: `https://stream.mux.com/some-playback-id.m3u8?token=${token}`
   */
  static signViewerCounts(Id: string, options: MuxJWTSignOptions = {}) {
    const opts = {
      type: 'video',
      expiration: '7d',
      params: {},
      ...options,
    };

    const keyId = getSigningKey(options);
    const keySecret = getPrivateKey(options);

    // TODO: come back through sometime and replace this with runtypes validation?
    // @ts-ignore
    const typeClaim = DataTypeClaim[opts.type];
    if (!typeClaim) {
      throw new Error(`Invalid signature type: ${opts.type}`);
    }

    const tokenOptions: jwt.SignOptions = {
      keyid: keyId,
      subject: Id,
      audience: typeClaim,
      expiresIn: opts.expiration,
      noTimestamp: true,
      algorithm: 'RS256',
    };

    return jwt.sign(opts.params, keySecret, tokenOptions);
  }

  /**
   * Decodes an existing token.
   *
   * Note: This does not cryptographically verify the token signature, it simply decodes the values.
   * @param {string} token - The token you'd like to decode.
   * @returns {Object} - If the token could be decoded, it returns the decoded token object
   *
   * @example
   * const Mux = require('@mux/mux-node');
   *
   * const token = Mux.JWT.sign('some-playback-id', { keyId: 'your key id', keySecret: 'your key secret' });
   * const decoded = Mux.JWT.decode(token);
   * // decoded will be the raw decoded JWT, so you'll see keys like `aud`, `exp`, etc.
   */
  static decode(token: string) {
    return jwt.decode(token);
  }
}
