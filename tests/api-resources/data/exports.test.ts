// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  muxTokenSecret: 'MUX_TOKEN_SECRET',
});

describe('resource exports', () => {
  test('list', async () => {
    const response = await mux.data.exports.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.exports.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list_video_views', async () => {
    const response = await mux.data.exports.listVideoViews();
  });

  test('list_video_views: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.data.exports.listVideoViews({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });
});
