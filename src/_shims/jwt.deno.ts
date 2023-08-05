import { Mux } from '../index';
import { SignOptions, MuxJWTSignOptions } from '../jwt-types';

export type Secret = string | { key: string; passphrase: string };

export function sign(payload: object, secretOrPrivateKey: Secret, options: SignOptions): Promise<string> {
  throw new Error('not supported in pure Deno build yet');
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

export async function getPrivateKey(mux: Mux, opts: MuxJWTSignOptions): Promise<string> {
  let key;
  if (opts.keySecret) {
    key = opts.keySecret;
  } else if (opts.keyFilePath) {
    throw new Error(`keyFilePath is not supported in pure Deno build yet`);
  } else if (mux.jwtPrivateKey) {
    key = mux.jwtPrivateKey;
  }

  if (key) {
    key = key.trim();
    if (key.startsWith('-----BEGIN RSA PRIVATE KEY-----')) {
      return key;
    }

    try {
      key = atob(key);
      if (key.startsWith('-----BEGIN RSA PRIVATE KEY-----')) {
        return key;
      }
    } catch (error) {
      // fallthrough
    }

    throw new TypeError('Specified signing key must be either a valid PEM string or a base64 encoded PEM.');
  }

  throw new TypeError(
    'Private key required; pass a keySecret option to mux.jwt.sign*(), a jwtPrivateKey option to new Mux(), or set the MUX_PRIVATE_KEY environment variable',
  );
}
