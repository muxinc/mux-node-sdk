/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const api = require('../../utils/api');

const PATH = '/video/v1/assets';
const buildBasePath = assetId => `${PATH}/${assetId}`;

/**
 * Assets Class
 */
class Assets {
  /**
   *
   * @param apiKey
   * @param secret
   */
  constructor(apiKey, secret) {
    if (typeof apiKey === 'undefined') {
      throw new Error('API key must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    this.requestOptions = {
      auth: {
        username: apiKey,
        password: secret,
      },
    };
  }

  /**
   *
   * @param params
   * @returns {*}
   */
  create(params) {
    if (!params) {
      return Promise.reject(new Error('Params are required for creating an asset'));
    }
    return api.post(PATH, params, this.requestOptions);
  }

  /**
   *
   * @param assetId
   * @returns {*}
   */
  deleteAsset(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to delete an asset'));
    }
    return api.del(buildBasePath(assetId), this.requestOptions);
  }

  /**
   *
   * @param assetId
   * @returns {*}
   */
  get(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get an asset'));
    }
    return api.get(buildBasePath(assetId), this.requestOptions);
  }

  /**
   *
   * @param assetId
   * @returns {*}
   */
  inputInfo(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get input-info'));
    }
    return api.get(`${buildBasePath(assetId)}/input-info`, this.requestOptions);
  }

  /**
   *
   * @returns {*}
   */
  list() {
    return api.get(PATH, this.requestOptions);
  }
}

module.exports = Assets;
