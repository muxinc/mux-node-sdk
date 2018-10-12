require('dotenv').config();
const { expect } = require('chai');
const Mux = require('../../../src/mux');

/** @test {LiveStreams} */
describe('Integration::LiveStreams', () => {
  const muxClient = new Mux(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);
  const { Video } = muxClient;
  let testLiveStream;
  const createdLiveStreams = [];

  before(async () => {
    testLiveStream = await Video.liveStreams.create();
    createdLiveStreams.push(testLiveStream);
  });

  after(() => createdLiveStreams.forEach(stream => Video.liveStreams.remove(stream.id)));

  /** @test {LiveStreams.create} */
  describe('LiveStreams.create', () => {
    /** @test {LiveStreams.create} */
    it('creates a live stream with defaults', async () => {
      const stream = await Video.liveStreams.create();
      createdLiveStreams.push(stream);
      expect(stream.stream_key).to.exist;
      expect(stream.status).to.equal('idle');
      expect(stream.reconnect_window).to.equal(60);
    });

    it('creates a live stream with given parameters', async () => {
      const stream = await Video.liveStreams.create({
        playback_policy: 'signed',
        new_asset_settings: {
          playback_policy: 'signed',
        },
      });

      createdLiveStreams.push(stream);
      expect(stream.playback_ids[0].policy).to.equal('signed');
      expect(stream.new_asset_settings).to.eql({ playback_policies: ['signed'] });
    });
  });

  /** @test {LiveStreams.remove} */
  describe('LiveStreams.remove', () => {
    /** @test {LiveStreams.remove} */
    it('deletes a live stream', async () => {
      const stream = await Video.liveStreams.create();
      await Video.liveStreams.remove(stream.id);
    });

    /** @test {LiveStreams.remove} */
    it('fails to delete a live stream when not given an incorrect live stream id', () => (
      Video.liveStreams.remove('somefakeid').catch(err => expect(err).to.exist)
    ));
  });

  /** @test {LiveStreams.get} */
  describe('LiveStreams.get', () => {
    /** @test {LiveStreams.get} */
    it('gets a live stream', async () => {
      const stream = await Video.liveStreams.get(testLiveStream.id);
      expect(stream.status).to.equal('idle');
    });

    /** @test {LiveStreams.get} */
    it('fails to get a live stream when not given an incorrect live stream id', () => (
      Video.liveStreams.get('somefakeid').catch(err => expect(err).to.exist)
    ));
  });

  /** @test {LiveStreams.signalComplete} */
  describe('LiveStreams.signalComplete', () => {
    /** @test {LiveStreams.signalComplete} */
    it('signals a live stream is complete', (done) => {
      // Just returns a 204
      Video.liveStreams.signalComplete(testLiveStream.id).then(() => done());
    });

    /** @test {LiveStreams.signalComplete} */
    it('fails to signal a live stream is complete when given an incorrect live stream id', () => (
      Video.liveStreams.signalComplete('somefakeid').catch(err => expect(err).to.exist)
    ));
  });

  /** @test {LiveStreams.list} */
  describe('LiveStreams.list', () => {
    /** @test {LiveStreams.list} */
    it('lists all live streams for an environment', async () => {
      const streams = await Video.liveStreams.list();
      expect(streams).to.be.an('array');
    });

    it('lists 5 live streams for an environment', async () => {
      const streams = await Video.liveStreams.list({ limit: 5 });
      expect(streams.length).to.be.at.most(5);
    });
  });

  /** @test {LiveStreams.resetStreamKey} */
  describe('LiveStreams.resetStreamKey', () => {
    /** @test {LiveStreams.resetStreamKey} */
    it('resets a stream key', async () => {
      const stream = await Video.liveStreams.resetStreamKey(testLiveStream.id);
      expect(stream.id).to.equal(testLiveStream.id);
      expect(stream.stream_key).to.not.equal(testLiveStream.stream_key);
    });

    /** @test {LiveStreams.resetStreamKey} */
    it('fails to reset a stream key if given an incorrect live stream id', () => (
      Video.liveStreams.resetStreamKey('somefakeid').catch(err => expect(err).to.exist)
    ));
  });

  /** @test {LiveStreams.createPlaybackId} */
  describe('LiveStreams.createPlaybackId', () => {
    /** @test {LiveStreams.createPlaybackId} */
    it('creates a playback id for a live stream', async () => {
      const playbackId = await Video.liveStreams.createPlaybackId(testLiveStream.id, { policy: 'public' });
      expect(playbackId.policy).to.equal('public');
      expect(playbackId.id).to.exist;
    });

    /** @test {LiveStreams.createPlaybackId} */
    it('fails to create a playback id if given an incorrect live stream id', () => (
      Video.liveStreams.createPlaybackId('somefakeid', { policy: 'public' }).catch(err => expect(err).to.exist)
    ));

    /** @test {LiveStreams.createPlaybackId} */
    it('fails to create a playback id if not given a playback policy', () => (
      Video.liveStreams.createPlaybackId('somefakeid').catch(err => expect(err).to.exist)
    ));
  });

  /** @test {LiveStreams.deletePlaybackId} */
  describe('LiveStreams.deletePlaybackId', () => {
    /** @test {LiveStreams.deletePlaybackId} */
    it('deletes playbackIds for a live stream', async () => {
      const playbackId = await Video.liveStreams.createPlaybackId(testLiveStream.id, { policy: 'public' });
      Video.liveStreams.deletePlaybackId(testLiveStream.id, playbackId.id);
      const { playback_ids: updatedPlaybackIds } = await Video.liveStreams.get(testLiveStream.id);
      expect(updatedPlaybackIds).to.not.include(playbackId);
    });

    /** @test {PlaybackIds.deletePlaybackId} */
    it('fails to get playbackIds for a live stream when not given a playback ID', () => (
      Video.liveStreams.deletePlaybackId(testLiveStream.id).catch(err => expect(err).to.exist)
    ));
  });
});
