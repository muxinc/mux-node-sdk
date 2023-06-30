// File generated from our OpenAPI spec by Stainless.

import Mux from 'mux';

const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource videoViews', () => {
  test('retrieve', async () => {
    const response = await mux.data.videoViews.retrieve('abcd1234');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.videoViews.retrieve('abcd1234', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list', async () => {
    const response = await mux.data.videoViews.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.videoViews.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.videoViews.list(
        {
          error_id: 0,
          'filters[]': ['string', 'string', 'string'],
          limit: 0,
          order_direction: 'asc',
          page: 0,
          'timeframe[]': ['string', 'string', 'string'],
          viewer_id: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
