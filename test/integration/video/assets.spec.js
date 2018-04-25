require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../lib/mux');

const TEST_VIDEO = 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

describe('Integration::Assets', () => {
  const muxVideo = new Mux.Video(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);
  let testAsset;

  before(() => (
    muxVideo.assets.create({ input: TEST_VIDEO })
      .then((res) => {
        const { data } = res;
        should.exist(data);
        expect(res.status).to.equal(201);
        testAsset = data;
      })
      .catch((err) => {
        expect(err).to.equal(undefined);
      })
  ));

  // after(() => (
  //   muxVideo.assets.deleteAsset(testAsset.data.id)
  //     .then((res) => {
  //       const { data } = res;
  //       should.exist(data);
  //       expect(res.status).to.equal(204);
  //     })
  //     .catch((err) => {
  //       expect(err).to.equal(undefined);
  //     })
  // ));

  describe('assets.create', () => {
    it('creates an asset when given an input', () => (
      muxVideo.assets.create({ input: TEST_VIDEO })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(201);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));

    // @TODO: this could potentially be a unit test with mocked api calls
    it('fails to create an asset when not given params', () => (
      muxVideo.assets.create()
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
          // @TODO: test to make sure api call was not made.
        })
    ));
  });

  describe.skip('assets.deleteAsset', () => {
    it('deletes an asset', () => (
      muxVideo.assets.create({ input: TEST_VIDEO })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          return muxVideo.assets.deleteAsset(data.data.id);
        })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(204);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));

    it('fails to delete an asset when not given an incorrect assetId', () => (
      muxVideo.assets.deleteAsset('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));

    // @TODO: this could potentially be a unit test with mocked api calls
    it('fails to delete an asset when not given an assetId', () => (
      muxVideo.assets.deleteAsset()
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));
  });

  describe('assets.get', () => {
    it('gets an asset', () => (
      muxVideo.assets.get(testAsset.data.id)
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));

    it('fails to get an asset when not given an incorrect assetId', () => (
      muxVideo.assets.get('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));

    // @TODO: this could potentially be a unit test with mocked api calls
    it('fails to get an asset when not given an assetId', () => (
      muxVideo.assets.get()
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));
  });

  describe('assets.inputInfo', () => {
    it('gets input-info for an asset', () => (
      muxVideo.assets.inputInfo(testAsset.data.id)
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err.response.status).to.equal(412); // This will 412 if the asset is not yet ready
        })
    ));

    it('fails to get an asset when not given an incorrect assetId', () => (
      muxVideo.assets.inputInfo('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));

    // @TODO: this could potentially be a unit test with mocked api calls
    it('fails to get an asset when not given an assetId', () => (
      muxVideo.assets.inputInfo()
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));
  });

  describe('assets.list', () => {
    it('lists all assets for an environment', () => (
      muxVideo.assets.list()
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });
});
