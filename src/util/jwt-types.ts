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

export interface MuxJWTSignOptions<Type extends string = string> {
  keyId?: string;
  keySecret?: string | PrivateKey;
  keyFilePath?: string;
  type?: Type;
  expiration?: string;
  params?: Record<string, string>;
}

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
