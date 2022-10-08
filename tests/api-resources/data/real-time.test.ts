// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  muxTokenSecret: 'MUX_TOKEN_SECRET',
});

describe('resource real_time', () => {
  test('list_dimensions', async () => {
    const response = await mux.data.realTime.listDimensions();
  });

  test('list_dimensions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.realTime.listDimensions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list_metrics', async () => {
    const response = await mux.data.realTime.listMetrics();
  });

  test('list_metrics: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.realTime.listMetrics({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('retrieve_breakdown: only required params', async () => {
    const response = await mux.data.realTime.retrieveBreakdown('current-concurrent-viewers');
  });

  test('retrieve_breakdown: required and optional params', async () => {
    const response = await mux.data.realTime.retrieveBreakdown('current-concurrent-viewers', {
      dimension: 'asn',
      timestamp: 0,
      'filters[]': ['string', 'string', 'string'],
      order_by: 'negative_impact',
      order_direction: 'asc',
    });
  });

  test('retrieve_breakdown: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveBreakdown('current-concurrent-viewers', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_breakdown: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveBreakdown(
        'current-concurrent-viewers',
        {
          dimension: 'asn',
          timestamp: 0,
          'filters[]': ['string', 'string', 'string'],
          order_by: 'negative_impact',
          order_direction: 'asc',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_histogram_timeseries: only required params', async () => {
    const response = await mux.data.realTime.retrieveHistogramTimeseries('video-startup-time');
  });

  test('retrieve_histogram_timeseries: required and optional params', async () => {
    const response = await mux.data.realTime.retrieveHistogramTimeseries('video-startup-time', {
      'filters[]': ['string', 'string', 'string'],
    });
  });

  test('retrieve_histogram_timeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveHistogramTimeseries('video-startup-time', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_histogram_timeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveHistogramTimeseries(
        'video-startup-time',
        { 'filters[]': ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_timeseries: only required params', async () => {
    const response = await mux.data.realTime.retrieveTimeseries('current-concurrent-viewers');
  });

  test('retrieve_timeseries: required and optional params', async () => {
    const response = await mux.data.realTime.retrieveTimeseries('current-concurrent-viewers', {
      'filters[]': ['string', 'string', 'string'],
    });
  });

  test('retrieve_timeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveTimeseries('current-concurrent-viewers', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_timeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.realTime.retrieveTimeseries(
        'current-concurrent-viewers',
        { 'filters[]': ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
