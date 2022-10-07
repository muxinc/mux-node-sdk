// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource video_views', () => {
  test('retrieve', async () => {
    const response = await mux.data.videoViews.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.videoViews.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await mux.data.videoViews.list();
  });

  test('list: required and optional params', async () => {
    const response = await mux.data.videoViews.list({
      limit: 0,
      page: 0,
      viewer_id: 'string',
      error_id: 0,
      order_direction: 'asc',
      'filters[]': ['string', 'string', 'string'],
      'timeframe[]': ['string', 'string', 'string'],
    });
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
          limit: 0,
          page: 0,
          viewer_id: 'string',
          error_id: 0,
          order_direction: 'asc',
          'filters[]': ['string', 'string', 'string'],
          'timeframe[]': ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
