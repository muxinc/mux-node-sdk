const expect = require('chai').expect;
const should = require('chai').should();
require('dotenv').config();
const Assets = require('../../../lib/video/resources/Assets');

describe('Integration::Assets', () => {
  const asset = new Assets({
    apiKey: process.env.MUX_ACCESS_TOKEN,
    secret: process.env.MUX_SECRET,
  });

  describe('create.assets', () => {
    asset.create({ input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' })
      .then((res) => {
        const { data } = res;
        should.exist(data);
        expect(res.status).to.equal(201);
      })
      .catch((err) => {
        expect(err).to.be(undefined);
      });
  });
});
