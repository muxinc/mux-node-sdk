// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mux from '@mux/mux-node';

const client = new Mux({
  tokenID: 'my token id',
  tokenSecret: 'my secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.video.assets.create({ inputs: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.video.assets.create({
      inputs: [
        {
          closed_captions: true,
          end_time: 0,
          generated_subtitles: [
            {
              language_code: 'en',
              name: 'name',
              passthrough: 'passthrough',
            },
          ],
          language_code: 'language_code',
          name: 'name',
          overlay_settings: {
            height: 'height',
            horizontal_align: 'left',
            horizontal_margin: 'horizontal_margin',
            opacity: 'opacity',
            vertical_align: 'top',
            vertical_margin: 'vertical_margin',
            width: 'width',
          },
          passthrough: 'passthrough',
          start_time: 0,
          text_type: 'subtitles',
          type: 'video',
          url: 'https://muxed.s3.amazonaws.com/leds.mp4',
        },
      ],
      advanced_playback_policies: [{ drm_configuration_id: 'drm_configuration_id', policy: 'public' }],
      copy_overlays: true,
      encoding_tier: 'smart',
      input: [
        {
          closed_captions: true,
          end_time: 0,
          generated_subtitles: [
            {
              language_code: 'en',
              name: 'name',
              passthrough: 'passthrough',
            },
          ],
          language_code: 'language_code',
          name: 'name',
          overlay_settings: {
            height: 'height',
            horizontal_align: 'left',
            horizontal_margin: 'horizontal_margin',
            opacity: 'opacity',
            vertical_align: 'top',
            vertical_margin: 'vertical_margin',
            width: 'width',
          },
          passthrough: 'passthrough',
          start_time: 0,
          text_type: 'subtitles',
          type: 'video',
          url: 'url',
        },
      ],
      master_access: 'none',
      max_resolution_tier: '1080p',
      meta: {
        creator_id: 'creator_id',
        external_id: 'external_id',
        title: 'title',
      },
      mp4_support: 'none',
      normalize_audio: true,
      passthrough: 'passthrough',
      per_title_encode: true,
      playback_policies: ['public'],
      playback_policy: ['public'],
      static_renditions: [{ resolution: 'highest', passthrough: 'passthrough' }],
      test: true,
      video_quality: 'basic',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.video.assets.retrieve('ASSET_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.video.assets.update('ASSET_ID', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.video.assets.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.video.assets.list(
        {
          cursor: 'cursor',
          limit: 0,
          live_stream_id: 'live_stream_id',
          page: 0,
          upload_id: 'upload_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.video.assets.delete('ASSET_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createPlaybackID', async () => {
    const responsePromise = client.video.assets.createPlaybackID('ASSET_ID', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createStaticRendition: only required params', async () => {
    const responsePromise = client.video.assets.createStaticRendition('ASSET_ID', { resolution: 'highest' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createStaticRendition: required and optional params', async () => {
    const response = await client.video.assets.createStaticRendition('ASSET_ID', {
      resolution: 'highest',
      passthrough: 'passthrough',
    });
  });

  test('createTrack: only required params', async () => {
    const responsePromise = client.video.assets.createTrack('ASSET_ID', {
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
    const response = await client.video.assets.createTrack('ASSET_ID', {
      language_code: 'en-US',
      type: 'text',
      url: 'https://example.com/myVideo_en.srt',
      closed_captions: true,
      name: 'English',
      passthrough: 'English',
      text_type: 'subtitles',
    });
  });

  test('deletePlaybackID: only required params', async () => {
    const responsePromise = client.video.assets.deletePlaybackID('PLAYBACK_ID', { ASSET_ID: 'ASSET_ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deletePlaybackID: required and optional params', async () => {
    const response = await client.video.assets.deletePlaybackID('PLAYBACK_ID', { ASSET_ID: 'ASSET_ID' });
  });

  test('deleteStaticRendition: only required params', async () => {
    const responsePromise = client.video.assets.deleteStaticRendition('STATIC_RENDITION_ID', {
      ASSET_ID: 'ASSET_ID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteStaticRendition: required and optional params', async () => {
    const response = await client.video.assets.deleteStaticRendition('STATIC_RENDITION_ID', {
      ASSET_ID: 'ASSET_ID',
    });
  });

  test('deleteTrack: only required params', async () => {
    const responsePromise = client.video.assets.deleteTrack('TRACK_ID', { ASSET_ID: 'ASSET_ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteTrack: required and optional params', async () => {
    const response = await client.video.assets.deleteTrack('TRACK_ID', { ASSET_ID: 'ASSET_ID' });
  });

  test('generateSubtitles: only required params', async () => {
    const responsePromise = client.video.assets.generateSubtitles('TRACK_ID', {
      ASSET_ID: 'ASSET_ID',
      generated_subtitles: [{}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateSubtitles: required and optional params', async () => {
    const response = await client.video.assets.generateSubtitles('TRACK_ID', {
      ASSET_ID: 'ASSET_ID',
      generated_subtitles: [
        {
          language_code: 'en',
          name: 'English (generated)',
          passthrough: 'English (generated)',
        },
      ],
    });
  });

  test('retrieveInputInfo', async () => {
    const responsePromise = client.video.assets.retrieveInputInfo('ASSET_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrievePlaybackID: only required params', async () => {
    const responsePromise = client.video.assets.retrievePlaybackID('PLAYBACK_ID', { ASSET_ID: 'ASSET_ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrievePlaybackID: required and optional params', async () => {
    const response = await client.video.assets.retrievePlaybackID('PLAYBACK_ID', { ASSET_ID: 'ASSET_ID' });
  });

  test('updateMasterAccess: only required params', async () => {
    const responsePromise = client.video.assets.updateMasterAccess('ASSET_ID', {
      master_access: 'temporary',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateMasterAccess: required and optional params', async () => {
    const response = await client.video.assets.updateMasterAccess('ASSET_ID', { master_access: 'temporary' });
  });

  test('updateMP4Support: only required params', async () => {
    const responsePromise = client.video.assets.updateMP4Support('ASSET_ID', { mp4_support: 'capped-1080p' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateMP4Support: required and optional params', async () => {
    const response = await client.video.assets.updateMP4Support('ASSET_ID', { mp4_support: 'capped-1080p' });
  });
});
