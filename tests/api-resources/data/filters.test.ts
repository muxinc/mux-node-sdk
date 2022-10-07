// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource filters', () => {
  test('list', async () => {
    const response = await mux.data.filters.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.filters.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list_filter_values: only required params', async () => {
    const response = await mux.data.filters.listFilterValues('string');
  });

  test('list_filter_values: required and optional params', async () => {
    const response = await mux.data.filters.listFilterValues('string', {
      limit: 0,
      page: 0,
      'filters[]': ['string', 'string', 'string'],
      'timeframe[]': ['string', 'string', 'string'],
    });
  });

  test('list_filter_values: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.filters.listFilterValues('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_filter_values: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.filters.listFilterValues(
        'string',
        {
          limit: 0,
          page: 0,
          'filters[]': ['string', 'string', 'string'],
          'timeframe[]': ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
