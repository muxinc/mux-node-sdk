const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs');

/** @test {LiveStreams} */
describe('Integration::LiveStreams', () => {
  const muxClient = new Mux();
  const { Video } = muxClient;

  /** @test {LiveStreams.create} */
  describe('LiveStreams.create', () => {
    /** @test {LiveStreams.create} */
    it('creates a live stream with defaults', async () => {
      const { nockDone } = await nockBack('LiveStreams/create.json');
      const stream = await Video.LiveStreams.create();
      expect(stream.stream_key).to.exist;
      expect(stream.status).to.equal('idle');
      expect(stream.reconnect_window).to.equal(60);
      await Video.LiveStreams.del(stream.id);
      nockDone();
    });

    it('creates a live stream with given parameters', async () => {
      const { nockDone } = await nockBack('LiveStreams/createWithParams.json');
      const stream = await Video.LiveStreams.create({
        playback_policy: 'signed',
        new_asset_settings: {
          playback_policy: 'signed',
        },
      });

      expect(stream.playback_ids[0].policy).to.equal('signed');
      expect(stream.new_asset_settings).to.eql({
        playback_policies: ['signed'],
      });
      await Video.LiveStreams.del(stream.id);
      nockDone();
    });

    it('creates a low latency live stream', async () => {
      const { nockDone } = await nockBack('LiveStreams/createLowLatency.json');
      const stream = await Video.LiveStreams.create({
        latency_mode: 'low',
      });

      expect(stream.latency_mode).to.equal('low');
      await Video.LiveStreams.del(stream.id);
      nockDone();
    });

    it('creates a reduced latency live stream', async () => {
      const { nockDone } = await nockBack(
        'LiveStreams/createReducedLatency.json'
      );
      const stream = await Video.LiveStreams.create({
        latency_mode: 'reduced',
      });

      expect(stream.latency_mode).to.equal('reduced');
      await Video.LiveStreams.del(stream.id);
      nockDone();
    });

    it('creates a standard latency live stream', async () => {
      const { nockDone } = await nockBack(
        'LiveStreams/createStandardLatency.json'
      );
      const stream = await Video.LiveStreams.create({
        latency_mode: 'standard',
      });

      expect(stream.latency_mode).to.equal('standard');
      await Video.LiveStreams.del(stream.id);
      nockDone();
    });
  });

  /** @test {LiveStreams.del} */
  describe('LiveStreams.del', () => {
    /** @test {LiveStreams.del} */
    it('deletes a live stream', async () => {
      const { nockDone } = await nockBack('LiveStreams/del.json');
      const stream = await Video.LiveStreams.create();
      await Video.LiveStreams.del(stream.id);
      nockDone();
    });

    /** @test {LiveStreams.del} */
    it('fails to delete a live stream when not given an incorrect live stream id', () =>
      Video.LiveStreams.del('somefakeid').catch((err) => expect(err).to.exist));
  });

  /** @test {LiveStreams.get} */
  describe('LiveStreams.get', () => {
    /** @test {LiveStreams.get} */
    it('gets a live stream', async () => {
      const { nockDone } = await nockBack('LiveStreams/get.json');
      const testLiveStream = await Video.LiveStreams.create();
      const stream = await Video.LiveStreams.get(testLiveStream.id);
      expect(stream.status).to.equal('idle');
      nockDone();
    });

    /** @test {LiveStreams.get} */
    it('fails to get a live stream when not given an incorrect live stream id', () =>
      Video.LiveStreams.get('somefakeid').catch((err) => expect(err).to.exist));
  });

  /** @test {LiveStreams.signalComplete} */
  describe('LiveStreams.signalComplete', () => {
    /** @test {LiveStreams.signalComplete} */
    it('signals a live stream is complete', async () => {
      const { nockDone } = await nockBack('LiveStreams/signalComplete.json');
      const testLiveStream = await Video.LiveStreams.create();
      // Just returns a 204
      await Video.LiveStreams.signalComplete(testLiveStream.id);
      await Video.LiveStreams.del(testLiveStream.id);
      nockDone();
    });

    /** @test {LiveStreams.signalComplete} */
    it('fails to signal a live stream is complete when given an incorrect live stream id', async () => {
      const { nockDone } = await nockBack(
        'LiveStreams/signalCompleteFail.json'
      );
      await Video.LiveStreams.signalComplete('somefakeid').catch(
        (err) => expect(err).to.exist
      );
      nockDone();
    });
  });

  /** @test {LiveStreams.list} */
  describe('LiveStreams.list', () => {
    /** @test {LiveStreams.list} */
    it('lists all live streams for an environment', async () => {
      const { nockDone } = await nockBack('LiveStreams/list.json');
      const streams = await Video.LiveStreams.list();
      expect(streams).to.be.an('array');
      nockDone();
    });

    it('lists 5 live streams for an environment', async () => {
      const { nockDone } = await nockBack('LiveStreams/listWithLimit.json');
      const streams = await Video.LiveStreams.list({ limit: 5 });
      expect(streams.length).to.be.at.most(5);
      nockDone();
    });
  });

  /** @test {LiveStreams.resetStreamKey} */
  describe('LiveStreams.resetStreamKey', () => {
    /** @test {LiveStreams.resetStreamKey} */
    it('resets a stream key', async () => {
      const { nockDone } = await nockBack('LiveStreams/resetStreamKey.json');
      const testLiveStream = await Video.LiveStreams.create();
      const stream = await Video.LiveStreams.resetStreamKey(testLiveStream.id);
      expect(stream.id).to.equal(testLiveStream.id);
      expect(stream.stream_key).to.not.equal(testLiveStream.stream_key);
      await Video.LiveStreams.del(testLiveStream.id);
      nockDone();
    });

    /** @test {LiveStreams.resetStreamKey} */
    it('fails to reset a stream key if given an incorrect live stream id', () =>
      Video.LiveStreams.resetStreamKey('somefakeid').catch(
        (err) => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.createPlaybackId} */
  describe('LiveStreams.createPlaybackId', () => {
    /** @test {LiveStreams.createPlaybackId} */
    it('creates a playback id for a live stream', async () => {
      const { nockDone } = await nockBack('LiveStreams/createPlaybackId.json');
      const testLiveStream = await Video.LiveStreams.create();
      const playbackId = await Video.LiveStreams.createPlaybackId(
        testLiveStream.id,
        { policy: 'public' }
      );
      expect(playbackId.policy).to.equal('public');
      await Video.LiveStreams.del(testLiveStream.id);
      expect(playbackId.id).to.exist;
      nockDone();
    });

    /** @test {LiveStreams.createPlaybackId} */
    it('fails to create a playback id if given an incorrect live stream id', async () => {
      const { nockDone } = await nockBack(
        'LiveStreams/createPlaybackIdFail.json'
      );
      await Video.LiveStreams.createPlaybackId('somefakeid', {
        policy: 'public',
      }).catch((err) => expect(err).to.exist);
      nockDone();
    });

    /** @test {LiveStreams.createPlaybackId} */
    it('fails to create a playback id if not given a playback policy', () =>
      Video.LiveStreams.createPlaybackId('somefakeid').catch(
        (err) => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.deletePlaybackId} */
  describe('LiveStreams.deletePlaybackId', () => {
    /** @test {LiveStreams.deletePlaybackId} */
    it('deletes playbackIds for a live stream', async () => {
      const { nockDone } = await nockBack('LiveStreams/deletePlaybackId.json');
      const testLiveStream = await Video.LiveStreams.create({
        playback_policy: 'public',
      });
      const playbackId = await Video.LiveStreams.createPlaybackId(
        testLiveStream.id,
        { policy: 'public' }
      );
      await Video.LiveStreams.deletePlaybackId(
        testLiveStream.id,
        playbackId.id
      );
      const { playback_ids: updatedPlaybackIds } = await Video.LiveStreams.get(
        testLiveStream.id
      );
      expect(updatedPlaybackIds).to.not.include(playbackId);
      await Video.LiveStreams.del(testLiveStream.id);
      nockDone();
    });

    /** @test {PlaybackIds.deletePlaybackId} */
    it('fails to get playbackIds for a live stream when not given a playback ID', () =>
      Video.LiveStreams.deletePlaybackId('playbackId1').catch(
        (err) => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.createSimulcastTarget} */
  describe('LiveStreams.createSimulcastTarget', () => {
    /** @test {LiveStreams.createSimulcastTarget} */
    it('creates a simulcast target for a live stream', async () => {
      const { nockDone } = await nockBack(
        'LiveStreams/createSimulcastTarget.json'
      );
      const testLiveStream = await Video.LiveStreams.create();
      const simulcastTarget = await Video.LiveStreams.createSimulcastTarget(
        testLiveStream.id,
        { url: 'rtmp://live.example.com/app', stream_key: 'difvbfgi' }
      );
      expect(simulcastTarget.id).to.exist;
      await Video.LiveStreams.del(testLiveStream.id);
      nockDone();
    });

    /** @test {LiveStreams.createSimulcastTarget} */
    it('fails to create a simulcast target if given an incorrect live stream id', () =>
      Video.LiveStreams.createSimulcastTarget('somefakeid', {
        url: 'rtmp://live.example.com/app',
        stream_key: 'difvbfgi',
      }).catch((err) => expect(err).to.exist));

    /** @test {LiveStreams.createSimulcastTarget} */
    it('fails to create a playback id if not given params', () =>
      Video.LiveStreams.createSimulcastTarget('somefakeid').catch(
        (err) => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.getSimulcastTarget} */
  describe('LiveStreams.getSimulcastTarget', () => {
    /** @test {LiveStreams.getSimulcastTarget} */
    it('gets a simulcast target for a live stream', async () => {
      const { nockDone } = await nockBack('LiveStreams/getSimulcastTarget');
      const testLiveStream = await Video.LiveStreams.create();
      const testSimulcastTarget = await Video.LiveStreams.createSimulcastTarget(
        testLiveStream.id,
        { url: 'rtmp://live.example.com/app', stream_key: 'difvbfgi' }
      );
      const simulcastTarget = await Video.LiveStreams.getSimulcastTarget(
        testLiveStream.id,
        testSimulcastTarget.id
      );
      expect(simulcastTarget.id).to.exist;
      await Video.LiveStreams.del(testLiveStream.id);
      nockDone();
    });

    /** @test {LiveStreams.getSimulcastTarget} */
    it('fails to get a simulcast target if given an incorrect live stream id', () =>
      Video.LiveStreams.getSimulcastTarget('somefakeid').catch(
        (err) => expect(err).to.exist
      ));

    /** @test {LiveStreams.getSimulcastTarget} */
    it('fails to get a simulcast target given a fake simulcast target idj', () =>
      Video.LiveStreams.createSimulcastTarget(
        'somefakeid',
        'someotherfakeid'
      ).catch((err) => expect(err).to.exist));
  });

  /** @test {LiveStreams.deleteSimulcastTarget} */
  describe('LiveStreams.deleteSimulcastTarget', () => {
    /** @test {LiveStreams.deleteSimulcastTarget} */
    it('deletes the simulcast target for a live stream', async () => {
      const { nockDone } = await nockBack('LiveStreams/deleteSimulcastTarget');
      const testLiveStream = await Video.LiveStreams.create({
        simulcast_targets: [
          { url: 'rtmp://live.example.com/app', stream_key: '12345' },
        ],
      });
      const simulcastTarget = await Video.LiveStreams.createSimulcastTarget(
        testLiveStream.id,
        { url: 'rtmp://live.example.com/app', stream_key: 'difvbfgi' }
      );
      await Video.LiveStreams.deleteSimulcastTarget(
        testLiveStream.id,
        simulcastTarget.id
      );
      await Video.LiveStreams.get(testLiveStream.id);
      const { simulcast_targets: updatedSimulcastTargets } =
        await Video.LiveStreams.get(testLiveStream.id);
      const simulcastTargetIds = updatedSimulcastTargets.map(
        (target) => target.id
      );
      expect(simulcastTargetIds).to.not.include(simulcastTarget.id);
      await Video.LiveStreams.del(testLiveStream.id);
      nockDone();
    });

    /** @test {PlaybackIds.deletePlaybackId} */
    it('fails to get playbackIds for a live stream when not given a playback ID', () =>
      Video.LiveStreams.deletePlaybackId('testLiveStreamId').catch(
        (err) => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.enable} */
  describe('LiveStreams.enable', () => {
    /** @test {LiveStreams.enable} */
    it('enables a live stream', async () => {
      const { nockDone } = await nockBack('LiveStreams/enable.json');
      const testLiveStream = await Video.LiveStreams.create();

      await Video.LiveStreams.enable(testLiveStream.id);
      nockDone();
    });

    /** @test {LiveStreams.enable} */
    it('fails to enable a live stream if given an incorrect live stream id', () =>
      Video.LiveStreams.enable('somefakeid').catch(
        (err) => expect(err).to.exist
      ));
  });

  /** @test {LiveStreams.disable} */
  describe('LiveStreams.disable', () => {
    /** @test {LiveStreams.disable} */
    it('disables a live stream', async () => {
      const { nockDone } = await nockBack('LiveStreams/disable.json');
      const testLiveStream = await Video.LiveStreams.create();

      await Video.LiveStreams.disable(testLiveStream.id);
      nockDone();
    });

    /** @test {LiveStreams.disable} */
    it('fails to disable a live stream if given an incorrect live stream id', () =>
      Video.LiveStreams.disable('somefakeid').catch(
        (err) => expect(err).to.exist
      ));
  });
});
