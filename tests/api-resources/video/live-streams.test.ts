// File generated from our OpenAPI spec by Stainless.

import Mux from '@mux/mux-node';

const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource liveStreams', () => {
  test('create', async () => {
    const response = await mux.video.liveStreams.create({});
  });

  test('retrieve', async () => {
    const response = await mux.video.liveStreams.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('update', async () => {
    const response = await mux.video.liveStreams.update('string', {});
  });

  test('list', async () => {
    const response = await mux.video.liveStreams.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.liveStreams.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.list(
        { limit: 0, page: 0, status: 'active', stream_key: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('del', async () => {
    const response = await mux.video.liveStreams.del('string');
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.liveStreams.del('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('complete', async () => {
    const response = await mux.video.liveStreams.complete('string');
  });

  test('complete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.complete('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('createPlaybackId', async () => {
    const response = await mux.video.liveStreams.createPlaybackId('string', {});
  });

  test('createSimulcastTarget: only required params', async () => {
    const response = await mux.video.liveStreams.createSimulcastTarget('string', { url: 'string' });
  });

  test('createSimulcastTarget: required and optional params', async () => {
    const response = await mux.video.liveStreams.createSimulcastTarget('string', {
      url: 'string',
      passthrough: 'string',
      stream_key: 'string',
    });
  });

  test('deletePlaybackId', async () => {
    const response = await mux.video.liveStreams.deletePlaybackId('string', 'string');
  });

  test('deletePlaybackId: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.deletePlaybackId('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('deleteSimulcastTarget', async () => {
    const response = await mux.video.liveStreams.deleteSimulcastTarget('string', 'string');
  });

  test('deleteSimulcastTarget: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.deleteSimulcastTarget('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('disable', async () => {
    const response = await mux.video.liveStreams.disable('string');
  });

  test('disable: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.disable('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('enable', async () => {
    const response = await mux.video.liveStreams.enable('string');
  });

  test('enable: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.enable('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('resetStreamKey', async () => {
    const response = await mux.video.liveStreams.resetStreamKey('string');
  });

  test('resetStreamKey: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.resetStreamKey('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrievePlaybackId', async () => {
    const response = await mux.video.liveStreams.retrievePlaybackId('string', 'string');
  });

  test('retrievePlaybackId: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.retrievePlaybackId('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieveSimulcastTarget', async () => {
    const response = await mux.video.liveStreams.retrieveSimulcastTarget('string', 'string');
  });

  test('retrieveSimulcastTarget: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.retrieveSimulcastTarget('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('updateEmbeddedSubtitles', async () => {
    const response = await mux.video.liveStreams.updateEmbeddedSubtitles('string', {});
  });

  test('updateGeneratedSubtitles', async () => {
    const response = await mux.video.liveStreams.updateGeneratedSubtitles('string', {});
  });
});
