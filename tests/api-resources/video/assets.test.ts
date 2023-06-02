// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';

const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource assets', () => {
  test('create', async () => {
    const response = await mux.video.assets.create({});
  });

  test('retrieve', async () => {
    const response = await mux.video.assets.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.assets.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('update', async () => {
    const response = await mux.video.assets.update('string', {});
  });

  test('list', async () => {
    const response = await mux.video.assets.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.assets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.assets.list(
        { limit: 0, live_stream_id: 'string', page: 0, upload_id: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('del', async () => {
    const response = await mux.video.assets.del('string');
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.assets.del('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('createPlaybackId', async () => {
    const response = await mux.video.assets.createPlaybackId('string', {});
  });

  test('createTrack: only required params', async () => {
    const response = await mux.video.assets.createTrack('string', {
      language_code: 'string',
      text_type: 'subtitles',
      type: 'text',
      url: 'string',
    });
  });

  test('createTrack: required and optional params', async () => {
    const response = await mux.video.assets.createTrack('string', {
      language_code: 'string',
      text_type: 'subtitles',
      type: 'text',
      url: 'string',
      closed_captions: true,
      name: 'string',
      passthrough: 'string',
    });
  });

  test('deletePlaybackId', async () => {
    const response = await mux.video.assets.deletePlaybackId('string', 'string');
  });

  test('deletePlaybackId: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.assets.deletePlaybackId('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('deleteTrack', async () => {
    const response = await mux.video.assets.deleteTrack('string', 'string');
  });

  test('deleteTrack: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.assets.deleteTrack('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrievePlaybackId', async () => {
    const response = await mux.video.assets.retrievePlaybackId('string', 'string');
  });

  test('retrievePlaybackId: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.assets.retrievePlaybackId('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('updateMasterAccess', async () => {
    const response = await mux.video.assets.updateMasterAccess('string', {});
  });

  test('updateMP4Support', async () => {
    const response = await mux.video.assets.updateMP4Support('string', {});
  });
});
