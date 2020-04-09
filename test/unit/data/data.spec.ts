import { expect } from 'chai';
import Data from '../../../src/data/data';
import Metrics from '../../../src/data/resources/metrics';
import Filters from '../../../src/data/resources/filters';
import Errors from '../../../src/data/resources/errors';
import VideoViews from '../../../src/data/resources/video_views';
import Exports from '../../../src/data/resources/exports';
import Incidents from '../../../src/data/resources/incidents';

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
      expect(TestData.Metrics).to.be.an.instanceof(Metrics);
      expect(TestData.Errors).to.be.an.instanceof(Errors);
      expect(TestData.Exports).to.be.an.instanceof(Exports);
      expect(TestData.VideoViews).to.be.an.instanceof(VideoViews);
      expect(TestData.Filters).to.be.an.instanceof(Filters);
      expect(TestData.Incidents).to.be.an.instanceof(Incidents);
    });
  });
});
