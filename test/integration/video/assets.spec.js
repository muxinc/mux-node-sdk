require('dotenv').config();
const { expect } = require('chai');
const Mux = require('../../../src/mux');

const TEST_VIDEO = 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

/** @test {Assets} */
describe('Integration::Assets', () => {
  const muxClient = new Mux(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);
  const { Video } = muxClient;
  let testAsset;
  const createdAssets = []; // These are assets we'll clean up when it's all done.


  before(async () => {
    testAsset = await Video.assets.create({ input: TEST_VIDEO });
    createdAssets.push(testAsset);
  });

  after(() => createdAssets.forEach(asset => Video.assets.remove(asset.id)));

  /** @test {Assets.create} */
  describe('Assets.create', () => {
    /** @test {Assets.create} */
    it('creates an asset when given an input', async () => {
      const asset = await Video.assets.create({ input: TEST_VIDEO });
      createdAssets.push(asset);
      expect(asset.status).to.equal('preparing');
      expect(asset.id).to.exist;
    });
  });

  /** @test {Assets.remove} */
  describe('Assets.remove', () => {
    /** @test {Assets.remove} */
    it('deletes an asset', async () => {
      const asset = await Video.assets.create({ input: TEST_VIDEO });
      Video.assets.remove(asset.id);
    });

    /** @test {Assets.remove} */
    it('fails to delete an asset when not given an incorrect assetId', () => (
      Video.assets.remove('somefakeid').catch(err => expect(err).to.exist)
    ));
  });

  /** @test {Assets.get} */
  describe('Assets.get', () => {
    /** @test {Assets.get} */
    it('gets an asset', async () => {
      const asset = await Video.assets.get(testAsset.id);
      expect(asset.id).to.equal(testAsset.id);
    });

    /** @test {Assets.get} */
    it('fails to get an asset when not given an incorrect assetId', () => (
      Video.assets.get('somefakeid').catch(err => expect(err).to.exist)
    ));
  });

  /** @test {Assets.inputInfo} */
  describe('Assets.inputInfo', () => {
    /** @test {Assets.inputInfo} */
    // Don't use mochaAsync here because we want to handle the catch ourselves
    it('gets input-info for an asset', async () => {
      try {
        const info = await Video.assets.inputInfo(testAsset.id);
        expect(info).to.be.an('array');
      } catch (err) {
        expect(err.status).to.equal(412); // This will 412 if the asset is not ready yet
      }
    });

    /** @test {Assets.inputInfo} */
    it('fails to get an asset when not given an incorrect assetId', () => (
      Video.assets.inputInfo('somefakeid').catch(err => expect(err).to.exist)
    ));
  });

  /** @test {Assets.list} */
  describe('Assets.list', () => {
    /** @test {Assets.list} */
    it('lists all assets for an environment', async () => {
      const assets = await Video.assets.list();
      expect(assets).to.be.an('array');
    });

    it('lists 5 assets for an environment', async () => {
      const assets = await Video.assets.list({ limit: 5 });
      expect(assets).to.be.an('array');
    });
  });

  /** @test {Assets.createPlaybackId} */
  describe('Assets.createPlaybackId', () => {
    /** @test {PlaybackIds.create} */
    it('creates playbackIds for an asset', async () => {
      const playbackId = await Video.assets.createPlaybackId(testAsset.id, { policy: 'public' });
      expect(playbackId.policy).to.equal('public');
      expect(playbackId.id).to.exist;
    });

    /** @test {PlaybackIds.create} */
    it('throws an error if an Asset ID is not given', () => (
      Video.assets.createPlaybackId().catch((err) => {
        expect(err).to.exist;
        expect(err.message).to.equal('An asset ID is required');
      })
    ));

    /** @test {PlaybackIds.create} */
    it('throws an error if params are not given', () => (
      Video.assets.createPlaybackId(testAsset.id).catch((err) => {
        expect(err).to.exist;
        expect(err.message).to.equal('Playback ID params are required');
      })
    ));
  });

  /** @test {Assets.playbackId} */
  describe('Assets.playbackId', () => {
    /** @test {PlaybackIds.get} */
    it('gets playbackIds for an asset', async () => {
      const { id } = await Video.assets.createPlaybackId(testAsset.id, { policy: 'public' });
      const playbackId = await Video.assets.playbackId(testAsset.id, id);
      expect(playbackId.id).to.equal(id);
      expect(playbackId.policy).to.equal('public');
    });
  });

  /** @test {Assets.deletePlaybackId} */
  describe('Assets.deletePlaybackId', () => {
    /** @test {Assets.deletePlaybackId} */
    it('deletes playbackIds for an asset', async () => {
      const playbackId = await Video.assets.createPlaybackId(testAsset.id, { policy: 'public' });
      await Video.assets.deletePlaybackId(testAsset.id, playbackId.id);
      const { playback_ids: updatedPlaybackIds } = await Video.assets.get(testAsset.id);
      expect(updatedPlaybackIds).to.not.include(playbackId);
    });

    /** @test {Assets.deletePlaybackId} */
    it('fails to delete playbackIds for an asset when not given a playback ID', () => (
      Video.assets.deletePlaybackId(testAsset.id).catch(err => expect(err).to.exist)
    ));
  });
});
