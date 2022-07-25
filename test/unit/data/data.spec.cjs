const { expect } = require('chai');
const { Data } = require('../../../dist/data/data');
const { Metrics } = require('../../../dist/data/resources/metrics');
const { Filters } = require('../../../dist/data/resources/filters');
const { Dimensions } = require('../../../dist/data/resources/dimensions');
const { Errors } = require('../../../dist/data/resources/errors');
const { VideoViews } = require('../../../dist/data/resources/video_views');
const { Exports } = require('../../../dist/data/resources/exports');
const { Incidents } = require('../../../dist/data/resources/incidents');

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
      expect(() => new Data(testApiKey)).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Data} */
    it('creates a new Data instance', () => {
      const TestData = new Data(testApiKey, testSecret);
      expect(() => new Data(testApiKey, testSecret)).to.not.throw();
      // nominative equality because referential equality is weird in these tests
      expect(TestData.Metrics.constructor.name).to.eq(Metrics.name);
      expect(TestData.Errors.constructor.name).to.eq(Errors.name);
      expect(TestData.Exports.constructor.name).to.eq(Exports.name);
      expect(TestData.VideoViews.constructor.name).to.eq(VideoViews.name);
      expect(TestData.Filters.constructor.name).to.eq(Filters.name);
      expect(TestData.Dimensions.constructor.name).to.eq(Dimensions.name);
      expect(TestData.Incidents.constructor.name).to.eq(Incidents.name);
    });
  });
});
