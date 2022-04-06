const { expect } = require('chai');
const sinon = require('sinon');
const moxios = require('moxios');
const { LiveStreams } = require('../../../../cjs/video/resources/liveStreams');

/** @test {LiveStreams} */
describe('Unit::LiveStreams', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testLiveStreams = new LiveStreams(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(testLiveStreams.http);
  });

  afterEach(() => {
    moxios.uninstall(testLiveStreams.http);
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

  /** @test {LiveStreams.del} */
  describe('LiveStreams.del', () => {
    /** @test {LiveStreams.del} */
    it('throws an error when a live stream ID is not given', () =>
      testLiveStreams
        .del()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to delete a live stream'
          );
        }));
  });

  /** @test {LiveStreams.list} */
  describe('LiveStreams.list', () => {
    /** @test {LiveStreams.list} */
    it('makes a GET request to list 100 live streams offset by 2 pages', (done) => {
      moxios.stubRequest('/video/v1/live-streams?limit=100&page=2', {
        status: 200,
        responseText: '{"data": {"list": true}}',
      });

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
    it('throws an error when a live stream ID is not given', () =>
      testLiveStreams
        .get()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to get a live stream'
          );
        }));
  });

  /** @test {LiveStreams.signalComplete} */
  describe('LiveStreams.signalComplete', () => {
    /** @test {LiveStreams.signalComplete} */
    it('throws an error when a live stream ID is not given', () =>
      testLiveStreams
        .signalComplete()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to signal a stream is complete'
          );
        }));
  });

  /** @test {LiveStreams.resetStreamKey} */
  describe('LiveStreams.resetStreamKey', () => {
    /** @test {LiveStreams.resetStreamKey} */
    it('throws an error when a live stream ID is not given', () =>
      testLiveStreams
        .resetStreamKey()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to reset a live stream key'
          );
        }));
  });

  /** @test {LiveStreams.createPlaybackId} */
  describe('LiveStreams.createPlaybackId', () => {
    /** @test {LiveStreams.createPlaybackId} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .createPlaybackId()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to create a live stream playback ID'
          );
        }));
  });

  /** @test {LiveStreams.deletePlaybackId} */
  describe('LiveStreams.deletePlaybackId', () => {
    /** @test {LiveStreams.deletePlaybackId} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .deletePlaybackId()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to delete a live stream playback ID'
          );
        }));
  });

  /** @test {LiveStreams.createSimulcastTarget} */
  describe('LiveStreams.createSimulcastTarget', () => {
    /** @test {LiveStreams.createSimulcastTarget} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .createSimulcastTarget()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to create a simulcast target'
          );
        }));
  });

  /** @test {LiveStreams.getSimulcastTarget} */
  describe('LiveStreams.getSimulcastTarget', () => {
    /** @test {LiveStreams.getSimulcastTarget} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .getSimulcastTarget()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to get a simulcast target'
          );
        }));

    /** @test {LiveStreams.createSimulcastTarget} */
    it('throws an error if a simulcast target id is not given', () =>
      testLiveStreams
        .getSimulcastTarget('testLiveStream')
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A simulcast target ID is required to get a simulcast target'
          );
        }));
  });

  /** @test {LiveStreams.deleteSimulcastTarget} */
  describe('LiveStreams.deleteSimulcastTarget', () => {
    /** @test {LiveStreams.deleteSimulcastTarget} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .deleteSimulcastTarget()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to delete a simulcast target'
          );
        }));

    /** @test {LiveStreams.deleteSimulcastTarget} */
    it('throws an error if a simulcast target id is not given', () =>
      testLiveStreams
        .deleteSimulcastTarget('testLiveStream')
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A simulcast target ID is required to delete a simulcast target'
          );
        }));
  });

  /** @test {LiveStreams.enable} */
  describe('LiveStreams.enable', () => {
    /** @test {LiveStreams.enable} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .enable()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to enable a live stream'
          );
        }));
  });

  /** @test {LiveStreams.disable} */
  describe('LiveStreams.disable', () => {
    /** @test {LiveStreams.disable} */
    it('throws an error if a live stream ID is not given', () =>
      testLiveStreams
        .disable()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'A live stream ID is required to disable a live stream'
          );
        }));
  });
});
