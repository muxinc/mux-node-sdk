const { expect } = require('chai');
const moxios = require('moxios');
const sinon = require('sinon');
const VideoViews = require('../../../src/data/resources/video_views');

/** @test {VideoViews} */
describe('Unit::VideoViews', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const videoViewsInstance = new VideoViews(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  /** @test {VideoViews} */
  describe('VideoViews', () => {
    /** @test {VideoViews} */
    it('throws an error if an api key is not given', () => {
      expect(() => new VideoViews()).to.throw('API Access Token must be provided.');
    });

    /** @test {VideoViews} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new VideoViews(testApiKey)).to.throw('API secret key must be provided');
    });

    /** @test {VideoViews} */
    it('creates a new VideoViews instance', () => {
      const TestVideoViews = new VideoViews(testApiKey, testSecret);
      expect(() => new VideoViews(testApiKey, testSecret)).to.not.throw();
      expect(TestVideoViews.requestOptions.auth.username).to.equal(testApiKey);
      expect(TestVideoViews.requestOptions.auth.password).to.equal(testSecret);
    });
  });

  /** @test {VideoViews.list} */
  describe('VideoViews.list', () => {
    /** @test {VideoViews.list} */
    it('makes a get request to the Mux data video-views route', (done) => {
      moxios.stubRequest('https://api.mux.com/data/v1/video-views', {
        status: 200,
        responseText: 'video views',
      });

      const onFulfilled = sinon.spy();
      videoViewsInstance.list({})
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('video views');
        done();
      });
    });
  });

  /** @test {VideoViews.get} */
  describe('VideoViews.get', () => {
    /** @test {VideoViews.get} */
    it('makes a get request to the Mux data video-views route', (done) => {
      moxios.stubRequest('https://api.mux.com/data/v1/video-views/someView', {
        status: 200,
        responseText: 'video views',
      });

      const onFulfilled = sinon.spy();
      videoViewsInstance.get('someView')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('video views');
        done();
      });
    });
  });
});
