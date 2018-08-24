/*!
 * Mux Live Streams
 * Copyright(c) 2018 Mux Inc.
 */

const api = require('../../utils/api');

/**
 * @private Base live stream path for the Mux API
 * */
const PATH = '/video/v1/live-streams';

/**
 * @private
 * Build the base live stream path for the Mux API
 * */
const buildBasePath = liveStreamId => `${PATH}/${liveStreamId}`;

/**
 * Live Streams Class - Provides access to the Mux Video Live Streams API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video } = muxClient;
 *
 * // Create a live stream
 * Video.liveStreams.create({ "playback_policy": "public", "new_asset_settings": { "playback_policy": "public" } });
 */
class LiveStreams {
  /**
   * @ignore
   * LiveStreams Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API Access Token secret
   * @constructor
   */
  constructor(accessToken, secret) {
    if (typeof accessToken === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    /**
     *  @ignore
     *  @type {Object} requestOptions - The HTTP request options for Mux Live Streams
     *  @property {string} requestOptions.auth.username - HTTP basic auth username (access token)
     *  @property {string} requestOptions.auth.password - HTTP basic auth password (secret)
     * */
    this.requestOptions = {
      auth: {
        username: accessToken,
        password: secret,
      },
    };
  }

  /**
   * Creates a Mux live stream with the specified JSON parameters
   * @param {Object} params - Live Stream JSON parameters (e.g playback_policy)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Create a live stream
   * Video.liveStreams.create({ "playback_policy": "public", "new_asset_settings": { "playback_policy": "public" } });
   *
   * @see https://docs.mux.com/v1-beta/reference#create-a-live-streams
   */
  create(params) {
    if (!params) {
      return Promise.reject(new Error('Params are required for creating a live stream'));
    }
    return api.post(PATH, params, this.requestOptions);
  }

  /**
   * Deletes a Mux Live Stream
   * @param {string} liveStreamId - The ID for the live stream intended for deletion
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Delete a mux live stream
   * Video.liveStreams.remove(liveStreamId);
   *
   * @see https://docs.mux.com/v1-beta/reference#delete-a-live-stream
   */
  remove(liveStreamId) {
    if (!liveStreamId) {
      return Promise.reject(new Error('A live stream ID is required to delete a live stream'));
    }
    return api.del(buildBasePath(liveStreamId), this.requestOptions);
  }

  /**
   * Get an Live Stream
   * @param {string} liveStreamId - The ID for the live stream
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Get a live stream
   * Video.liveStreams.get(liveStreamId);
   *
   * @see https://docs.mux.com/v1-beta/reference#retrieve-a-live-stream
   */
  get(liveStreamId) {
    if (!liveStreamId) {
      return Promise.reject(new Error('A live stream ID is required to get a live stream'));
    }
    return api.get(buildBasePath(liveStreamId), {}, this.requestOptions);
  }

  /**
   * List all live streams for a Mux Environment (tied to your access token)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // List all live streams for a Mux Environment
   * Video.liveStreams.list();
   *
   * @see https://docs.mux.com/v1-beta/reference#list-live-streams
   */
  list(queryParams) {
    return api.get(PATH, queryParams, this.requestOptions);
  }

  /**
   * Signal a live stream is finished
   * @param {string} liveStreamId - The ID for the liveStream
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Signal a live stream is finished
   * Video.liveStreams.signalComplete(liveStreamId);
   *
   * @see https://docs.mux.com/v1-beta/reference#signal-live-stream-complete
   */
  signalComplete(liveStreamId) {
    if (!liveStreamId) {
      return Promise.reject(new Error('A Live Stream ID is required to signal stream complete'));
    }
    return api.put(`${buildBasePath(liveStreamId)}/complete`, {}, this.requestOptions);
  }

  /**
   * Reset a stream key 
   * @param {string} liveStreamId - The ID for the liveStream
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Reset a live stream key if you want to immediately stop the current stream key from working and create a new stream key that can be used for future broadcasts.
   * Video.liveStreams.resetStreamKey(liveStreamId);
   *
   * @see https://docs.mux.com/v1-beta/reference#reset-a-stream-key
   */
  resetStreamKey(liveStreamId) {
    if (!liveStreamId) {
      return Promise.reject(new Error('A Live Stream ID is required to reset stream key'));
    }
    return api.post(`${buildBasePath(liveStreamId)}/reset-stream-key`, {}, this.requestOptions);
  }

  /**
   * Create a live stream playback id
   * @param {string} liveStreamId - The ID for the liveStream
   * @param {Object} params - Live Stream JSON parameters (e.g playback_policy)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Create a live stream playback ID
   * Video.liveStreams.createPlaybackId(liveStreamId, { "policy": "public" });
   *
   * @see https://docs.mux.com/v1-beta/reference#add-a-live-stream-playback-id
   */
  createPlaybackId(liveStreamId, params) {
    if (!liveStreamId) {
      return Promise.reject(new Error('A Live Stream ID is required to create playback id'));
    }
    return api.post(`${buildBasePath(liveStreamId)}/playback-ids`, params, this.requestOptions);
  }

  /**
   * Delete a live stream playback ID
   * @param {string} liveStreamId - The ID for the liveStream
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Delete a live stream playback ID
   * Video.liveStreams.deletePlaybackId(liveStreamId, { "policy": "public" });
   *
   * @see https://docs.mux.com/v1-beta/reference#delete-a-live-stream-playback-id
   */
  deletePlaybackId(liveStreamId, playbackId) {
    if (!liveStreamId) {
      return Promise.reject(new Error('A Live Stream ID is required to create playback id'));
    }
    return api.delete(`${buildBasePath(liveStreamId)}/playback-ids/${playbackId}`, this.requestOptions);
  }  
}

module.exports = LiveStreams;
