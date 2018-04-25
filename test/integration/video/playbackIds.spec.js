require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../lib/mux');

const TEST_VIDEO = 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

describe('Integration::PlaybackIds', () => {
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

  describe('playbackIds.create', () => {
    it('creates playbackIds for an asset', () => (
      muxVideo.playbackIds.create(testAsset.data.id)
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

  describe('playbackIds.get', () => {
    it('gets playbackIds for an asset', () => (
      muxVideo.playbackIds.create(testAsset.data.id)
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(201);
          return muxVideo.playbackIds.get(testAsset.data.id, data.data.id);
        })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));

    // @TODO: this could potentially be a unit test with mocked api calls
    it('fails to get playbackIds for an asset when not given an asset ID', () => (
      muxVideo.playbackIds.get()
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));
  });

  describe('playbackIds.deletePlaybackId', () => {
    it('deletes playbackIds for an asset', () => (
      muxVideo.playbackIds.create(testAsset.data.id)
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(201);
          return muxVideo.playbackIds.deletePlaybackId(testAsset.data.id, data.data.id);
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

    // @TODO: this could potentially be a unit test with mocked api calls
    it('fails to delete a playbackId for an asset when not given an asset ID or a playback Id', () => (
      muxVideo.playbackIds.deletePlaybackId()
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
        })
        .catch((err) => {
          should.exist(err);
        })
    ));

    it('fails to get playbackIds for an asset when not given a playback ID', () => (
      muxVideo.playbackIds.deletePlaybackId(testAsset.data.id)
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
