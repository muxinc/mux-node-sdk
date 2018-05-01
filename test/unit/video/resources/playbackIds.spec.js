const { expect } = require('chai');
const sinon = require('sinon');
const moxios = require('moxios');
const PlaybackIds = require('../../../../src/video/resources/playbackIds');

/** @test {PlaybackIds} */
describe('Unit::PlaybackIds', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testPlaybackIds = new PlaybackIds(testApiKey, testSecret);

  /** @test {PlaybackIds} */
  describe('PlaybackIds', () => {
    /** @test {PlaybackIds} */
    it('throws an error if an api key is not given', () => {
      expect(() => new PlaybackIds()).to.throw('API Access Token must be provided.');
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
    /** @test {PlaybackIds.create} */
    it('makes a POST request to create a Playback Id for an asset', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/assets/testAsset/playback-ids', {
        status: 200,
        responseText: 'create',
      });

      const onFulfilled = sinon.spy();
      testPlaybackIds.create('testAsset', { policy: 'public' })
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('create');
        done();
      });
    });

    /** @test {PlaybackIds.create} */
    it('throws an error if an asset id is not given', () => (
      testPlaybackIds.create()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('An asset ID is required to create a playback ID');
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
          expect(err.message).to.equal('Playback ID params are required');
        })
    ));
  });

  /** @test {PlaybackIds.deletePlaybackId} */
  describe('PlaybackIds.deletePlaybackId', () => {
    /** @test {PlaybackIds.deletePlaybackId} */
    it('makes a DELETE request to delete a Playback Id for an asset', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/assets/testAsset/playback-ids/testPlaybackId', {
        status: 200,
        responseText: 'delete',
      });

      const onFulfilled = sinon.spy();
      testPlaybackIds.deletePlaybackId('testAsset', 'testPlaybackId')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('delete');
        done();
      });
    });

    /** @test {PlaybackIds.deletePlaybackId} */
    it('throws an error if an asset id is not given', () => (
      testPlaybackIds.deletePlaybackId()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('An asset ID is required to delete a playback ID');
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
          expect(err.message).to.equal('A playback ID is required to delete a playback ID');
        })
    ));
  });

  /** @test {PlaybackIds.get} */
  describe('PlaybackIds.get', () => {
    /** @test {PlaybackIds.get} */
    it('makes a GET request to get a Playback Id for an asset', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/assets/testAsset/playback-ids/testPlaybackId', {
        status: 200,
        responseText: 'get',
      });

      const onFulfilled = sinon.spy();
      testPlaybackIds.get('testAsset', 'testPlaybackId')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('get');
        done();
      });
    });

    /** @test {PlaybackIds.get} */
    it('throws an error if an asset id is not given', () => (
      testPlaybackIds.get()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('An asset ID is required to get a playback ID');
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
          expect(err.message).to.equal('A playback ID is required to get a playback ID');
        })
    ));
  });
});
