// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource playback_restrictions', () => {
  test('create', async () => {
    const response = await mux.video.playbackRestrictions.create({ referrer: {} });
  });

  test('retrieve', async () => {
    const response = await mux.video.playbackRestrictions.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.playbackRestrictions.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list', async () => {
    const response = await mux.video.playbackRestrictions.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.playbackRestrictions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.playbackRestrictions.list({ limit: 0, page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('delete', async () => {
    const response = await mux.video.playbackRestrictions.del('string');
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.playbackRestrictions.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('update_referrer', async () => {
    const response = await mux.video.playbackRestrictions.updateReferrer('string', {});
  });
});
