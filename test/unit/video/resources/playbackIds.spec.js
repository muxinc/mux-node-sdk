require('dotenv').config();
const { expect } = require('chai');
const sinon = require('sinon');
const PlaybackIds = require('../../../../src/video/resources/PlaybackIds');
const api = require('../../../../src/utils/api');

/** @test {PlaybackIds} */
describe('Unit::PlaybackIds', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testPlaybackIds = new PlaybackIds(testApiKey, testSecret);

  /** @test {PlaybackIds} */
  describe('PlaybackIds', () => {
    /** @test {PlaybackIds} */
    it('throws an error if an api key is not given', () => {
      expect(() => new PlaybackIds()).to.throw('API key must be provided.');
    });

    /** @test {PlaybackIds} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new PlaybackIds('testKey')).to.throw('API secret key must be provided');
    });

    /** @test {PlaybackIds} */
    it('creates a new PlaybackIds instance', () => {
      const TestPlaybackIds = new PlaybackIds(testApiKey, testSecret);
      expect(() => new PlaybackIds(testApiKey, testSecret)).to.not.throw();
      expect(TestPlaybackIds.requestOptions.auth.username).to.equal(testApiKey);
      expect(TestPlaybackIds.requestOptions.auth.password).to.equal(testSecret);
    });
  });

  /** @test {PlaybackIds.create} */
  describe('PlaybackIds.create', () => {
    before(() => {
      sinon.stub(api, 'post');
    });

    after(() => {
      api.post.restore();
    });

    /** @test {PlaybackIds.create} */
    it('creates a playbackId', () => {
      testPlaybackIds.create('assetid', { policy: 'public' });
      expect(api.post.calledOnce);
    });

    /** @test {PlaybackIds.create} */
    it('throws an error if an asset id is not given', () => (
      testPlaybackIds.create()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('An asset ID is required to create a playbackId');
        })
    ));

    /** @test {PlaybackIds.create} */
    it('throws an error if playbackId params are not given', () => (
      testPlaybackIds.create('assetid')
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('PlaybackId params are required');
        })
    ));
  });

  /** @test {PlaybackIds.deletePlaybackId} */
  describe('PlaybackIds.deletePlaybackId', () => {
    before(() => {
      sinon.stub(api, 'del');
    });

    after(() => {
      api.del.restore();
    });

    /** @test {PlaybackIds.deletePlaybackId} */
    it('makes a DELETE request to delete a playbackId', () => {
      testPlaybackIds.deletePlaybackId('assetid', { policy: 'public' });
      expect(api.del.calledOnce);
    });

    /** @test {PlaybackIds.deletePlaybackId} */
    it('throws an error if an asset id is not given', () => (
      testPlaybackIds.deletePlaybackId()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('An asset ID is required to delete a playbackId');
        })
    ));

    /** @test {PlaybackIds.deletePlaybackId} */
    it('throws an error if playbackId params are not given', () => (
      testPlaybackIds.deletePlaybackId('assetid')
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('A playbackId is required to delete a playbackId');
        })
    ));
  });

  /** @test {PlaybackIds.get} */
  describe('PlaybackIds.get', () => {
    before(() => {
      sinon.stub(api, 'get');
    });

    after(() => {
      api.get.restore();
    });

    /** @test {PlaybackIds.get} */
    it('makes a GET request to delete a playbackId', () => {
      testPlaybackIds.get('assetid', 'playbackId');
      expect(api.del.calledOnce);
    });

    /** @test {PlaybackIds.get} */
    it('throws an error if an asset id is not given', () => (
      testPlaybackIds.get()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('An asset ID is required to get a playbackId');
        })
    ));

    /** @test {PlaybackIds.get} */
    it('throws an error if playbackId params are not given', () => (
      testPlaybackIds.get('assetid')
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('A playbackId is required to get a playbackId');
        })
    ));
  });
});
