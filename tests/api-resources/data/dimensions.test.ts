// File generated from our OpenAPI spec by Stainless.

import Mux from '@mux/mux-node';
import { Response } from 'node-fetch';

const mux = new Mux({
  tokenId: 'my token id',
  tokenSecret: 'my secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dimensions', () => {
  test('list', async () => {
    const responsePromise = mux.data.dimensions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.dimensions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('listValues', async () => {
    const responsePromise = mux.data.dimensions.listValues('abcd1234');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listValues: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.dimensions.listValues('abcd1234', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('listValues: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.dimensions.listValues(
        'abcd1234',
        {
          filters: ['string', 'string', 'string'],
          limit: 0,
          page: 0,
          timeframe: ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
