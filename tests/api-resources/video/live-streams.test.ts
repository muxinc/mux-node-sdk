// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mux from '@mux/mux-node';
import { Response } from 'node-fetch';

const mux = new Mux({
  tokenId: 'my token id',
  tokenSecret: 'my secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource liveStreams', () => {
  test('create', async () => {
    const responsePromise = mux.video.liveStreams.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve', async () => {
    const responsePromise = mux.video.liveStreams.retrieve('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.retrieve('LIVE_STREAM_ID', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = mux.video.liveStreams.update('LIVE_STREAM_ID', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = mux.video.liveStreams.list();
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
    await expect(mux.video.liveStreams.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.list(
        { limit: 0, page: 0, status: 'active', stream_key: 'stream_key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = mux.video.liveStreams.delete('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.delete('LIVE_STREAM_ID', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('complete', async () => {
    const responsePromise = mux.video.liveStreams.complete('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.complete('LIVE_STREAM_ID', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('createPlaybackId', async () => {
    const responsePromise = mux.video.liveStreams.createPlaybackId('LIVE_STREAM_ID', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createSimulcastTarget: only required params', async () => {
    const responsePromise = mux.video.liveStreams.createSimulcastTarget('LIVE_STREAM_ID', {
      url: 'rtmp://live.example.com/app',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createSimulcastTarget: required and optional params', async () => {
    const response = await mux.video.liveStreams.createSimulcastTarget('LIVE_STREAM_ID', {
      url: 'rtmp://live.example.com/app',
      passthrough: 'Example',
      stream_key: 'abcdefgh',
    });
  });

  test('deletePlaybackId', async () => {
    const responsePromise = mux.video.liveStreams.deletePlaybackId('LIVE_STREAM_ID', 'PLAYBACK_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deletePlaybackId: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.deletePlaybackId('LIVE_STREAM_ID', 'PLAYBACK_ID', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('deleteSimulcastTarget', async () => {
    const responsePromise = mux.video.liveStreams.deleteSimulcastTarget(
      'LIVE_STREAM_ID',
      'SIMULCAST_TARGET_ID',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteSimulcastTarget: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.deleteSimulcastTarget('LIVE_STREAM_ID', 'SIMULCAST_TARGET_ID', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('disable', async () => {
    const responsePromise = mux.video.liveStreams.disable('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('disable: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.disable('LIVE_STREAM_ID', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('enable', async () => {
    const responsePromise = mux.video.liveStreams.enable('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enable: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.enable('LIVE_STREAM_ID', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('resetStreamKey', async () => {
    const responsePromise = mux.video.liveStreams.resetStreamKey('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('resetStreamKey: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.resetStreamKey('LIVE_STREAM_ID', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrievePlaybackId', async () => {
    const responsePromise = mux.video.liveStreams.retrievePlaybackId('LIVE_STREAM_ID', 'PLAYBACK_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrievePlaybackId: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.retrievePlaybackId('LIVE_STREAM_ID', 'PLAYBACK_ID', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieveSimulcastTarget', async () => {
    const responsePromise = mux.video.liveStreams.retrieveSimulcastTarget(
      'LIVE_STREAM_ID',
      'SIMULCAST_TARGET_ID',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveSimulcastTarget: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.retrieveSimulcastTarget('LIVE_STREAM_ID', 'SIMULCAST_TARGET_ID', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('updateEmbeddedSubtitles', async () => {
    const responsePromise = mux.video.liveStreams.updateEmbeddedSubtitles('LIVE_STREAM_ID', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateGeneratedSubtitles', async () => {
    const responsePromise = mux.video.liveStreams.updateGeneratedSubtitles('LIVE_STREAM_ID', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
