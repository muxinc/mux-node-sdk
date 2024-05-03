import { Mux } from '../../index';
import { KeyLike, SignJWT } from 'jose';
import fs from 'fs';
import { SignOptions, MuxJWTSignOptions } from '../../util/jwt-types';
import { isKeyLike, keyFormatErrorMessage } from '../../util/jwt-util';
import { createPrivateKey } from 'crypto';

export type PrivateKey = Buffer | KeyLike;

export function sign(
  payload: object,
  secretOrPrivateKey: KeyLike | Uint8Array,
  options: SignOptions,
): Promise<string> {
  const sign = new SignJWT({
    ...(payload as any),
    ...(options.keyid ? { kid: options.keyid } : null),
  }).setProtectedHeader({ alg: options.algorithm || 'RS256' });
  if (options.issuer) sign.setIssuer(options.issuer);
  if (options.subject) sign.setSubject(options.subject);
  if (options.audience) sign.setAudience(options.audience);
  if (options.notBefore) sign.setNotBefore(options.notBefore);
  if (options.expiresIn) sign.setExpirationTime(options.expiresIn);
  return sign.sign(secretOrPrivateKey);
}

export function getSigningKey(mux: Mux, opts: MuxJWTSignOptions): string {
  const keyId = opts.keyId || mux.jwtSigningKey;
  if (!keyId) {
    throw new Error(
      'Signing key required; pass a keyId option to mux.jwt.sign*(), a jwtSigningKey option to new Mux(), or set the MUX_SIGNING_KEY environment variable',
    );
  }

  return keyId;
}

export async function getPrivateKey(mux: Mux, opts: MuxJWTSignOptions): Promise<KeyLike | Uint8Array> {
  const key = await getPrivateKeyHelper(mux, opts);
  if (isKeyLike(key)) return key;
  return createPrivateKey(key as any);
}
async function getPrivateKeyHelper(mux: Mux, opts: MuxJWTSignOptions): Promise<string | KeyLike | Buffer> {
  let key;
  if (opts.keySecret) {
    key = opts.keySecret;
  } else if (opts.keyFilePath) {
    key = await fs.promises.readFile(opts.keyFilePath, 'utf8');
  } else if (mux.jwtPrivateKey) {
    key = mux.jwtPrivateKey;
  }

  if (Buffer.isBuffer(key) || isKeyLike(key)) return key;

  if (typeof key === 'string') {
    key = key.trim();
    if (key.startsWith('-----BEGIN')) {
      return key;
    }

    try {
      key = Buffer.from(key, 'base64').toString();
      if (key.startsWith('-----BEGIN')) {
        return key;
      }
    } catch (err) {
      // fallthrough
    }

    throw new TypeError(keyFormatErrorMessage);
  }

  throw new TypeError(
    'Private key required; pass a keySecret or keyFilePath option to mux.jwt.sign*(), a jwtPrivateKey option to new Mux(), or set the MUX_PRIVATE_KEY environment variable',
  );
}
