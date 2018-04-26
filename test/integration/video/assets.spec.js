require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../src/mux');

const TEST_VIDEO = 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

/** @test {Assets} */
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

  after(() => (
    muxVideo.assets.deleteAsset(testAsset.data.id)
      .then((res) => {
        const { data } = res;
        should.exist(data);
        expect(res.status).to.equal(204);
      })
      .catch((err) => {
        expect(err).to.equal(undefined);
      })
  ));

  /** @test {Assets.create} */
  describe('Assets.create', () => {
    /** @test {Assets.create} */
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
  });

  /** @test {Assets.deleteAsset} */
  describe('Assets.deleteAsset', () => {
    /** @test {Assets.deleteAsset} */
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

    /** @test {Assets.deleteAsset} */
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
  });

  /** @test {Assets.get} */
  describe('Assets.get', () => {
    /** @test {Assets.get} */
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

    /** @test {Assets.get} */
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
  });

  /** @test {Assets.inputInfo} */
  describe('Assets.inputInfo', () => {
    /** @test {Assets.inputInfo} */
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

    /** @test {Assets.inputInfo} */
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
  });

  /** @test {Assets.list} */
  describe('Assets.list', () => {
    /** @test {Assets.list} */
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
