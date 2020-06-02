/*!
 * Mux Video Views
 * Copyright(c) 2018 Mux Inc.
 */
const Base = require('../../base');

/**
 * @private Base exports path for the Mux API
 * */
const PATH = '/data/v1/video-views';

/**
 * VideoViews Class - Provides access to the Mux Data Video Views API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Returns a list of video views for a property that occurred within the specified timeframe.
 * // Results are ordered by view_end, according to what you provide for order_direction.
 * Data.VideoViews.list({order_direction: 'asc'});
 */
class VideoViews extends Base {
  /**
   * Returns a list of video views for a property that occurred within the specified timeframe.
   * Results are ordered by view_end, according to what you provide for order_direction.
   *
   * @extends Base
   * @param {Object} queryParams - example { viewer_id: 'ABCD1234', timeframe: ['7:days'], filters: ['operating_system:windows'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Returns a list of video views for a property that occurred within the specified timeframe.
   * Data.VideoViews.list({ viewer_id: 'ABCD1234', timeframe: ['7:days'], order_direction: 'asc' });
   *
   * @see https://api-docs.mux.com/#video-view-get-1
   */
  list(params) {
    return this.http.get(PATH, { params });
  }

  /**
   * Returns the details for a single video view
   *
   * @param {string} videoViewId - The ID for the video view
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * //Returns the details for a single video view
   * Data.VideoViews.get('ABCD1234');
   *
   * @see https://api-docs.mux.com/#video-view-get-1
   */
  get(videoViewId) {
    if (!videoViewId) {
      throw new Error('A video view Id is required for video view details.');
    }
    return this.http.get(`${PATH}/${videoViewId}`);
  }
}

module.exports = VideoViews;
