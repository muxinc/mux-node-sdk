// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mux from '@mux/mux-node';

const client = new Mux({
  tokenID: 'my token id',
  tokenSecret: 'my secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource playback', () => {
  test('animated: required and optional params', async () => {
    const response = await client.video.playback.animated('gif', {
      PLAYBACK_ID: 'PLAYBACK_ID',
      end: 0,
      fps: 0,
      height: 0,
      start: 0,
      TOKEN: 'TOKEN',
      width: 0,
    });
  });

  test('hls: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.video.playback.hls(
        'PLAYBACK_ID',
        {
          asset_end_time: 0,
          asset_start_time: 0,
          default_subtitles_lang: 'default_subtitles_lang',
          max_resolution: '270p',
          min_resolution: '270p',
          program_end_time: 0,
          program_start_time: 0,
          redundant_streams: true,
          rendition_order: 'desc',
          roku_trick_play: true,
          TOKEN: 'TOKEN',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('staticRendition: required and optional params', async () => {
    const response = await client.video.playback.staticRendition('capped-1080p.mp4', {
      PLAYBACK_ID: 'PLAYBACK_ID',
      TOKEN: 'TOKEN',
    });
  });

  test('storyboard: required and optional params', async () => {
    const response = await client.video.playback.storyboard('jpg', {
      PLAYBACK_ID: 'PLAYBACK_ID',
      TOKEN: 'TOKEN',
    });
  });

  // Prism routes incorrectly
  test.skip('storyboardMeta', async () => {
    const responsePromise = client.video.playback.storyboardMeta('PLAYBACK_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism routes incorrectly
  test.skip('storyboardMeta: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.video.playback.storyboardMeta(
        'PLAYBACK_ID',
        { TOKEN: 'TOKEN' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  // Prism routes incorrectly
  test.skip('storyboardVtt', async () => {
    const responsePromise = client.video.playback.storyboardVtt('PLAYBACK_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism routes incorrectly
  test.skip('storyboardVtt: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.video.playback.storyboardVtt(
        'PLAYBACK_ID',
        { TOKEN: 'TOKEN' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('thumbnail: required and optional params', async () => {
    const response = await client.video.playback.thumbnail('jpg', {
      PLAYBACK_ID: 'PLAYBACK_ID',
      fit_mode: 'preserve',
      flip_h: true,
      flip_v: true,
      height: 0,
      rotate: 90,
      time: 0,
      TOKEN: 'TOKEN',
      width: 0,
    });
  });

  test('track: only required params', async () => {
    const responsePromise = client.video.playback.track('TRACK_ID', { PLAYBACK_ID: 'PLAYBACK_ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('track: required and optional params', async () => {
    const response = await client.video.playback.track('TRACK_ID', {
      PLAYBACK_ID: 'PLAYBACK_ID',
      TOKEN: 'TOKEN',
    });
  });

  test('transcript: only required params', async () => {
    const responsePromise = client.video.playback.transcript('TRACK_ID', { PLAYBACK_ID: 'PLAYBACK_ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('transcript: required and optional params', async () => {
    const response = await client.video.playback.transcript('TRACK_ID', {
      PLAYBACK_ID: 'PLAYBACK_ID',
      TOKEN: 'TOKEN',
    });
  });
});
