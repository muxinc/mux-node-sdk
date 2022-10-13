// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource assets', () => {
  test('create: only required params', async () => {
    const response = await mux.video.assets.create({});
  });

  test('create: required and optional params', async () => {
    const response = await mux.video.assets.create({
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
    });
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

  test('update: only required params', async () => {
    const response = await mux.video.assets.update('string', {});
  });

  test('update: required and optional params', async () => {
    const response = await mux.video.assets.update('string', { passthrough: 'string' });
  });

  test('list: only required params', async () => {
    const response = await mux.video.assets.list();
  });

  test('list: required and optional params', async () => {
    const response = await mux.video.assets.list({
      limit: 0,
      page: 0,
      live_stream_id: 'string',
      upload_id: 'string',
    });
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
        { limit: 0, page: 0, live_stream_id: 'string', upload_id: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('delete', async () => {
    const response = await mux.video.assets.del('string');
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.assets.del('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('create_playback_id: only required params', async () => {
    const response = await mux.video.assets.createPlaybackId('string', {});
  });

  test('create_playback_id: required and optional params', async () => {
    const response = await mux.video.assets.createPlaybackId('string', { policy: 'public' });
  });

  test('create_track: only required params', async () => {
    const response = await mux.video.assets.createTrack('string', {
      url: 'string',
      type: 'text',
      text_type: 'subtitles',
      language_code: 'string',
    });
  });

  test('create_track: required and optional params', async () => {
    const response = await mux.video.assets.createTrack('string', {
      url: 'string',
      type: 'text',
      text_type: 'subtitles',
      language_code: 'string',
      name: 'string',
      closed_captions: true,
      passthrough: 'string',
    });
  });

  test('delete_playback_id', async () => {
    const response = await mux.video.assets.deletePlaybackId('string', 'string');
  });

  test('delete_playback_id: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.assets.deletePlaybackId('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('delete_track', async () => {
    const response = await mux.video.assets.deleteTrack('string', 'string');
  });

  test('delete_track: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.assets.deleteTrack('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_input_info', async () => {
    const response = await mux.video.assets.retrieveInputInfo('string');
  });

  test('retrieve_input_info: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.assets.retrieveInputInfo('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieve_playback_id', async () => {
    const response = await mux.video.assets.retrievePlaybackId('string', 'string');
  });

  test('retrieve_playback_id: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.assets.retrievePlaybackId('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('update_master_access: only required params', async () => {
    const response = await mux.video.assets.updateMasterAccess('string', {});
  });

  test('update_master_access: required and optional params', async () => {
    const response = await mux.video.assets.updateMasterAccess('string', { master_access: 'temporary' });
  });

  test('update_mp4_support: only required params', async () => {
    const response = await mux.video.assets.updateMp4Support('string', {});
  });

  test('update_mp4_support: required and optional params', async () => {
    const response = await mux.video.assets.updateMp4Support('string', { mp4_support: 'standard' });
  });
});
