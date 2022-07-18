const { expect } = require('chai');
const { Video } = require('../../../dist/video/video');
const { Assets } = require('../../../dist/video/resources/assets');
const { LiveStreams } = require('../../../dist/video/resources/liveStreams');
const { Uploads } = require('../../../dist/video/resources/uploads');
const { PlaybackIds } = require('../../../dist/video/resources/playbackIds');
// eslint-disable-next-line prettier/prettier
const { DeliveryUsage } = require('../../../dist/video/resources/deliveryUsage');
const { SigningKeys } = require('../../../dist/video/resources/signingKeys');

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
      expect(TestVideo.Assets.constructor.name).to.eq(Assets.name);
      expect(TestVideo.LiveStreams.constructor.name).to.eq(LiveStreams.name);
      // eslint-disable-next-line prettier/prettier -- extremely wild prettier bug wanting line breaks here
      expect(TestVideo.DeliveryUsage.constructor.name).to.eq(DeliveryUsage.name);
      expect(TestVideo.PlaybackIds.constructor.name).to.eq(PlaybackIds.name);
      expect(TestVideo.Uploads.constructor.name).to.eq(Uploads.name);
      expect(TestVideo.SigningKeys.constructor.name).to.eq(SigningKeys.name);
    });
  });
});
