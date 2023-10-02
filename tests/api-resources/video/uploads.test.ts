// File generated from our OpenAPI spec by Stainless.

import Mux from '@mux/mux-node';
import { Response } from 'node-fetch';

const mux = new Mux({
  tokenId: 'something1234',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  tokenSecret: 'my secret',
});

describe('resource uploads', () => {
  test('create: only required params', async () => {
    const responsePromise = mux.video.uploads.create({ new_asset_settings: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await mux.video.uploads.create({
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
        playback_policy: ['public', 'signed'],
        per_title_encode: true,
        passthrough: 'string',
        mp4_support: 'none',
        normalize_audio: true,
        master_access: 'none',
        test: true,
      },
      cors_origin: 'string',
      test: true,
      timeout: 60,
    });
  });

  test('retrieve', async () => {
    const responsePromise = mux.video.uploads.retrieve('abcd1234');
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
      mux.video.uploads.retrieve('abcd1234', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = mux.video.uploads.list();
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
    const responsePromise = mux.video.uploads.cancel('abcd1234');
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
    await expect(mux.video.uploads.cancel('abcd1234', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });
});
