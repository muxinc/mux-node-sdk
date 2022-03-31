const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs');

const TEST_VIDEO =
  'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

/** @test {Assets} */
describe('Integration::Assets', () => {
  const muxClient = new Mux();
  const { Video } = muxClient;

  /** @test {Assets.create} */
  describe('Assets.create', () => {
    /** @test {Assets.create} */
    it('creates an asset when given an input', async () => {
      const { nockDone } = await nockBack('Assets/create.json');
      const asset = await Video.Assets.create({ input: TEST_VIDEO });
      expect(asset.status).to.equal('preparing');
      expect(asset.id).to.exist;
      await Video.Assets.del(asset.id);
      nockDone();
    });
  });

  /** @test {Assets.del} */
  describe('Assets.del', () => {
    /** @test {Assets.del} */
    it('deletes an asset', async () => {
      const { nockDone } = await nockBack('Assets/createAndDelete.json');
      const asset = await Video.Assets.create({ input: TEST_VIDEO });
      await Video.Assets.del(asset.id);
      nockDone();
    });

    /** @test {Assets.del} */
    it('fails to delete an asset when not given an incorrect assetId', async () => {
      const { nockDone } = await nockBack('Assets/deleteFail.json');
      await Video.Assets.del('somefakeid').catch((err) => expect(err).to.exist);
      nockDone();
    });
  });

  /** @test {Assets.get} */
  describe('Assets.get', () => {
    /** @test {Assets.get} */
    it('gets an asset', async () => {
      const { nockDone } = await nockBack('Assets/get.json');
      const testAsset = await Video.Assets.create({ input: TEST_VIDEO });
      const asset = await Video.Assets.get(testAsset.id);
      expect(asset.id).to.equal(testAsset.id);
      await Video.Assets.del(testAsset.id);
      nockDone();
    });

    /** @test {Assets.get} */
    it('fails to get an asset when not given an incorrect assetId', async () => {
      const { nockDone } = await nockBack('Assets/getFail.json');
      await Video.Assets.get('somefakeid').catch((err) => expect(err).to.exist);
      nockDone();
    });
  });

  /** @test {Assets.inputInfo} */
  describe('Assets.inputInfo', () => {
    /** @test {Assets.inputInfo} */
    // Don't use mochaAsync here because we want to handle the catch ourselves
    it('gets input-info for an asset', async () => {
      const { nockDone } = await nockBack('Assets/inputInfo.json');
      const testAsset = await Video.Assets.create({ input: TEST_VIDEO });
      try {
        const info = await Video.Assets.inputInfo(testAsset.id);
        expect(info).to.be.an('array');
      } catch (err) {
        expect(err.messages).to.eql(['Asset is still preparing']);
      }
      await Video.Assets.del(testAsset.id);
      nockDone();
    });

    /** @test {Assets.inputInfo} */
    it('fails to get an asset when not given an incorrect assetId', async () => {
      const { nockDone } = await nockBack('Assets/inputInfoFail.json');
      await Video.Assets.inputInfo('somefakeid').catch(
        (err) => expect(err).to.exist
      );
      nockDone();
    });
  });

  /** @test {Assets.list} */
  describe('Assets.list', () => {
    /** @test {Assets.list} */
    it('lists all assets for an environment', async () => {
      const { nockDone } = await nockBack('Assets/list.json');
      const assets = await Video.Assets.list();
      expect(assets).to.be.an('array');
      nockDone();
    });

    it('lists 5 assets for an environment', async () => {
      const { nockDone } = await nockBack('Assets/listLimit.json');
      const assets = await Video.Assets.list({ limit: 5 });
      expect(assets).to.be.an('array');
      nockDone();
    });
  });

  /** @test {Assets.createPlaybackId} */
  describe('Assets.createPlaybackId', () => {
    /** @test {PlaybackIds.create} */
    it('creates playbackIds for an asset', async () => {
      const { nockDone } = await nockBack('Assets/createPlaybackId.json');
      const testAsset = await Video.Assets.create({ input: TEST_VIDEO });
      const playbackId = await Video.Assets.createPlaybackId(testAsset.id, {
        policy: 'public',
      });
      expect(playbackId.policy).to.equal('public');
      expect(playbackId.id).to.exist;
      await Video.Assets.del(testAsset.id);
      nockDone();
    });

    /** @test {PlaybackIds.create} */
    it('throws an error if an Asset ID is not given', async () => {
      const { nockDone } = await nockBack('Assets/createPlaybackIdFail1.json');
      await Video.Assets.createPlaybackId().catch((err) => {
        expect(err).to.exist;
        expect(err.message).to.equal('An asset ID is required');
        nockDone();
      });
    });

    /** @test {PlaybackIds.create} */
    it('throws an error if params are not given', async () => {
      const { nockDone } = await nockBack('Assets/createPlaybackIdFail2.json');
      const testAsset = await Video.Assets.create({ input: TEST_VIDEO });
      await Video.Assets.createPlaybackId(testAsset.id).catch(async (err) => {
        expect(err).to.exist;
        expect(err.message).to.equal('Playback ID params are required');
        await Video.Assets.del(testAsset.id);
        nockDone();
      });
    });
  });

  /** @test {Assets.playbackId} */
  describe('Assets.playbackId', () => {
    /** @test {PlaybackIds.get} */
    it('gets playbackIds for an asset', async () => {
      const { nockDone } = await nockBack('Assets/getPlaybackId.json');
      const testAsset = await Video.Assets.create({ input: TEST_VIDEO });
      const { id } = await Video.Assets.createPlaybackId(testAsset.id, {
        policy: 'public',
      });
      const playbackId = await Video.Assets.playbackId(testAsset.id, id);
      expect(playbackId.id).to.equal(id);
      expect(playbackId.policy).to.equal('public');
      await Video.Assets.del(testAsset.id);
      nockDone();
    });
  });

  /** @test {Assets.deletePlaybackId} */
  describe('Assets.deletePlaybackId', () => {
    /** @test {Assets.deletePlaybackId} */
    it('deletes playbackIds for an asset', async () => {
      // Assets do not get 'playback_ids' until they are 'ready'
      // In order to write this integration test we would have to
      // wait for the asset to be 'ready'
    });

    /** @test {Assets.deletePlaybackId} */
    it('fails to delete playbackIds for an asset when not given a playback ID', async () => {
      const { nockDone } = await nockBack('Assets/deletePlaybackIdFail.json');
      const testAsset = await Video.Assets.create({ input: TEST_VIDEO });
      await Video.Assets.deletePlaybackId(testAsset.id).catch(
        (err) => expect(err).to.exist
      );
      await Video.Assets.del(testAsset.id);
      nockDone();
    });
  });

  /** @test {Assets.updateMp4Support} */
  describe('Assets.updateMp4Support', () => {
    /** @test {Assets.updateMp4Support} */
    it('updates the mp4 support for an asset', async () => {
      const { nockDone } = await nockBack('Assets/updateMp4Support.json');
      const testAsset = await Video.Assets.create({ input: TEST_VIDEO });
      try {
        await Video.Assets.updateMp4Support(testAsset.id, {
          mp4_support: 'standard',
        });
        const { mp4_support: updatedMp4Support } = await Video.Assets.get(
          testAsset.id
        );
        expect(updatedMp4Support).to.equal('standard');
      } catch (err) {
        expect(err.messages && err.messages[0]).to.equal('Asset is not ready');
      }
      await Video.Assets.del(testAsset.id);
      nockDone();
    });
  });

  /** @test {Assets.updateMasterAccess} */
  describe('Assets.updateMasterAccess', () => {
    /** @test {Assets.updateMasterAccess} */
    it('updates the master access for an asset', async () => {
      const { nockDone } = await nockBack('Assets/updateMasterAccess.json');
      const testAsset = await Video.Assets.create({ input: TEST_VIDEO });
      try {
        await Video.Assets.updateMasterAccess(testAsset.id, {
          master_access: 'temporary',
        });
        const { master_access: updatedMasterAccess } = await Video.Assets.get(
          testAsset.id
        );
        expect(updatedMasterAccess).to.equal('temporary');
      } catch (err) {
        expect(err.messages && err.messages[0]).to.equal('Asset is not ready');
      }
      await Video.Assets.del(testAsset.id);
      nockDone();
    });
  });
});
