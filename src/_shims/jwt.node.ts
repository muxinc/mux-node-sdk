import { Mux } from '../index';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import { SignOptions, MuxJWTSignOptions } from '../jwt-types';

export function sign(
  payload: object,
  secretOrPrivateKey: string | Buffer,
  options: SignOptions,
): Promise<string> {
  return new Promise((resolve, reject) =>
    jwt.sign(payload, secretOrPrivateKey, options, (error: Error | null, encoded: string | undefined) => {
      if (error || !encoded) reject(error);
      else resolve(encoded);
    }),
  );
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

export async function getPrivateKey(mux: Mux, opts: MuxJWTSignOptions): Promise<string | Buffer> {
  let key;
  if (opts.keySecret) {
    key = opts.keySecret;
  } else if (opts.keyFilePath) {
    key = await fs.promises.readFile(opts.keyFilePath, 'utf8');
  } else if (mux.jwtPrivateKey) {
    key = mux.jwtPrivateKey;
  }

  if (key && typeof key !== 'string') {
    return key;
  }

  if (key) {
    key = key.trim();
    if (key.startsWith('-----BEGIN RSA PRIVATE KEY-----')) {
      return key;
    }

    try {
      key = Buffer.from(key, 'base64').toString();
      if (key.startsWith('-----BEGIN RSA PRIVATE KEY-----')) {
        return key;
      }
    } catch (err) {
      // fallthrough
    }

    throw new TypeError('Specified signing key must be either a valid PEM string or a base64 encoded PEM.');
  }

  throw new TypeError(
    'Private key required; pass a keySecret or keyFilePath option to mux.jwt.sign*(), a jwtPrivateKey option to new Mux(), or set the MUX_PRIVATE_KEY environment variable',
  );
}
