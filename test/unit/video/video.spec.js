const { expect } = require('chai');
const Video = require('../../../src/video/video');
const Assets = require('../../../src/video/resources/assets');
const LiveStreams = require('../../../src/video/resources/liveStreams');
const Uploads = require('../../../src/video/resources/uploads');
const PlaybackIds = require('../../../src/video/resources/playbackIds');
const DeliveryUsage = require('../../../src/video/resources/deliveryUsage');

/** @test {Video} */
describe('Unit::Video', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';

  /** @test {Video} */
  describe('Video', () => {
    /** @test {Video} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Video()).to.throw('API Access Token must be provided.');
    });

    /** @test {Video} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Video('testKey')).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Video} */
    it('creates a new Video instance', () => {
      const TestVideo = new Video(testApiKey, testSecret);
      expect(() => new Video(testApiKey, testSecret)).to.not.throw();
      expect(TestVideo.Assets).to.be.an.instanceof(Assets);
      expect(TestVideo.LiveStreams).to.be.an.instanceof(LiveStreams);
      expect(TestVideo.DeliveryUsage).to.be.an.instanceof(DeliveryUsage);
      expect(TestVideo.PlaybackIds).to.be.an.instanceof(PlaybackIds);
      expect(TestVideo.Uploads).to.be.an.instanceof(Uploads);
    });
  });
});
