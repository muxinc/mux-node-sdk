import { type PrivateKey } from '@mux/mux-node/_shims/auto/jwt';

export interface SignOptions {
  /**
   * Signature algorithm. Could be one of these values :
   * - RS256:    RSASSA using SHA-256 hash algorithm
   */
  algorithm?: Algorithm | undefined;
  keyid?: string | undefined;
  /** expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d" */
  expiresIn?: string | number | undefined;
  /** expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d" */
  notBefore?: string | number | undefined;
  audience?: string | string[] | undefined;
  subject?: string | undefined;
  issuer?: string | undefined;
  jwtid?: string | undefined;
  noTimestamp?: boolean | undefined;
}

export type Algorithm = 'RS256';

// standard names https://www.rfc-editor.org/rfc/rfc7515.html#section-4.1
export interface JwtHeader {
  alg: string | Algorithm;
  typ?: string | undefined;
  cty?: string | undefined;
  crit?: Array<string | Exclude<keyof JwtHeader, 'crit'>> | undefined;
  kid?: string | undefined;
  jku?: string | undefined;
  x5u?: string | string[] | undefined;
  'x5t#S256'?: string | undefined;
  x5t?: string | undefined;
  x5c?: string | string[] | undefined;
}

export enum TypeClaim {
  video = 'v',
  thumbnail = 't',
  gif = 'g',
  storyboard = 's',
  stats = 'playback_id',
  drm_license = 'd',
}
export enum TypeToken {
  video = 'playback-token',
  thumbnail = 'thumbnail-token',
  storyboard = 'storyboard-token',
  drm_license = 'drm-token',
  gif = 'gif-token', // Not supported by Mux Player
  stats = 'stats-token', // Not supported by Mux Player
}
export type TypeTokenValues = (typeof TypeToken)[keyof typeof TypeToken];
export type Tokens = Partial<Record<TypeTokenValues, string>>;
// ['thumbnail', { params: { time: 2 } }]
export type TypeWithConfig<Type extends string = string> = [Type, Omit<MuxJWTSignOptions<Type>, 'type'>];

interface MuxJWTSignOptionsBase<Type extends string = string> {
  keyId?: string;
  keySecret?: string | PrivateKey;
  keyFilePath?: string;
  type?: Type | Array<Type | TypeWithConfig<Type>>;
  expiration?: string;
  params?: Record<string, string>;
}
export interface MuxJWTSignOptions<Type extends string = string> extends MuxJWTSignOptionsBase<Type> {
  type?: Type;
}
export interface MuxJWTSignOptionsMultiple<Type extends string = string> extends MuxJWTSignOptionsBase<Type> {
  type: Array<Type | TypeWithConfig<Type>>;
}
export const isMuxJWTSignOptionsMultiple = (
  config: MuxJWTSignOptions | MuxJWTSignOptionsMultiple,
): config is MuxJWTSignOptionsMultiple => Array.isArray(config.type);

export enum DataTypeClaim {
  video = 'video_id',
  asset = 'asset_id',
  playback = 'playback_id',
  live_stream = 'live_stream_id',
}
