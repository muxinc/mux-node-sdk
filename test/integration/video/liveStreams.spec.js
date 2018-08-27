require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../src/mux');

const TEST_VIDEO = 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

/** @test {LiveStreams} */
describe('Integration::LiveStreams', () => {
  const muxClient = new Mux(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);
  const { Video } = muxClient;
  let testLiveStream;

  before(() => (
    Video.liveStreams.create()
      .then((res) => {
        const { data } = res;
        should.exist(data);
        expect(res.status).to.equal(201);
        testLiveStream = data;
      })
      .catch((err) => {
        expect(err).to.equal(undefined);
      })
  ));

  after(() => (
    Video.liveStreams.remove(testLiveStream.data.id)
      .then((res) => {
        const { data } = res;
        should.exist(data);
        expect(res.status).to.equal(204);
      })
      .catch((err) => {
        expect(err).to.equal(undefined);
      })
  ));

  /** @test {LiveStreams.create} */
  describe('LiveStreams.create', () => {
    /** @test {LiveStreams.create} */
    it('creates a live stream with defaults', () => (
      Video.liveStreams.create()
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(201);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));

    it('creates a live stream with given parameters', () => (
      Video.liveStreams.create({playback_policy: 'signed', 'new_asset_settings': { playback_policy: 'signed' }})
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(data.data.new_asset_settings).to.not.equal(undefined);
          expect(res.status).to.equal(201);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });

  /** @test {LiveStreams.remove} */
  describe('LiveStreams.remove', () => {
    /** @test {LiveStreams.remove} */
    it('deletes a live stream', () => (
      Video.liveStreams.create()
        .then((res) => {
          const { data } = res;
          should.exist(data);
          return Video.liveStreams.remove(data.data.id);
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

    /** @test {LiveStreams.remove} */
    it('fails to delete a live stream when not given an incorrect live stream id', () => (
      Video.liveStreams.remove('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));
  });

  /** @test {LiveStreams.get} */
  describe('LiveStreams.get', () => {
    /** @test {LiveStreams.get} */
    it('gets a live stream', () => (
      Video.liveStreams.get(testLiveStream.data.id)
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));

    /** @test {LiveStreams.get} */
    it('fails to get a live stream when not given an incorrect live stream id', () => (
      Video.liveStreams.get('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));
  });

  /** @test {LiveStreams.signalComplete} */
  describe('LiveStreams.signalComplete', () => {
    /** @test {LiveStreams.signalComplete} */
    it('signals a live stream is complete', () => (
      Video.liveStreams.signalComplete(testLiveStream.data.id)
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          should.not.exist(err);
        })
    ));

    /** @test {LiveStreams.signalComplete} */
    it('fails to signal a live stream is complete when given an incorrect live stream id', () => (
      Video.liveStreams.signalComplete('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));
  });

  /** @test {LiveStreams.list} */
  describe('LiveStreams.list', () => {
    /** @test {LiveStreams.list} */
    it('lists all live streams for an environment', () => (
      Video.liveStreams.list()
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));

    it('lists 5 live streams for an environment', () => (
      Video.liveStreams.list({limit: 5})
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

  /** @test {LiveStreams.resetStreamKey} */
  describe('LiveStreams.resetStreamKey', () => {
    /** @test {LiveStreams.resetStreamKey} */
    it('resets a stream key', () => (
      Video.liveStreams.resetStreamKey(testLiveStream.data.id)
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          should.not.exist(err);
        })
    ));

    /** @test {LiveStreams.resetStreamKey} */
    it('fails to reset a stream key if given an incorrect live stream id', () => (
      Video.liveStreams.resetStreamKey('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));
  });

  /** @test {LiveStreams.createPlaybackId} */
  describe('LiveStreams.createPlaybackId', () => {
    /** @test {LiveStreams.createPlaybackId} */
    it('creates a playback if for a live stream', () => (
      Video.liveStreams.createPlaybackId(testLiveStream.data.id)
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          should.not.exist(err);
        })
    ));

    /** @test {LiveStreams.createPlaybackId} */
    it('fails to reset a stream key if given an incorrect live stream id', () => (
      Video.liveStreams.createPlaybackId('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));
  });

  /** @test {LiveStreams.deletePlaybackId} */
  describe('LiveStreams.deletePlaybackId', () => {
    /** @test {LiveStreams.deletePlaybackId} */
    it('deletes playbackIds for a live stream', () => (
      Video.liveStreams.deletePlaybackId(testLiveStream.data.id, { policy: 'public' })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(201);
          return Video.liveStreams.deletePlaybackId(testLiveStream.data.id, data.data.id);
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

    /** @test {PlaybackIds.deletePlaybackId} */
    it('fails to get playbackIds for a live stream when not given a playback ID', () => (
      Video.liveStreams.deletePlaybackId(testLiveStream.data.id)
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));
  });
});
