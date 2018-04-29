const { expect } = require('chai');
const Data = require('../../../src/data/data');
const Metrics = require('../../../src/data/resources/metrics');
const Filters = require('../../../src/data/resources/filters');
const Errors = require('../../../src/data/resources/errors');
const VideoViews = require('../../../src/data/resources/video_views');
const Exports = require('../../../src/data/resources/exports');

/** @test {Data} */
describe('Unit::Data', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';

  /** @test {Data} */
  describe('Data', () => {
    /** @test {Data} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Data()).to.throw('API Access Token must be provided.');
    });

    /** @test {Data} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Data(testApiKey)).to.throw('API secret key must be provided');
    });

    /** @test {Data} */
    it('creates a new Data instance', () => {
      const TestData = new Data(testApiKey, testSecret);
      expect(() => new Data(testApiKey, testSecret)).to.not.throw();
      expect(TestData.metrics).to.be.an.instanceof(Metrics);
      expect(TestData.errors).to.be.an.instanceof(Errors);
      expect(TestData.exports).to.be.an.instanceof(Exports);
      expect(TestData.videoViews).to.be.an.instanceof(VideoViews);
      expect(TestData.filters).to.be.an.instanceof(Filters);
    });
  });
});
