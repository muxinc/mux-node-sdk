require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../src/mux');

const TEST_VIDEO = 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

/** @test {Assets} */
describe('Integration::Assets', () => {
  const muxClient = new Mux(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);
  const { Video } = muxClient;
  let testAsset;

  before(() => (
    Video.assets.create({ input: TEST_VIDEO })
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
    Video.assets.remove(testAsset.data.id)
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
      Video.assets.create({ input: TEST_VIDEO })
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

  /** @test {Assets.remove} */
  describe('Assets.remove', () => {
    /** @test {Assets.remove} */
    it('deletes an asset', () => (
      Video.assets.create({ input: TEST_VIDEO })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          return Video.assets.remove(data.data.id);
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

    /** @test {Assets.remove} */
    it('fails to delete an asset when not given an incorrect assetId', () => (
      Video.assets.remove('somefakeid')
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
      Video.assets.get(testAsset.data.id)
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
      Video.assets.get('somefakeid')
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
      Video.assets.inputInfo(testAsset.data.id)
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
      Video.assets.inputInfo('somefakeid')
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
      Video.assets.list()
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));

    it('lists 5 assets for an environment', () => (
      Video.assets.list({limit: 5})
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(data.length === 5);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });
});
