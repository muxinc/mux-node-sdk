const { expect } = require('chai');
const moxios = require('moxios');
const { PlaybackIds } = require('../../../../cjs/video/resources/playbackIds');

/** @test {PlaybackIds} */
describe('Unit::PlaybackIds', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testPlaybackIds = new PlaybackIds(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(testPlaybackIds.http);
  });

  afterEach(() => {
    moxios.uninstall(testPlaybackIds.http);
  });

  /** @test {PlaybackIds} */
  describe('PlaybackIds', () => {
    /** @test {PlaybackIds} */
    it('throws an error if an api key is not given', () => {
      expect(() => new PlaybackIds()).to.throw(
        'API Access Token must be provided.'
      );
    });

    /** @test {PlaybackIds} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new PlaybackIds('testKey')).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {PlaybackIds} */
    it('creates a new PlaybackIds instance', () => {
      const TestPlaybackIds = new PlaybackIds(testApiKey, testSecret);
      expect(() => new PlaybackIds(testApiKey, testSecret)).to.not.throw();
      expect(TestPlaybackIds.tokenId).to.equal(testApiKey);
      expect(TestPlaybackIds.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {PlaybackIds.get} */
  describe('PlaybackIds.get', () => {
    /** @test {PlaybackIds.get} */
    it('throws an error when an playback ID is not given', () =>
      testPlaybackIds
        .get()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal(
            'An playback ID is required to get an asset or live stream identifier'
          );
        }));
  });
});
