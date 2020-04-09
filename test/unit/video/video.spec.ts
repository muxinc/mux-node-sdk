import { expect } from 'chai';
import Video from '../../../src/video/video';
import Assets from '../../../src/video/resources/assets';
import LiveStreams from '../../../src/video/resources/liveStreams';
import Uploads from '../../../src/video/resources/uploads';

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
      expect(TestVideo.LiveStreams).to.be.an.instanceof(LiveStreams);
      expect(TestVideo.Uploads).to.be.an.instanceof(Uploads);
    });
  });
});
