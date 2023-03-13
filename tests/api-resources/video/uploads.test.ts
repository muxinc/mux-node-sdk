// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource uploads', () => {
  test('create: only required params', async () => {
    const response = await mux.video.uploads.create({ new_asset_settings: {} });
  });

  test('create: required and optional params', async () => {
    const response = await mux.video.uploads.create({
      timeout: 60,
      cors_origin: 'string',
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
      test: true,
    });
  });

  test('retrieve', async () => {
    const response = await mux.video.uploads.retrieve('abcd1234');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.uploads.retrieve('abcd1234', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await mux.video.uploads.list();
  });

  test('list: required and optional params', async () => {
    const response = await mux.video.uploads.list({ limit: 0, page: 0 });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.uploads.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.uploads.list({ limit: 0, page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('cancel', async () => {
    const response = await mux.video.uploads.cancel('abcd1234');
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.uploads.cancel('abcd1234', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });
});
