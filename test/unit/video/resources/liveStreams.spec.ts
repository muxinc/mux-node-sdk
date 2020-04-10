import { expect } from 'chai';
import * as sinon from 'sinon';
import * as moxios from 'moxios';
import LiveStreams from '../../../../src/video/resources/liveStreams';

/** @test {LiveStreams} */
describe('Unit::LiveStreams', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testLiveStreams = new LiveStreams(testApiKey, testSecret);

  // TODO: Figure out why axios and moxios don't match
  beforeEach(() => {
    moxios.install(testLiveStreams.http as any);
  });

  afterEach(() => {
    moxios.uninstall(testLiveStreams.http as any);
  });

  /** @test {LiveStreams} */
  describe('LiveStreams', () => {
    /** @test {LiveStreams} */
    it('throws an error if an api key is not given', () => {
      expect(() => new LiveStreams()).to.throw(
        'API Access Token must be provided.'
      );
    });

    /** @test {LiveStreams} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new LiveStreams('testKey')).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {LiveStreams} */
    it('creates a new LiveStreams instance', () => {
      const TestLiveStreams = new LiveStreams(testApiKey, testSecret);
      expect(() => new LiveStreams(testApiKey, testSecret)).to.not.throw();
      expect(TestLiveStreams.tokenId).to.equal(testApiKey);
      expect(TestLiveStreams.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {LiveStreams.create} */
  describe('LiveStreams.create', () => {
    /** @test {LiveStreams.create} */
    it('makes a POST request to create a LiveStream asset', done => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams', {
        status: 200,
        responseText: '{"data": {"create": true}}',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams
        .create({
          playback_policy: 'public',
          new_asset_settings: { playback_policy: 'public' },
        })
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].create).to.be.true;
        done();
      });
    });
  });

  /** @test {LiveStreams.del} */
  describe('LiveStreams.del', () => {
    /** @test {LiveStreams.del} */
    it('makes a DELETE request to delete a live stream', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/live-streams/testLiveStream',
        {
          status: 200,
          responseText: '{"data": {"deleteLive": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testLiveStreams.del('testLiveStream').then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].deleteLive).to.be.true;
        done();
      });
    });

    /** @test {LiveStreams.del} */
    it('throws an error when a live stream ID is not given', () =>
      testLiveStreams
        .del(undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to delete a live stream'
          );
        }));
  });

  /** @test {LiveStreams.list} */
  describe('LiveStreams.list', () => {
    /** @test {LiveStreams.list} */
    it('makes a GET request to list all live streams', done => {
      moxios.stubRequest('https://api.mux.com/video/v1/live-streams', {
        status: 200,
        responseText: '{"data": {"list": true}}',
      });

      const onFulfilled = sinon.spy();
      testLiveStreams.list().then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].list).to.be.true;
        done();
      });
    });

    it('makes a GET request to list 100 live streams offset by 2 pages', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/live-streams?limit=100&page=2',
        {
          status: 200,
          responseText: '{"data": {"list": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testLiveStreams.list({ limit: 100, page: 2 }).then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].list).to.be.true;
        done();
      });
    });
  });

  /** @test {LiveStreams.get} */
  describe('LiveStreams.get', () => {
    /** @test {LiveStreams.get} */
    it('makes a GET request to get a live stream', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/live-streams/testLiveStream',
        {
          status: 200,
          responseText: '{"data": {"live_stream": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testLiveStreams.get('testLiveStream').then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].live_stream).to.be.true;
        done();
      });
    });

    /** @test {LiveStreams.get} */
    it('throws an error when a live stream ID is not given', () =>
      testLiveStreams
        .get(undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to get a live stream'
          );
        }));
  });

  /** @test {LiveStreams.signalComplete} */
  describe('LiveStreams.signalComplete', () => {
    /** @test {LiveStreams.signalComplete} */
    it('makes a PUT request to signal a live stream is complete', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/live-streams/testLiveStream/complete',
        {
          status: 200,
          responseText: '{"data": {"live_stream": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testLiveStreams.signalComplete('testLiveStream').then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].live_stream).to.be.true;
        done();
      });
    });

    /** @test {LiveStreams.signalComplete} */
    it('throws an error when a live stream ID is not given', () =>
      testLiveStreams
        .signalComplete(undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to signal a stream is complete'
          );
        }));
  });

  /** @test {LiveStreams.resetStreamKey} */
  describe('LiveStreams.resetStreamKey', () => {
    /** @test {LiveStreams.resetStreamKey} */
    it('makes a POST request to reset a live stream key', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/live-streams/testLiveStream/reset-stream-key',
        {
          status: 200,
          responseText: '{"data": {"live_stream": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testLiveStreams.resetStreamKey('testLiveStream').then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].live_stream).to.be.true;
        done();
      });
    });

    /** @test {LiveStreams.resetStreamKey} */
    it('throws an error when a live stream ID is not given', () =>
      testLiveStreams
        .resetStreamKey(undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to reset a live stream key'
          );
        }));
  });

  /** @test {LiveStreams.createPlaybackId} */
  describe('LiveStreams.createPlaybackId', () => {
    /** @test {LiveStreams.createPlaybackId} */
    it('makes a POST request to create a playback ID for a live stream', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/live-streams/testLiveStream/playback-ids',
        {
          status: 200,
          responseText: '{"data": {"create": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testLiveStreams
        .createPlaybackId('testLiveStream', { policy: 'public' })
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].create).to.be.true;
        done();
      });
    });

    /** @test {LiveStreams.createPlaybackId} */
    it('throws an error if params are not given', () =>
      testLiveStreams
        .createPlaybackId('testLiveStream', undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A playback policy is required to create a live stream playback ID'
          );
        }));

    /** @test {LiveStreams.createPlaybackId} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .createPlaybackId(undefined as any, undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to create a live stream playback ID'
          );
        }));
  });

  /** @test {LiveStreams.deletePlaybackId} */
  describe('LiveStreams.deletePlaybackId', () => {
    /** @test {LiveStreams.deletePlaybackId} */
    it('makes a DELETE request to delete a playback ID for a live stream', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/live-streams/testLiveStream/playback-ids/testPlaybackId',
        {
          status: 200,
          responseText: '{"data": {"delete": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testLiveStreams
        .deletePlaybackId('testLiveStream', 'testPlaybackId')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].delete).to.be.true;
        done();
      });
    });

    /** @test {LiveStreams.deletePlaybackId} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .deletePlaybackId(undefined as any, undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to delete a live stream playback ID'
          );
        }));

    /** @test {LiveStreams.deletePlaybackId} */
    it('throws an error if a playback id is not given', () =>
      testLiveStreams
        .deletePlaybackId('liveStreamId', undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream playback ID is required to delete a live stream playback ID'
          );
        }));
  });

  /** @test {LiveStreams.createSimulcastTarget} */
  describe('LiveStreams.createSimulcastTarget', () => {
    /** @test {LiveStreams.createSimulcastTarget} */
    it('makes a POST request to create a simulcast target for a live stream', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/live-streams/testLiveStream/simulcast-targets',
        {
          status: 200,
          responseText: '{"data": {"create": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testLiveStreams
        .createSimulcastTarget('testLiveStream', {
          url: 'rtmp://live.example.com/app',
          stream_key: 'difvbfgi',
        })
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].create).to.be.true;
        done();
      });
    });

    /** @test {LiveStreams.createSimulcastTarget} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .createSimulcastTarget(undefined as any, undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to create a simulcast target'
          );
        }));

    /** @test {LiveStreams.createSimulcastTarget} */
    it('throws an error if a url and stream key are not given', () =>
      testLiveStreams
        .createSimulcastTarget('testLiveStream', undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A url is required to create a simulcast target'
          );
        }));
  });

  /** @test {LiveStreams.getSimulcastTarget} */
  describe('LiveStreams.getSimulcastTarget', () => {
    /** @test {LiveStreams.getSimulcastTarget} */
    it('makes a GET request to get a simulcast target for a live stream', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/live-streams/testLiveStream/simulcast-targets/testSimulcastTarget',
        {
          status: 200,
          responseText: '{"data": {"simulcast_target": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testLiveStreams
        .getSimulcastTarget('testLiveStream', 'testSimulcastTarget')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].simulcast_target).to.be.true;
        done();
      });
    });

    /** @test {LiveStreams.getSimulcastTarget} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .getSimulcastTarget(undefined as any, undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to get a simulcast target'
          );
        }));

    /** @test {LiveStreams.createSimulcastTarget} */
    it('throws an error if a simulcast target id is not given', () =>
      testLiveStreams
        .getSimulcastTarget('testLiveStream', undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A simulcast target ID is required to get a simulcast target'
          );
        }));
  });

  /** @test {LiveStreams.deleteSimulcastTarget} */
  describe('LiveStreams.deleteSimulcastTarget', () => {
    /** @test {LiveStreams.deleteSimulcastTarget} */
    it('makes a DELETE request to delete a simulcast target for a live stream', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/live-streams/testLiveStream/simulcast-targets/testSimulcastTarget',
        {
          status: 200,
          responseText: '{"data": {"deleteSimulcastTarget": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testLiveStreams
        .deleteSimulcastTarget('testLiveStream', 'testSimulcastTarget')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].deleteSimulcastTarget).to.be.true;
        done();
      });
    });

    /** @test {LiveStreams.deleteSimulcastTarget} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .deleteSimulcastTarget(undefined as any, undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to delete a simulcast target'
          );
        }));

    /** @test {LiveStreams.deleteSimulcastTarget} */
    it('throws an error if a simulcast target id is not given', () =>
      testLiveStreams
        .deleteSimulcastTarget('testLiveStream', undefined as any)
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A simulcast target ID is required to delete a simulcast target'
          );
        }));
  });
});
