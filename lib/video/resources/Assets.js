/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const { post, get, del } = require('../../utils/api');

const PATH = '/video/v1/assets';
const buildBasePath = assetId => `${PATH}/${assetId}`;

/**
 *
 */
class Assets {
  constructor(config) {
    if (config.apiKey === undefined) {
      throw new Error('API key must be provided.');
    }

    if (config.secret === undefined) {
      throw new Error('API secret key must be provided');
    }

    this.requestOptions = {
      auth: {
        username: config.apiKey,
        password: config.secret,
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
    return post(PATH, params, this.requestOptions);
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
    return del(buildBasePath(assetId), this.requestOptions);
  }

  get(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get an asset'));
    }
    return get(buildBasePath(assetId), this.requestOptions);
  }

  inputInfo(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get input-info'));
    }
    return get(`${buildBasePath(assetId)}/input-info`, this.requestOptions);
  }

  list() {
    return get(PATH, this.requestOptions);
  }
}


module.exports = Assets;
