const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs').default;

const TEST_VIDEO =
  'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

/** @test {PlaybackIds} */
describe('Integration::PlaybackIds', () => {
  const muxClient = new Mux();
  const { Video } = muxClient;

  /** @test {PlaybackIds.get} */
  describe('PlaybackIds.get', () => {
    /** @test {PlaybackIds.get} */
    it('gets an asset or live stream from a playback id', async () => {
      const { nockDone } = await nockBack('PlaybackIds/get.json');
      const testAsset = await Video.Assets.create({
        input: TEST_VIDEO,
        playback_policy: 'public',
      });
      const asset = await Video.PlaybackIds.get(testAsset.playback_ids[0].id);
      expect(asset.id).to.equal(testAsset.playback_ids[0].id);
      await Video.Assets.del(testAsset.id);
      nockDone();
    });

    /** @test {PlaybackIds.get} */
    it('fails to get a live stream or asset when not given an incorrect playback id', () =>
      Video.PlaybackIds.get('somefakeid').catch((err) => expect(err).to.exist));
  });
});
