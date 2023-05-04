// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';

const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource filters', () => {
  test('listValues', async () => {
    const response = await mux.data.filters.listValues('abcd1234');
  });

  test('listValues: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.filters.listValues('abcd1234', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('listValues: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.filters.listValues(
        'abcd1234',
        {
          'filters[]': ['string', 'string', 'string'],
          limit: 0,
          page: 0,
          'timeframe[]': ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
