const { expect } = require('chai');
const sinon = require('sinon');
const moxios = require('moxios');
const LiveStreams = require('../../../../src/video/resources/liveStreams');

/** @test {LiveStreams} */
describe('Unit::LiveStreams', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testLiveStreams = new LiveStreams(testApiKey, testSecret);

  /** @test {LiveStreams} */
  describe('LiveStreams', () => {
    /** @test {LiveStreams} */
    it('throws an error if an api key is not given', () => {
      expect(() => new LiveStreams()).to.throw('API Access Token must be provided.');
    });

    /** @test {LiveStreams} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new LiveStreams('testKey')).to.throw('API secret key must be provided');
    });

    /** @test {LiveStreams} */
    it('creates a new LiveStreams instance', () => {
      const TestLiveStreams = new LiveStreams(testApiKey, testSecret);
      expect(() => new LiveStreams(testApiKey, testSecret)).to.not.throw();
      expect(TestLiveStreams.requestOptions.auth.username).to.equal(testApiKey);
      expect(TestLiveStreams.requestOptions.auth.password).to.equal(testSecret);
    });
  });

  /** @test {LiveStreams.create} */
  describe('LiveStreams.create', () => {
    /** @test {LiveStreams.create} */
    it('makes a POST request to create a LiveStream asset', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams', {
        status: 200,
        responseText: 'create',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams.create('testLiveStream', { playback_policy: 'public', new_asset_settings: { playback_policy: 'public' } })
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('create');
        done();
      });
    });
  });

  /** @test {LiveStreams.remove} */
  describe('LiveStreams.remove', () => {
    /** @test {LiveStreams.remove} */
    it('makes a DELETE request to delete a live stream', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams/testLiveStream', {
        status: 200,
        responseText: 'delete live stream',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams.remove('testLiveStream')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('delete live stream');
        done();
      });
    });

    /** @test {LiveStreams.remove} */
    it('throws an error when a live stream id is not given', () => (
      testLiveStreams.remove()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('A live stream ID is required to delete a live stream');
        })
    ));
  });

  /** @test {LiveStreams.list} */
  describe('LiveStreams.list', () => {
    /** @test {LiveStreams.list} */
    it('makes a GET request to list all live streams', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams', {
        status: 200,
        responseText: 'list',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams.list()
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('list');
        done();
      });
    });

    it('makes a GET request to list 100 live streams offset by 2 pages', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams?limit=100&page=2', {
        status: 200,
        responseText: 'list',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams.list({limit: 100, page: 2})
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('list');
        done();
      });
    });
  });

  /** @test {LiveStreams.get} */
  describe('LiveStreams.get', () => {
    /** @test {LiveStreams.get} */
    it('makes a GET request to get a live stream', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams/testLiveStream', {
        status: 200,
        responseText: 'live stream',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams.get('testLiveStream')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('live stream');
        done();
      });
    });

    /** @test {LiveStreams.get} */
    it('throws an error when a live stream id is not given', () => (
      testLiveStreams.get()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('A live stream ID is required to get a live stream');
        })
    ));
  });

  /** @test {LiveStreams.signalComplete} */
  describe('LiveStreams.signalComplete', () => {
    /** @test {LiveStreams.signalComplete} */
    it('makes a PUT request to signal a live stream is complete', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams/testLiveStream/complete', {
        status: 200,
        responseText: 'live stream',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams.signalComplete('testLiveStream')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('live stream');
        done();
      });
    });

    /** @test {LiveStreams.signalComplete} */
    it('throws an error when a live stream id is not given', () => (
      testLiveStreams.signalComplete()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('A Live Stream ID is required to signal a stream is complete');
        })
    ));
  });

  /** @test {LiveStreams.resetStreamKey} */
  describe('LiveStreams.resetStreamKey', () => {
    /** @test {LiveStreams.resetStreamKey} */
    it('makes a POST request to reset a live stream key', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams/testLiveStream/reset-stream-key', {
        status: 200,
        responseText: 'live stream',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams.resetStreamKey('testLiveStream')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('live stream');
        done();
      });
    });

    /** @test {LiveStreams.resetStreamKey} */
    it('throws an error when a live stream id is not given', () => (
      testLiveStreams.resetStreamKey()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('A Live Stream ID is required to reset a live stream key');
        })
    ));
  });

  /** @test {LiveStreams.createPlaybackId} */
  describe('LiveStreams.createPlaybackId', () => {
    /** @test {LiveStreams.createPlaybackId} */
    it('makes a POST request to create a playback ID for a live stream', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams/testLiveStream/playback-ids', {
        status: 200,
        responseText: 'create',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams.createPlaybackId('testLiveStream', { policy: 'public' })
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('create');
        done();
      });
    });

    /** @test {LiveStreams.createPlaybackId} */
    it('throws an error if a Live Stream ID is not given', () => (
      testLiveStreams.createPlaybackId('testLiveStream')
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('A playback policy is required to create a live stream playback ID');
        })
    ));

    /** @test {LiveStreams.createPlaybackId} */
    it('throws an error if params are not given', () => (
      testLiveStreams.createPlaybackId()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('A Live Stream ID is required to create a live stream playback ID');
        })
    ));
  });

  /** @test {LiveStreams.deletePlaybackId} */
  describe('LiveStreams.deletePlaybackId', () => {
    /** @test {LiveStreams.deletePlaybackId} */
    it('makes a DELETE request to delete a playback ID for a live stream', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams/testLiveStream/playback-ids/testPlaybackId', {
        status: 200,
        responseText: 'delete',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams.deletePlaybackId('testLiveStream', 'testPlaybackId')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('delete');
        done();
      });
    });

    /** @test {LiveStreams.deletePlaybackId} */
    it('throws an error if a Live Stream ID is not given', () => (
      testLiveStreams.deletePlaybackId()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('A Live Stream ID is required to delete a live stream playback ID');
        })
    ));

    /** @test {LiveStreams.deletePlaybackId} */
    it('throws an error if a playback id is not given', () => (
      testLiveStreams.deletePlaybackId('liveStreamId')
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('A live stream playback ID is required to delete a live stream playback ID');
        })
    ));
  });
});
