// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';

const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource realTime', () => {
  test('listDimensions', async () => {
    const response = await mux.data.realTime.listDimensions();
  });

  test('listDimensions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.realTime.listDimensions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('listMetrics', async () => {
    const response = await mux.data.realTime.listMetrics();
  });

  test('listMetrics: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.realTime.listMetrics({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('retrieveBreakdown', async () => {
    const response = await mux.data.realTime.retrieveBreakdown('current-concurrent-viewers');
  });

  test('retrieveBreakdown: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveBreakdown('current-concurrent-viewers', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieveBreakdown: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveBreakdown(
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

  test('retrieveHistogramTimeseries', async () => {
    const response = await mux.data.realTime.retrieveHistogramTimeseries('video-startup-time');
  });

  test('retrieveHistogramTimeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveHistogramTimeseries('video-startup-time', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieveHistogramTimeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveHistogramTimeseries(
        'video-startup-time',
        { 'filters[]': ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieveTimeseries', async () => {
    const response = await mux.data.realTime.retrieveTimeseries('current-concurrent-viewers');
  });

  test('retrieveTimeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveTimeseries('current-concurrent-viewers', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieveTimeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveTimeseries(
        'current-concurrent-viewers',
        { 'filters[]': ['string', 'string', 'string'], timestamp: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
