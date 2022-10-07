// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource delivery_usage', () => {
  test('list: only required params', async () => {
    const response = await mux.video.deliveryUsage.list();
  });

  test('list: required and optional params', async () => {
    const response = await mux.video.deliveryUsage.list({
      page: 0,
      limit: 0,
      asset_id: 'string',
      live_stream_id: 'string',
      'timeframe[]': ['string', 'string', 'string'],
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.deliveryUsage.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.deliveryUsage.list(
        {
          page: 0,
          limit: 0,
          asset_id: 'string',
          live_stream_id: 'string',
          'timeframe[]': ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
