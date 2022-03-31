const { expect } = require('chai');
const moxios = require('moxios');
const { VideoViews } = require('../../../../cjs/data/resources/video_views');

/** @test {VideoViews} */
describe('Unit::VideoViews', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const videoViewsInstance = new VideoViews(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(videoViewsInstance.http);
  });

  afterEach(() => {
    moxios.uninstall(videoViewsInstance.http);
  });

  /** @test {VideoViews} */
  describe('VideoViews', () => {
    /** @test {VideoViews} */
    it('throws an error if an api key is not given', () => {
      expect(() => new VideoViews()).to.throw(
        'API Access Token must be provided.'
      );
    });

    /** @test {VideoViews} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new VideoViews(testApiKey)).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {VideoViews} */
    it('creates a new VideoViews instance', () => {
      const TestVideoViews = new VideoViews(testApiKey, testSecret);
      expect(() => new VideoViews(testApiKey, testSecret)).to.not.throw();
      expect(TestVideoViews.tokenId).to.equal(testApiKey);
      expect(TestVideoViews.tokenSecret).to.equal(testSecret);
    });
  });
});
