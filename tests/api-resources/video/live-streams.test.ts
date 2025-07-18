// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mux from '@mux/mux-node';

const client = new Mux({
  tokenID: 'my token id',
  tokenSecret: 'my secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource liveStreams', () => {
  test('create', async () => {
    const responsePromise = client.video.liveStreams.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve', async () => {
    const responsePromise = client.video.liveStreams.retrieve('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.video.liveStreams.update('LIVE_STREAM_ID', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.video.liveStreams.list();
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
      client.video.liveStreams.list(
        { limit: 0, page: 0, status: 'active', stream_key: 'stream_key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.video.liveStreams.delete('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete', async () => {
    const responsePromise = client.video.liveStreams.complete('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createPlaybackID', async () => {
    const responsePromise = client.video.liveStreams.createPlaybackID('LIVE_STREAM_ID', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createSimulcastTarget: only required params', async () => {
    const responsePromise = client.video.liveStreams.createSimulcastTarget('LIVE_STREAM_ID', {
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
    const response = await client.video.liveStreams.createSimulcastTarget('LIVE_STREAM_ID', {
      url: 'rtmp://live.example.com/app',
      passthrough: 'Example',
      stream_key: 'abcdefgh',
    });
  });

  test('deleteNewAssetSettingsStaticRenditions', async () => {
    const responsePromise = client.video.liveStreams.deleteNewAssetSettingsStaticRenditions('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deletePlaybackID: only required params', async () => {
    const responsePromise = client.video.liveStreams.deletePlaybackID('PLAYBACK_ID', {
      LIVE_STREAM_ID: 'LIVE_STREAM_ID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deletePlaybackID: required and optional params', async () => {
    const response = await client.video.liveStreams.deletePlaybackID('PLAYBACK_ID', {
      LIVE_STREAM_ID: 'LIVE_STREAM_ID',
    });
  });

  test('deleteSimulcastTarget: only required params', async () => {
    const responsePromise = client.video.liveStreams.deleteSimulcastTarget('SIMULCAST_TARGET_ID', {
      LIVE_STREAM_ID: 'LIVE_STREAM_ID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteSimulcastTarget: required and optional params', async () => {
    const response = await client.video.liveStreams.deleteSimulcastTarget('SIMULCAST_TARGET_ID', {
      LIVE_STREAM_ID: 'LIVE_STREAM_ID',
    });
  });

  test('disable', async () => {
    const responsePromise = client.video.liveStreams.disable('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enable', async () => {
    const responsePromise = client.video.liveStreams.enable('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('resetStreamKey', async () => {
    const responsePromise = client.video.liveStreams.resetStreamKey('LIVE_STREAM_ID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrievePlaybackID: only required params', async () => {
    const responsePromise = client.video.liveStreams.retrievePlaybackID('PLAYBACK_ID', {
      LIVE_STREAM_ID: 'LIVE_STREAM_ID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrievePlaybackID: required and optional params', async () => {
    const response = await client.video.liveStreams.retrievePlaybackID('PLAYBACK_ID', {
      LIVE_STREAM_ID: 'LIVE_STREAM_ID',
    });
  });

  test('retrieveSimulcastTarget: only required params', async () => {
    const responsePromise = client.video.liveStreams.retrieveSimulcastTarget('SIMULCAST_TARGET_ID', {
      LIVE_STREAM_ID: 'LIVE_STREAM_ID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveSimulcastTarget: required and optional params', async () => {
    const response = await client.video.liveStreams.retrieveSimulcastTarget('SIMULCAST_TARGET_ID', {
      LIVE_STREAM_ID: 'LIVE_STREAM_ID',
    });
  });

  test('updateEmbeddedSubtitles', async () => {
    const responsePromise = client.video.liveStreams.updateEmbeddedSubtitles('LIVE_STREAM_ID', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateGeneratedSubtitles', async () => {
    const responsePromise = client.video.liveStreams.updateGeneratedSubtitles('LIVE_STREAM_ID', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateNewAssetSettingsStaticRenditions: only required params', async () => {
    const responsePromise = client.video.liveStreams.updateNewAssetSettingsStaticRenditions(
      'LIVE_STREAM_ID',
      { static_renditions: [{ resolution: 'audio-only' }, { resolution: 'highest' }] },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateNewAssetSettingsStaticRenditions: required and optional params', async () => {
    const response = await client.video.liveStreams.updateNewAssetSettingsStaticRenditions('LIVE_STREAM_ID', {
      static_renditions: [
        { resolution: 'audio-only', passthrough: 'passthrough' },
        { resolution: 'highest', passthrough: 'passthrough' },
      ],
    });
  });
});
