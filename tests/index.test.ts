// File generated from our OpenAPI spec by Stainless.

import Mux from '../index';

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  test('with minimal arguments', () => {
    // fails if no access token provided
    expect(() => {
      new Mux({ tokenSecret: 'my secret' });
    }).toThrow();

    // set access token via env var
    process.env['MUX_TOKEN_ID'] = 'env var token id';
    const client = new Mux({ tokenSecret: 'my secret' });
    expect(client.tokenId).toBe('env var token id');
    expect(client.tokenSecret).toBe('my secret');
  });

  test('with tokenId argument', () => {
    process.env['MUX_TOKEN_ID'] = 'env var token id';

    const client = new Mux({ tokenId: 'another token id', tokenSecret: 'my secret' });
    expect(client.tokenId).toBe('another token id');
  });

  test('with options argument', () => {
    process.env['MUX_TOKEN_ID'] = 'env var token id';

    // tokenId and custom options
    const client = new Mux({ tokenId: 'my token id', tokenSecret: 'my secret' });
    expect(client.tokenId).toBe('my token id');
  });

  test('with disabled authentication', () => {
    process.env['MUX_TOKEN_ID'] = 'env var token id';

    const client = new Mux({ tokenId: null, tokenSecret: 'my secret' });
    expect(client.tokenId).toBeNull();
  });
});
