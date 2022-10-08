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
    // fails if no api key provided
    expect(() => {
      new Mux({ muxTokenSecret: 'MUX_TOKEN_SECRET' });
    }).toThrow();

    // set api key via env var
    process.env['MUX_API_KEY'] = 'env var api key';
    const client = new Mux({ muxTokenSecret: 'MUX_TOKEN_SECRET' });
    expect(client.apiKey).toBe('env var api key');
    expect(client.muxTokenSecret).toBe('MUX_TOKEN_SECRET');
  });

  test('with apiKey argument', () => {
    process.env['MUX_API_KEY'] = 'env var api key';

    const client = new Mux({ apiKey: 'another api key', muxTokenSecret: 'MUX_TOKEN_SECRET' });
    expect(client.apiKey).toBe('another api key');
  });

  test('with options argument', () => {
    process.env['MUX_API_KEY'] = 'env var api key';

    // apiKey and custom options
    const client = new Mux({ apiKey: 'my api key', muxTokenSecret: 'MUX_TOKEN_SECRET' });
    expect(client.apiKey).toBe('my api key');
  });

  test('with disabled authentication', () => {
    process.env['MUX_API_KEY'] = 'env var api key';

    const client = new Mux({ apiKey: null, muxTokenSecret: 'MUX_TOKEN_SECRET' });
    expect(client.apiKey).toBeNull();
  });
});
