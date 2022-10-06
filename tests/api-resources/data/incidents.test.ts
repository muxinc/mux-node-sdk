// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource incidents', () => {
  test('retrieve', async () => {
    const response = await mux.data.incidents.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.incidents.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: only required params', async () => {
    const response = await mux.data.incidents.list();
  });

  test('list: required and optional params', async () => {
    const response = await mux.data.incidents.list({
      limit: 0,
      page: 0,
      order_by: 'negative_impact',
      order_direction: 'asc',
      status: 'open',
      severity: 'warning',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.incidents.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.incidents.list(
        {
          limit: 0,
          page: 0,
          order_by: 'negative_impact',
          order_direction: 'asc',
          status: 'open',
          severity: 'warning',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_related: only required params', async () => {
    const response = await mux.data.incidents.listRelated('string');
  });

  test('list_related: required and optional params', async () => {
    const response = await mux.data.incidents.listRelated('string', {
      limit: 0,
      page: 0,
      order_by: 'negative_impact',
      order_direction: 'asc',
    });
  });

  test('list_related: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.incidents.listRelated('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list_related: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.data.incidents.listRelated(
        'string',
        { limit: 0, page: 0, order_by: 'negative_impact', order_direction: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
