const { expect } = require('chai');
const sinon = require('sinon');
const moxios = require('moxios');
const { Assets } = require('../../../../cjs/video/resources/assets');

/** @test {Assets} */
describe('Unit::Assets', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testAssets = new Assets(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(testAssets.http);
  });

  afterEach(() => {
    moxios.uninstall(testAssets.http);
  });

  /** @test {Assets} */
  describe('Assets', () => {
    /** @test {Assets} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Assets()).to.throw('API Access Token must be provided.');
    });

    /** @test {Assets} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Assets('testKey')).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Assets} */
    it('creates a new Assets instance', () => {
      const TestAssets = new Assets(testApiKey, testSecret);
      expect(() => new Assets(testApiKey, testSecret)).to.not.throw();
      expect(TestAssets.tokenId).to.equal(testApiKey);
      expect(TestAssets.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {Assets.create} */
  describe('Assets.create', () => {
    /** @test {Assets.create} */
    it('throws an error if no asset params are given', () =>
      testAssets.create().catch((err) => {
        expect(err).to.exist;
        expect(err.message).to.equal(
          'Params are required for creating an asset'
        );
      }));
  });

  /** @test {Assets.get} */
  describe('Assets.get', () => {
    /** @test {Assets.get} */
    it('throws an error when an asset id is not given', () =>
      testAssets
        .get()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'An asset ID is required to get an asset'
          );
        }));
  });

  /** @test {Assets.del} */
  describe('Assets.del', () => {
    /** @test {Assets.del} */
    it('throws an error when an asset id is not given', () =>
      testAssets
        .del()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'An asset ID is required to delete an asset'
          );
        }));
  });

  /** @test {Assets.inputInfo} */
  describe('Assets.inputInfo', () => {
    /** @test {Assets.inputInfo} */
    it('throws an error when an asset id is not given', () =>
      testAssets
        .inputInfo()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'An asset ID is required to get input-info'
          );
        }));
  });

  /** @test {Assets.list} */
  describe('Assets.list', () => {
    /** @test {Assets.list} */
    it('makes a GET request to list 100 assets offset by 2 pages', (done) => {
      moxios.stubRequest('/video/v1/assets?limit=100&page=2', {
        status: 200,
        responseText: '{"data": {"list": true}}',
      });

      const onFulfilled = sinon.spy();
      testAssets.list({ limit: 100, page: 2 }).then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].list).to.be.true;
        done();
      });
    });
  });

  /** @test {Assets.deletePlaybackId} */
  describe('Assets.deletePlaybackId', () => {
    /** @test {Assets.deletePlaybackId} */
    it('makes a DELETE request to delete a Playback Id for an asset', (done) => {
      moxios.stubRequest(
        '/video/v1/assets/testAsset/playback-ids/testPlaybackId',
        {
          status: 200,
          responseText: '{"data": {"delete": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testAssets
        .deletePlaybackId('testAsset', 'testPlaybackId')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].delete).to.be.true;
        done();
      });
    });

    /** @test {Assets.deletePlaybackId} */
    it('throws an error if an asset id is not given', () =>
      testAssets.deletePlaybackId().catch((err) => {
        expect(err).to.exist;
        expect(err.message).to.equal('An asset ID is required');
      }));
  });

  /** @test {Assets.playbackId} */
  describe('Assets.playbackId', () => {
    /** @test {Assets.playbackId} */
    it('makes a GET request to get a Playback Id for an asset', (done) => {
      moxios.stubRequest(
        '/video/v1/assets/testAsset/playback-ids/testPlaybackId',
        {
          status: 200,
          responseText: '{"data": {"get": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      testAssets.playbackId('testAsset', 'testPlaybackId').then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].get).to.be.true;
        done();
      });
    });

    /** @test {Assets.playbackId} */
    it('throws an error if an asset id is not given', () =>
      testAssets.playbackId().catch((err) => {
        expect(err).to.exist;
        expect(err.message).to.equal('An asset ID is required');
      }));

    /** @test {Assets.playbackId} */
    it('throws an error if playbackId params are not given', () =>
      testAssets.playbackId('assetid').catch((err) => {
        expect(err).to.exist;
        expect(err.message).to.equal('A playback ID is required');
      }));
  });

  /** @test {Assets.createTrack} */
  describe('Assets.createTrack', () => {
    /** @test {Assets.createTrack} */
    it('makes a POST request to create a text track for an asset', (done) => {
      moxios.stubRequest('/video/v1/assets/testAsset/tracks', {
        status: 200,
        responseText: '{"data": {"create": true}}',
      });

      const onFulfilled = sinon.spy();
      testAssets
        .createTrack('testAsset', {
          url: 'https://example.com/myVIdeo_en.srt',
          type: 'text',
          text_type: 'subtitles',
          language_code: 'en-US',
        })
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].create).to.be.true;
        done();
      });
    });

    /** @test {Assets.createTrack} */
    it('throws an error if an asset id is not given', () =>
      testAssets
        .createTrack()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('An asset ID is required');
        }));

    /** @test {Assets.createTrack} */
    it('throws an error if track params are not given', () =>
      testAssets
        .createTrack('assetid')
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('Text track params are required');
        }));
  });

  /** @test {Assets.deleteTrack} */
  describe('Assets.deleteTrack', () => {
    /** @test {Assets.deleteTrack} */
    it('makes a DELETE request to delete a text track for an asset', (done) => {
      moxios.stubRequest('/video/v1/assets/testAsset/tracks/testTrackId', {
        status: 200,
        responseText: '{"data": {"delete": true}}',
      });

      const onFulfilled = sinon.spy();
      testAssets.deleteTrack('testAsset', 'testTrackId').then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].delete).to.be.true;
        done();
      });
    });

    /** @test {Assets.deleteTrack} */
    it('throws an error if an asset id is not given', () =>
      testAssets.deleteTrack().catch((err) => {
        expect(err).to.exist;
        expect(err.message).to.equal('An asset ID is required');
      }));

    /** @test {Assets.deleteTrack} */
    it('throws an error if text track ID is not given', () =>
      testAssets.deleteTrack('assetid').catch((err) => {
        expect(err).to.exist;
        expect(err.message).to.equal('A track ID is required');
      }));
  });
});
