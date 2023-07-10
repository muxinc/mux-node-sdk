// File generated from our OpenAPI spec by Stainless.

import { Headers } from 'mux/core';
import Mux from 'mux';
import { Response } from 'mux/_shims/fetch';

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

  describe('defaultHeaders', () => {
    const client = new Mux({
      baseURL: 'http://localhost:5000/',
      defaultHeaders: { 'X-My-Default-Header': '2' },
      tokenSecret: 'my secret',
      tokenId: 'my token id',
    });

    test('they are used in the request', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post' });
      expect((req.headers as Headers)['X-My-Default-Header']).toEqual('2');
    });

    test('can be overriden with `undefined`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect((req.headers as Headers)['X-My-Default-Header']).toBeUndefined();
    });

    test('can be overriden with `null`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect((req.headers as Headers)['X-My-Default-Header']).toBeUndefined();
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Mux({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        tokenSecret: 'my secret',
        tokenId: 'my token id',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Mux({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        tokenSecret: 'my secret',
        tokenId: 'my token id',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Mux({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        tokenSecret: 'my secret',
        tokenId: 'my token id',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new Mux({
      baseURL: 'http://localhost:5000/',
      tokenSecret: 'my secret',
      tokenId: 'my token id',
      fetch: (url) => {
        return Promise.resolve(
          new Response(JSON.stringify({ url, custom: true }), {
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      },
    });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Mux({
        baseURL: 'http://localhost:5000/custom/path/',
        tokenSecret: 'my secret',
        tokenId: 'my token id',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Mux({
        baseURL: 'http://localhost:5000/custom/path',
        tokenSecret: 'my secret',
        tokenId: 'my token id',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new Mux({ maxRetries: 1, tokenSecret: 'my secret', tokenId: 'my token id' });
    expect(client.maxRetries).toEqual(1);

    // default
    const client2 = new Mux({ tokenSecret: 'my secret', tokenId: 'my token id' });
    expect(client2.maxRetries).toEqual(2);
  });

  test('with minimal arguments', () => {
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
    // fails if no access token provided
    expect(() => {
      new Mux({ tokenSecret: 'my secret' });
    }).toThrow();
  });
});
