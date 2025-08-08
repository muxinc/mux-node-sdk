// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from '@mux/mux-node/index';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Basic':
        const rawValue = Buffer.from(value, 'base64').toString();
        return {
          tokenId: rawValue.slice(0, rawValue.search(':')),
          tokenSecret: rawValue.slice(rawValue.search(':') + 1),
        };
      case 'Bearer':
        return { authorizationToken: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const tokenId =
    req.headers['x-mux-token-id'] instanceof Array ?
      req.headers['x-mux-token-id'][0]
    : req.headers['x-mux-token-id'];
  const tokenSecret =
    req.headers['x-mux-token-secret'] instanceof Array ?
      req.headers['x-mux-token-secret'][0]
    : req.headers['x-mux-token-secret'];
  const authorizationToken =
    req.headers['x-mux-authorization-token'] instanceof Array ?
      req.headers['x-mux-authorization-token'][0]
    : req.headers['x-mux-authorization-token'];
  return { tokenId, tokenSecret, authorizationToken };
};
