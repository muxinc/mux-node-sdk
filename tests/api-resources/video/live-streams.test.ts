// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource live_streams', () => {
  test('create', async () => {
    const response = await mux.video.liveStreams.create({
      audio_only: true,
      embedded_subtitles: [{}, {}, {}],
      generated_subtitles: [{}, {}, {}],
      latency_mode: 'low',
      low_latency: true,
      max_continuous_duration: 60,
      new_asset_settings: {},
      passthrough: 'string',
      playback_policy: ['public', 'public', 'public'],
      reconnect_slate_url: 'string',
      reconnect_window: 0,
      reduced_latency: true,
      simulcast_targets: [{ url: 'string' }, { url: 'string' }, { url: 'string' }],
      test: true,
      use_slate_for_standard_latency: true,
    });
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
    const response = await mux.video.liveStreams.update('string', {
      latency_mode: 'low',
      max_continuous_duration: 60,
      passthrough: 'string',
      reconnect_slate_url: 'string',
      reconnect_window: 0,
      use_slate_for_standard_latency: true,
    });
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

  test('delete', async () => {
    const response = await mux.video.liveStreams.del('string');
  });

  test('delete: request options instead of params are passed correctly', async () => {
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

  test('create_playback_id', async () => {
    const response = await mux.video.liveStreams.createPlaybackId('string', { policy: 'public' });
  });

  test('create_simulcast_target: only required params', async () => {
    const response = await mux.video.liveStreams.createSimulcastTarget('string', {
      passthrough: 'string',
      stream_key: 'string',
      url: 'string',
    });
  });

  test('create_simulcast_target: required and optional params', async () => {
    const response = await mux.video.liveStreams.createSimulcastTarget('string', {
      passthrough: 'string',
      stream_key: 'string',
      url: 'string',
    });
  });

  test('delete_playback_id', async () => {
    const response = await mux.video.liveStreams.deletePlaybackId('string', 'string');
  });

  test('delete_playback_id: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.deletePlaybackId('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('delete_simulcast_target', async () => {
    const response = await mux.video.liveStreams.deleteSimulcastTarget('string', 'string');
  });

  test('delete_simulcast_target: request options instead of params are passed correctly', async () => {
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

  test('reset_stream_key', async () => {
    const response = await mux.video.liveStreams.resetStreamKey('string');
  });

  test('reset_stream_key: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.resetStreamKey('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_playback_id', async () => {
    const response = await mux.video.liveStreams.retrievePlaybackId('string', 'string');
  });

  test('retrieve_playback_id: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.retrievePlaybackId('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_simulcast_target', async () => {
    const response = await mux.video.liveStreams.retrieveSimulcastTarget('string', 'string');
  });

  test('retrieve_simulcast_target: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.liveStreams.retrieveSimulcastTarget('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('update_embedded_subtitles', async () => {
    const response = await mux.video.liveStreams.updateEmbeddedSubtitles('string', {
      embedded_subtitles: [{}, {}, {}],
    });
  });

  test('update_generated_subtitles', async () => {
    const response = await mux.video.liveStreams.updateGeneratedSubtitles('string', {
      generated_subtitles: [{}, {}, {}],
    });
  });
});
