// File generated from our OpenAPI spec by Stainless.

import Mux from '@mux/mux-node';
import { Response } from 'node-fetch';

const mux = new Mux({
  tokenId: 'my token id',
  tokenSecret: 'my secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assets', () => {
  test('create: only required params', async () => {
    const responsePromise = mux.video.assets.create({ input: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await mux.video.assets.create({
      input: [
        {
          url: 'https://muxed.s3.amazonaws.com/leds.mp4',
          overlay_settings: {
            vertical_align: 'top',
            vertical_margin: 'string',
            horizontal_align: 'left',
            horizontal_margin: 'string',
            width: 'string',
            height: 'string',
            opacity: 'string',
          },
          generated_subtitles: [
            { name: 'string', passthrough: 'string', language_code: 'en' },
            { name: 'string', passthrough: 'string', language_code: 'en' },
            { name: 'string', passthrough: 'string', language_code: 'en' },
          ],
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
      encoding_tier: 'smart',
      master_access: 'none',
      max_resolution_tier: '1080p',
      mp4_support: 'none',
      normalize_audio: true,
      passthrough: 'string',
      per_title_encode: true,
      playback_policy: ['public'],
      test: true,
    });
  });

  test('retrieve', async () => {
    const responsePromise = mux.video.assets.retrieve('string');
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
    await expect(mux.video.assets.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = mux.video.assets.update('string', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = mux.video.assets.list();
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

  test('delete', async () => {
    const responsePromise = mux.video.assets.delete('string');
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
    await expect(mux.video.assets.delete('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('createPlaybackId', async () => {
    const responsePromise = mux.video.assets.createPlaybackId('string', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createTrack: only required params', async () => {
    const responsePromise = mux.video.assets.createTrack('string', {
      language_code: 'en-US',
      type: 'text',
      url: 'https://example.com/myVideo_en.srt',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createTrack: required and optional params', async () => {
    const response = await mux.video.assets.createTrack('string', {
      language_code: 'en-US',
      type: 'text',
      url: 'https://example.com/myVideo_en.srt',
      closed_captions: true,
      name: 'English',
      passthrough: 'English',
      text_type: 'subtitles',
    });
  });

  test('deletePlaybackId', async () => {
    const responsePromise = mux.video.assets.deletePlaybackId('string', 'string');
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
      mux.video.assets.deletePlaybackId('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('deleteTrack', async () => {
    const responsePromise = mux.video.assets.deleteTrack('string', 'string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteTrack: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.assets.deleteTrack('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrieveInputInfo', async () => {
    const responsePromise = mux.video.assets.retrieveInputInfo('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveInputInfo: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.assets.retrieveInputInfo('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('retrievePlaybackId', async () => {
    const responsePromise = mux.video.assets.retrievePlaybackId('string', 'string');
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
      mux.video.assets.retrievePlaybackId('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('updateMasterAccess: only required params', async () => {
    const responsePromise = mux.video.assets.updateMasterAccess('string', { master_access: 'temporary' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateMasterAccess: required and optional params', async () => {
    const response = await mux.video.assets.updateMasterAccess('string', { master_access: 'temporary' });
  });

  test('updateMP4Support: only required params', async () => {
    const responsePromise = mux.video.assets.updateMP4Support('string', { mp4_support: 'standard' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateMP4Support: required and optional params', async () => {
    const response = await mux.video.assets.updateMP4Support('string', { mp4_support: 'standard' });
  });
});
