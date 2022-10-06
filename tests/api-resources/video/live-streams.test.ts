// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource live_streams', () => {
  test('create: only required params', async () => {
    const response = await mux.video.liveStreams.create({});
  });

  test('create: required and optional params', async () => {
    const response = await mux.video.liveStreams.create({
      playback_policy: ['public', 'public', 'public'],
      new_asset_settings: {
        input: [
          {
            url: 'string',
            overlay_settings: {
              vertical_align: 'top',
              vertical_margin: 'string',
              horizontal_align: 'left',
              horizontal_margin: 'string',
              width: 'string',
              height: 'string',
              opacity: 'string',
            },
            start_time: 0,
            end_time: 0,
            type: 'video',
            text_type: 'subtitles',
            language_code: 'string',
            name: 'string',
            closed_captions: true,
            passthrough: 'string',
          },
          {
            url: 'string',
            overlay_settings: {
              vertical_align: 'top',
              vertical_margin: 'string',
              horizontal_align: 'left',
              horizontal_margin: 'string',
              width: 'string',
              height: 'string',
              opacity: 'string',
            },
            start_time: 0,
            end_time: 0,
            type: 'video',
            text_type: 'subtitles',
            language_code: 'string',
            name: 'string',
            closed_captions: true,
            passthrough: 'string',
          },
          {
            url: 'string',
            overlay_settings: {
              vertical_align: 'top',
              vertical_margin: 'string',
              horizontal_align: 'left',
              horizontal_margin: 'string',
              width: 'string',
              height: 'string',
              opacity: 'string',
            },
            start_time: 0,
            end_time: 0,
            type: 'video',
            text_type: 'subtitles',
            language_code: 'string',
            name: 'string',
            closed_captions: true,
            passthrough: 'string',
          },
        ],
        playback_policy: ['public', 'public', 'public'],
        per_title_encode: true,
        passthrough: 'string',
        mp4_support: 'none',
        normalize_audio: true,
        master_access: 'none',
        test: true,
      },
      reconnect_window: 0,
      use_slate_for_standard_latency: true,
      reconnect_slate_url: 'string',
      passthrough: 'string',
      audio_only: true,
      embedded_subtitles: [
        { name: 'string', passthrough: 'string', language_code: 'string', language_channel: 'cc1' },
        { name: 'string', passthrough: 'string', language_code: 'string', language_channel: 'cc1' },
        { name: 'string', passthrough: 'string', language_code: 'string', language_channel: 'cc1' },
      ],
      generated_subtitles: [
        {
          name: 'string',
          passthrough: 'string',
          language_code: 'en',
          transcription_vocabulary_ids: ['string', 'string', 'string'],
        },
        {
          name: 'string',
          passthrough: 'string',
          language_code: 'en',
          transcription_vocabulary_ids: ['string', 'string', 'string'],
        },
        {
          name: 'string',
          passthrough: 'string',
          language_code: 'en',
          transcription_vocabulary_ids: ['string', 'string', 'string'],
        },
      ],
      reduced_latency: true,
      low_latency: true,
      latency_mode: 'low',
      test: true,
      simulcast_targets: [
        { passthrough: 'string', stream_key: 'string', url: 'string' },
        { passthrough: 'string', stream_key: 'string', url: 'string' },
        { passthrough: 'string', stream_key: 'string', url: 'string' },
      ],
      max_continuous_duration: 60,
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

  test('update: only required params', async () => {
    const response = await mux.video.liveStreams.update('string', {});
  });

  test('update: required and optional params', async () => {
    const response = await mux.video.liveStreams.update('string', {
      passthrough: 'string',
      latency_mode: 'low',
      reconnect_window: 0,
      use_slate_for_standard_latency: true,
      reconnect_slate_url: 'string',
      max_continuous_duration: 60,
    });
  });

  test('list: only required params', async () => {
    const response = await mux.video.liveStreams.list();
  });

  test('list: required and optional params', async () => {
    const response = await mux.video.liveStreams.list({
      limit: 0,
      page: 0,
      stream_key: 'string',
      status: 'active',
    });
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
        { limit: 0, page: 0, stream_key: 'string', status: 'active' },
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

  test('create_playback_id: only required params', async () => {
    const response = await mux.video.liveStreams.createPlaybackId('string', {});
  });

  test('create_playback_id: required and optional params', async () => {
    const response = await mux.video.liveStreams.createPlaybackId('string', { policy: 'public' });
  });

  test('create_simulcast_target: only required params', async () => {
    const response = await mux.video.liveStreams.createSimulcastTarget('string', { url: 'string' });
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

  test('update_embedded_subtitles: only required params', async () => {
    const response = await mux.video.liveStreams.updateEmbeddedSubtitles('string', {});
  });

  test('update_embedded_subtitles: required and optional params', async () => {
    const response = await mux.video.liveStreams.updateEmbeddedSubtitles('string', {
      embedded_subtitles: [
        { name: 'string', passthrough: 'string', language_code: 'string', language_channel: 'cc1' },
        { name: 'string', passthrough: 'string', language_code: 'string', language_channel: 'cc1' },
        { name: 'string', passthrough: 'string', language_code: 'string', language_channel: 'cc1' },
      ],
    });
  });

  test('update_generated_subtitles: only required params', async () => {
    const response = await mux.video.liveStreams.updateGeneratedSubtitles('string', {});
  });

  test('update_generated_subtitles: required and optional params', async () => {
    const response = await mux.video.liveStreams.updateGeneratedSubtitles('string', {
      generated_subtitles: [
        {
          name: 'string',
          passthrough: 'string',
          language_code: 'en',
          transcription_vocabulary_ids: ['string', 'string', 'string'],
        },
        {
          name: 'string',
          passthrough: 'string',
          language_code: 'en',
          transcription_vocabulary_ids: ['string', 'string', 'string'],
        },
        {
          name: 'string',
          passthrough: 'string',
          language_code: 'en',
          transcription_vocabulary_ids: ['string', 'string', 'string'],
        },
      ],
    });
  });
});
