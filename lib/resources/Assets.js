/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

import { post, get, del } from '../utils/api';

const PATH = 'video/v1/assets';

/**
 * Mux class
 * @class
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

  create(assetId) {
    return post(`${PATH}/${assetId}`, this.requestOptions);
  }

  del(assetId) {
    return del(`${PATH}/${assetId}`, this.requestOptions);
  }

  get(assetId) {
    return get(`${PATH}/${assetId}`, this.requestOptions);
  }

  inputInfo(assetId) {
    return del(`${PATH}/${assetId}/input-info`, this.requestOptions);
  }

  list() {
    return get(PATH, this.requestOptions);
  }
}


module.exports = Assets;
