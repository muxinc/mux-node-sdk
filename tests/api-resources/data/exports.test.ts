// File generated from our OpenAPI spec by Stainless.

import Mux from '@mux/mux-node';

const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource exports', () => {
  test('listVideoViews', async () => {
    const response = await mux.data.exports.listVideoViews();
  });

  test('listVideoViews: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.exports.listVideoViews({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });
});
