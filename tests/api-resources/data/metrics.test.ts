// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource metrics', () => {
  test('list: only required params', async () => {
    const response = await mux.data.metrics.list();
  });

  test('list: required and optional params', async () => {
    const response = await mux.data.metrics.list({
      'timeframe[]': ['string', 'string', 'string'],
      'filters[]': ['string', 'string', 'string'],
      dimension: 'asn',
      value: 'string',
    });
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
          'timeframe[]': ['string', 'string', 'string'],
          'filters[]': ['string', 'string', 'string'],
          dimension: 'asn',
          value: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_breakdown: only required params', async () => {
    const response = await mux.data.metrics.listBreakdown('aggregate_startup_time');
  });

  test('list_breakdown: required and optional params', async () => {
    const response = await mux.data.metrics.listBreakdown('aggregate_startup_time', {
      group_by: 'asn',
      measurement: '95th',
      'filters[]': ['string', 'string', 'string'],
      limit: 0,
      page: 0,
      order_by: 'negative_impact',
      order_direction: 'asc',
      'timeframe[]': ['string', 'string', 'string'],
    });
  });

  test('list_breakdown: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.listBreakdown('aggregate_startup_time', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_breakdown: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.listBreakdown(
        'aggregate_startup_time',
        {
          group_by: 'asn',
          measurement: '95th',
          'filters[]': ['string', 'string', 'string'],
          limit: 0,
          page: 0,
          order_by: 'negative_impact',
          order_direction: 'asc',
          'timeframe[]': ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_insights: only required params', async () => {
    const response = await mux.data.metrics.listInsights('aggregate_startup_time');
  });

  test('list_insights: required and optional params', async () => {
    const response = await mux.data.metrics.listInsights('aggregate_startup_time', {
      measurement: '95th',
      order_direction: 'asc',
      'timeframe[]': ['string', 'string', 'string'],
    });
  });

  test('list_insights: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.listInsights('aggregate_startup_time', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_insights: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.listInsights(
        'aggregate_startup_time',
        { measurement: '95th', order_direction: 'asc', 'timeframe[]': ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_overall: only required params', async () => {
    const response = await mux.data.metrics.retrieveOverall('aggregate_startup_time');
  });

  test('retrieve_overall: required and optional params', async () => {
    const response = await mux.data.metrics.retrieveOverall('aggregate_startup_time', {
      'timeframe[]': ['string', 'string', 'string'],
      'filters[]': ['string', 'string', 'string'],
      measurement: '95th',
    });
  });

  test('retrieve_overall: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.retrieveOverall('aggregate_startup_time', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_overall: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.retrieveOverall(
        'aggregate_startup_time',
        {
          'timeframe[]': ['string', 'string', 'string'],
          'filters[]': ['string', 'string', 'string'],
          measurement: '95th',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_timeseries: only required params', async () => {
    const response = await mux.data.metrics.retrieveTimeseries('aggregate_startup_time');
  });

  test('retrieve_timeseries: required and optional params', async () => {
    const response = await mux.data.metrics.retrieveTimeseries('aggregate_startup_time', {
      'timeframe[]': ['string', 'string', 'string'],
      'filters[]': ['string', 'string', 'string'],
      measurement: '95th',
      order_direction: 'asc',
      group_by: 'ten_minutes',
    });
  });

  test('retrieve_timeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.retrieveTimeseries('aggregate_startup_time', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_timeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.metrics.retrieveTimeseries(
        'aggregate_startup_time',
        {
          'timeframe[]': ['string', 'string', 'string'],
          'filters[]': ['string', 'string', 'string'],
          measurement: '95th',
          order_direction: 'asc',
          group_by: 'ten_minutes',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
