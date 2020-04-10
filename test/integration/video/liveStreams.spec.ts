import { expect } from 'chai';
import * as Mux from '../../../src/mux';

/** @test {LiveStreams} */
describe('Integration::LiveStreams', () => {
  const muxClient = new Mux();
  const { Video } = muxClient;
  let testLiveStream;
  let testSimulcastTarget;
  const createdLiveStreams = [];

  before(async () => {
    testLiveStream = await Video.LiveStreams.create();
    testSimulcastTarget = await Video.LiveStreams.createSimulcastTarget(
      testLiveStream.id,
      { url: 'rtmp://live.example.com/app', stream_key: 'difvbfgi' }
    );
    createdLiveStreams.push(testLiveStream);
  });

  after(() =>
    createdLiveStreams.forEach(stream => Video.LiveStreams.del(stream.id))
  );

  /** @test {LiveStreams.create} */
  describe('LiveStreams.create', () => {
    /** @test {LiveStreams.create} */
    it('creates a live stream with defaults', async () => {
      const stream = await Video.LiveStreams.create();
      createdLiveStreams.push(stream);
      expect(stream.stream_key).to.exist;
      expect(stream.status).to.equal('idle');
      expect(stream.reconnect_window).to.equal(60);
    });

    it('creates a live stream with given parameters', async () => {
      const stream = await Video.LiveStreams.create({
        playback_policy: 'signed',
        new_asset_settings: {
          playback_policy: 'signed',
        },
      });

      createdLiveStreams.push(stream);
      expect(stream.playback_ids[0].policy).to.equal('signed');
      expect(stream.new_asset_settings).to.eql({
        playback_policies: ['signed'],
      });
    });
  });

  /** @test {LiveStreams.del} */
  describe('LiveStreams.del', () => {
    /** @test {LiveStreams.del} */
    it('deletes a live stream', async () => {
      const stream = await Video.LiveStreams.create();
      await Video.LiveStreams.del(stream.id);
    });

    /** @test {LiveStreams.del} */
    it('fails to delete a live stream when not given an incorrect live stream id', () =>
      Video.LiveStreams.del('somefakeid').catch(err => expect(err).to.exist));
  });

  /** @test {LiveStreams.remove} */
  describe('LiveStreams.remove [deprecated]', () => {
    /** @test {LiveStreams.remove} */
    it('deletes a live stream', async () => {
      const stream = await Video.LiveStreams.create();
      await Video.LiveStreams.remove(stream.id);
    });
  });

  /** @test {LiveStreams.get} */
  describe('LiveStreams.get', () => {
    /** @test {LiveStreams.get} */
    it('gets a live stream', async () => {
      const stream = await Video.LiveStreams.get(testLiveStream.id);
      expect(stream.status).to.equal('idle');
    });

    /** @test {LiveStreams.get} */
    it('fails to get a live stream when not given an incorrect live stream id', () =>
      Video.LiveStreams.get('somefakeid').catch(err => expect(err).to.exist));
  });

  /** @test {LiveStreams.signalComplete} */
  describe('LiveStreams.signalComplete', () => {
    /** @test {LiveStreams.signalComplete} */
    it('signals a live stream is complete', done => {
      // Just returns a 204
      Video.LiveStreams.signalComplete(testLiveStream.id).then(() => done());
    });

    /** @test {LiveStreams.signalComplete} */
    it('fails to signal a live stream is complete when given an incorrect live stream id', () =>
      Video.LiveStreams.signalComplete('somefakeid').catch(
        err => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.list} */
  describe('LiveStreams.list', () => {
    /** @test {LiveStreams.list} */
    it('lists all live streams for an environment', async () => {
      const streams = await Video.LiveStreams.list();
      expect(streams).to.be.an('array');
    });

    it('lists 5 live streams for an environment', async () => {
      const streams = await Video.LiveStreams.list({ limit: 5 });
      expect(streams.length).to.be.at.most(5);
    });
  });

  /** @test {LiveStreams.resetStreamKey} */
  describe('LiveStreams.resetStreamKey', () => {
    /** @test {LiveStreams.resetStreamKey} */
    it('resets a stream key', async () => {
      const stream = await Video.LiveStreams.resetStreamKey(testLiveStream.id);
      expect(stream.id).to.equal(testLiveStream.id);
      expect(stream.stream_key).to.not.equal(testLiveStream.stream_key);
    });

    /** @test {LiveStreams.resetStreamKey} */
    it('fails to reset a stream key if given an incorrect live stream id', () =>
      Video.LiveStreams.resetStreamKey('somefakeid').catch(
        err => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.createPlaybackId} */
  describe('LiveStreams.createPlaybackId', () => {
    /** @test {LiveStreams.createPlaybackId} */
    it('creates a playback id for a live stream', async () => {
      const playbackId = await Video.LiveStreams.createPlaybackId(
        testLiveStream.id,
        { policy: 'public' }
      );
      expect(playbackId.policy).to.equal('public');
      expect(playbackId.id).to.exist;
    });

    /** @test {LiveStreams.createPlaybackId} */
    it('fails to create a playback id if given an incorrect live stream id', () =>
      Video.LiveStreams.createPlaybackId('somefakeid', {
        policy: 'public',
      }).catch(err => expect(err).to.exist));

    /** @test {LiveStreams.createPlaybackId} */
    it('fails to create a playback id if not given a playback policy', () =>
      Video.LiveStreams.createPlaybackId('somefakeid', undefined as any).catch(
        err => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.deletePlaybackId} */
  describe('LiveStreams.deletePlaybackId', () => {
    /** @test {LiveStreams.deletePlaybackId} */
    it('deletes playbackIds for a live stream', async () => {
      const playbackId = await Video.LiveStreams.createPlaybackId(
        testLiveStream.id,
        { policy: 'public' }
      );
      Video.LiveStreams.deletePlaybackId(testLiveStream.id, playbackId.id);
      const { playback_ids: updatedPlaybackIds } = await Video.LiveStreams.get(
        testLiveStream.id
      );
      expect(updatedPlaybackIds).to.not.include(playbackId);
    });

    /** @test {PlaybackIds.deletePlaybackId} */
    it('fails to get playbackIds for a live stream when not given a playback ID', () =>
      Video.LiveStreams.deletePlaybackId(testLiveStream.id, undefined as any).catch(
        err => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.createSimulcastTarget} */
  describe('LiveStreams.createSimulcastTarget', () => {
    /** @test {LiveStreams.createSimulcastTarget} */
    it('creates a simulcast target for a live stream', async () => {
      const simulcastTarget = await Video.LiveStreams.createSimulcastTarget(
        testLiveStream.id,
        { url: 'rtmp://live.example.com/app', stream_key: 'difvbfgi' }
      );
      expect(simulcastTarget.id).to.exist;
    });

    /** @test {LiveStreams.createSimulcastTarget} */
    it('fails to create a simulcast target if given an incorrect live stream id', () =>
      Video.LiveStreams.createSimulcastTarget('somefakeid', {
        url: 'rtmp://live.example.com/app',
        stream_key: 'difvbfgi',
      }).catch(err => expect(err).to.exist));

    /** @test {LiveStreams.createSimulcastTarget} */
    it('fails to create a playback id if not given params', () =>
      Video.LiveStreams.createSimulcastTarget('somefakeid', undefined as any).catch(
        err => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.getSimulcastTarget} */
  describe('LiveStreams.getSimulcastTarget', () => {
    /** @test {LiveStreams.getSimulcastTarget} */
    it('gets a simulcast target for a live stream', async () => {
      const simulcastTarget = await Video.LiveStreams.getSimulcastTarget(
        testLiveStream.id,
        testSimulcastTarget.id
      );
      expect(simulcastTarget.id).to.exist;
    });

    /** @test {LiveStreams.getSimulcastTarget} */
    it('fails to get a simulcast target if given an incorrect live stream id', () =>
      Video.LiveStreams.getSimulcastTarget('somefakeid', undefined as any).catch(
        err => expect(err).to.exist
      ));

    /** @test {LiveStreams.getSimulcastTarget} */
    it('fails to get a simulcast target given a fake simulcast target idj', () =>
      Video.LiveStreams.createSimulcastTarget(
        'somefakeid',
        'someotherfakeid' as any
      ).catch(err => expect(err).to.exist));
  });

  /** @test {LiveStreams.deleteSimulcastTarget} */
  describe('LiveStreams.deleteSimulcastTarget', () => {
    /** @test {LiveStreams.deleteSimulcastTarget} */
    it('deletes the simulcast target for a live stream', async () => {
      const simulcastTarget = await Video.LiveStreams.createSimulcastTarget(
        testLiveStream.id,
        { url: 'rtmp://live.example.com/app', stream_key: 'difvbfgi' }
      );
      await Video.LiveStreams.deleteSimulcastTarget(
        testLiveStream.id,
        simulcastTarget.id
      );
      const {
        simulcast_targets: updatedSimulcastTargets,
      } = await Video.LiveStreams.get(testLiveStream.id);
      const simulcastTargetIds = updatedSimulcastTargets.map(
        target => target.id
      );
      expect(simulcastTargetIds).to.not.include(simulcastTarget.id);
    });

    /** @test {PlaybackIds.deletePlaybackId} */
    it('fails to get playbackIds for a live stream when not given a playback ID', () =>
      Video.LiveStreams.deletePlaybackId(testLiveStream.id, undefined as any).catch(
        err => expect(err).to.exist
      ));
  });
});
