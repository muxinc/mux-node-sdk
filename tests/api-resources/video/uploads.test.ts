// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mux from '@mux/mux-node';
import { Response } from 'node-fetch';

const client = new Mux({
  tokenId: 'my token id',
  tokenSecret: 'my secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploads', () => {
  test('create: only required params', async () => {
    const responsePromise = client.video.uploads.create({ cors_origin: 'https://example.com/' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.video.uploads.create({
      cors_origin: 'https://example.com/',
      new_asset_settings: {
        input: [
          {
            url: 'url',
            overlay_settings: {
              vertical_align: 'top',
              vertical_margin: 'vertical_margin',
              horizontal_align: 'left',
              horizontal_margin: 'horizontal_margin',
              width: 'width',
              height: 'height',
              opacity: 'opacity',
            },
            generated_subtitles: [
              { name: 'name', passthrough: 'passthrough', language_code: 'en' },
              { name: 'name', passthrough: 'passthrough', language_code: 'en' },
              { name: 'name', passthrough: 'passthrough', language_code: 'en' },
            ],
            start_time: 0,
            end_time: 0,
            type: 'video',
            text_type: 'subtitles',
            language_code: 'language_code',
            name: 'name',
            closed_captions: true,
            passthrough: 'passthrough',
          },
          {
            url: 'url',
            overlay_settings: {
              vertical_align: 'top',
              vertical_margin: 'vertical_margin',
              horizontal_align: 'left',
              horizontal_margin: 'horizontal_margin',
              width: 'width',
              height: 'height',
              opacity: 'opacity',
            },
            generated_subtitles: [
              { name: 'name', passthrough: 'passthrough', language_code: 'en' },
              { name: 'name', passthrough: 'passthrough', language_code: 'en' },
              { name: 'name', passthrough: 'passthrough', language_code: 'en' },
            ],
            start_time: 0,
            end_time: 0,
            type: 'video',
            text_type: 'subtitles',
            language_code: 'language_code',
            name: 'name',
            closed_captions: true,
            passthrough: 'passthrough',
          },
          {
            url: 'url',
            overlay_settings: {
              vertical_align: 'top',
              vertical_margin: 'vertical_margin',
              horizontal_align: 'left',
              horizontal_margin: 'horizontal_margin',
              width: 'width',
              height: 'height',
              opacity: 'opacity',
            },
            generated_subtitles: [
              { name: 'name', passthrough: 'passthrough', language_code: 'en' },
              { name: 'name', passthrough: 'passthrough', language_code: 'en' },
              { name: 'name', passthrough: 'passthrough', language_code: 'en' },
            ],
            start_time: 0,
            end_time: 0,
            type: 'video',
            text_type: 'subtitles',
            language_code: 'language_code',
            name: 'name',
            closed_captions: true,
            passthrough: 'passthrough',
          },
        ],
        playback_policy: ['public'],
        advanced_playback_policies: [
          { policy: 'public', drm_configuration_id: 'drm_configuration_id' },
          { policy: 'public', drm_configuration_id: 'drm_configuration_id' },
          { policy: 'public', drm_configuration_id: 'drm_configuration_id' },
        ],
        per_title_encode: true,
        passthrough: 'passthrough',
        mp4_support: 'capped-1080p',
        normalize_audio: true,
        master_access: 'none',
        test: true,
        max_resolution_tier: '1080p',
        encoding_tier: 'smart',
      },
      test: true,
      timeout: 60,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.video.uploads.retrieve('abcd1234');
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
      client.video.uploads.retrieve('abcd1234', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.video.uploads.list();
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
    await expect(client.video.uploads.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.video.uploads.list({ limit: 0, page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('cancel', async () => {
    const responsePromise = client.video.uploads.cancel('abcd1234');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.video.uploads.cancel('abcd1234', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });
});
