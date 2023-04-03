// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource metrics', () => {
  test('list', async () => {
    const response = await mux.data.metrics.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.metrics.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.list(
        {
          dimension: 'asn',
          'filters[]': ['string', 'string', 'string'],
          'timeframe[]': ['string', 'string', 'string'],
          value: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_breakdown', async () => {
    const response = await mux.data.metrics.listBreakdown('video_startup_time');
  });

  test('list_breakdown: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.listBreakdown('video_startup_time', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_breakdown: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.listBreakdown(
        'video_startup_time',
        {
          'filters[]': ['string', 'string', 'string'],
          group_by: 'asn',
          limit: 0,
          measurement: '95th',
          order_by: 'negative_impact',
          order_direction: 'asc',
          page: 0,
          'timeframe[]': ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_insights', async () => {
    const response = await mux.data.metrics.listInsights('video_startup_time');
  });

  test('list_insights: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.listInsights('video_startup_time', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_insights: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.listInsights(
        'video_startup_time',
        { measurement: '95th', order_direction: 'asc', 'timeframe[]': ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_overall', async () => {
    const response = await mux.data.metrics.retrieveOverall('video_startup_time');
  });

  test('retrieve_overall: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.retrieveOverall('video_startup_time', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_overall: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.retrieveOverall(
        'video_startup_time',
        {
          'filters[]': ['string', 'string', 'string'],
          measurement: '95th',
          'timeframe[]': ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_timeseries', async () => {
    const response = await mux.data.metrics.retrieveTimeseries('video_startup_time');
  });

  test('retrieve_timeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.retrieveTimeseries('video_startup_time', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_timeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.retrieveTimeseries(
        'video_startup_time',
        {
          'filters[]': ['string', 'string', 'string'],
          group_by: 'ten_minutes',
          measurement: '95th',
          order_direction: 'asc',
          'timeframe[]': ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
