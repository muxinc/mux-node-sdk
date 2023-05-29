// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';

const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource metrics', () => {
  test('list', async () => {
    const response = await mux.data.monitoring.metrics.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.monitoring.metrics.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('getBreakdown', async () => {
    const response = await mux.data.monitoring.metrics.getBreakdown('current-concurrent-viewers');
  });

  test('getBreakdown: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.monitoring.metrics.getBreakdown('current-concurrent-viewers', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('getBreakdown: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.monitoring.metrics.getBreakdown(
        'current-concurrent-viewers',
        {
          dimension: 'asn',
          'filters[]': ['string', 'string', 'string'],
          order_by: 'negative_impact',
          order_direction: 'asc',
          timestamp: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('getBreakdownTimeseries', async () => {
    const response = await mux.data.monitoring.metrics.getBreakdownTimeseries('current-concurrent-viewers');
  });

  test('getBreakdownTimeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.monitoring.metrics.getBreakdownTimeseries('current-concurrent-viewers', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('getBreakdownTimeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.monitoring.metrics.getBreakdownTimeseries(
        'current-concurrent-viewers',
        {
          dimension: 'asn',
          'filters[]': ['string', 'string', 'string'],
          limit: 0,
          order_by: 'negative_impact',
          order_direction: 'asc',
          'timeframe[]': ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('getHistogramTimeseries', async () => {
    const response = await mux.data.monitoring.metrics.getHistogramTimeseries('video-startup-time');
  });

  test('getHistogramTimeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.monitoring.metrics.getHistogramTimeseries('video-startup-time', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('getHistogramTimeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.monitoring.metrics.getHistogramTimeseries(
        'video-startup-time',
        { 'filters[]': ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('getTimeseries', async () => {
    const response = await mux.data.monitoring.metrics.getTimeseries('current-concurrent-viewers');
  });

  test('getTimeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.monitoring.metrics.getTimeseries('current-concurrent-viewers', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('getTimeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.monitoring.metrics.getTimeseries(
        'current-concurrent-viewers',
        { 'filters[]': ['string', 'string', 'string'], timestamp: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
