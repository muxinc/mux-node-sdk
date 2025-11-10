// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from '@mux/mux-node';

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
        throw new Error(
          'Unsupported authorization scheme. Expected the "Authorization" header to be a supported scheme (Basic, Bearer).',
        );
    }
  }

  const tokenId =
    Array.isArray(req.headers['x-mux-token-id']) ?
      req.headers['x-mux-token-id'][0]
    : req.headers['x-mux-token-id'];
  const tokenSecret =
    Array.isArray(req.headers['x-mux-token-secret']) ?
      req.headers['x-mux-token-secret'][0]
    : req.headers['x-mux-token-secret'];
  const authorizationToken =
    Array.isArray(req.headers['x-mux-authorization-token']) ?
      req.headers['x-mux-authorization-token'][0]
    : req.headers['x-mux-authorization-token'];

  if (!(tokenId && tokenSecret) && !authorizationToken) {
    throw new Error('No authorization headers found');
  }

  return { tokenId, tokenSecret, authorizationToken };
};
