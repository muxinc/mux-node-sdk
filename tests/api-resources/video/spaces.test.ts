// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';

const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource spaces', () => {
  test('create', async () => {
    const response = await mux.video.spaces.create({
      broadcasts: [{ live_stream_id: 'string' }, { live_stream_id: 'string' }, { live_stream_id: 'string' }],
      passthrough: 'string',
      type: 'server',
    });
  });

  test('retrieve', async () => {
    const response = await mux.video.spaces.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.spaces.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list', async () => {
    const response = await mux.video.spaces.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.spaces.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.spaces.list({ limit: 0, page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('del', async () => {
    const response = await mux.video.spaces.del('string');
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.spaces.del('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('createBroadcast: only required params', async () => {
    const response = await mux.video.spaces.createBroadcast('string', {
      background: 'string',
      layout: 'gallery',
      live_stream_id: 'string',
      passthrough: 'string',
      resolution: '1920x1080',
    });
  });

  test('createBroadcast: required and optional params', async () => {
    const response = await mux.video.spaces.createBroadcast('string', {
      background: 'string',
      layout: 'gallery',
      live_stream_id: 'string',
      passthrough: 'string',
      resolution: '1920x1080',
    });
  });

  test('deleteBroadcast', async () => {
    const response = await mux.video.spaces.deleteBroadcast('string', 'string');
  });

  test('deleteBroadcast: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.spaces.deleteBroadcast('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieveBroadcast', async () => {
    const response = await mux.video.spaces.retrieveBroadcast('string', 'string');
  });

  test('retrieveBroadcast: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.spaces.retrieveBroadcast('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('startBroadcast', async () => {
    const response = await mux.video.spaces.startBroadcast('string', 'string');
  });

  test('startBroadcast: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.spaces.startBroadcast('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('stopBroadcast', async () => {
    const response = await mux.video.spaces.stopBroadcast('string', 'string');
  });

  test('stopBroadcast: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.spaces.stopBroadcast('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
