const { expect } = require('chai');
const moxios = require('moxios');
const { RealTime } = require('../../../../cjs/data/resources/real_time');

/** @test {RealTime} */
describe('Unit::RealTime', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const realTimeInstance = new RealTime(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(realTimeInstance.http);
  });

  afterEach(() => {
    moxios.uninstall(realTimeInstance.http);
  });

  /** @test {RealTime} */
  describe('RealTime', () => {
    /** @test {RealTime} */
    it('throws an error if an api key is not given', () => {
      expect(() => new RealTime()).to.throw(
        'API Access Token must be provided.'
      );
    });

    /** @test {RealTime} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new RealTime(testApiKey)).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {RealTime} */
    it('creates a new RealTime instance', () => {
      const TestMetrics = new RealTime(testApiKey, testSecret);
      expect(() => new RealTime(testApiKey, testSecret)).to.not.throw();
      expect(TestMetrics.tokenId).to.equal(testApiKey);
      expect(TestMetrics.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {RealTime.breakdown} */
  describe('RealTime.breakdown', () => {
    /** @test {RealTime.breakdown} */
    it('throws an error if the value query parameter is not provided', () => {
      expect(() => realTimeInstance.breakdown()).to.throw(
        'A metric Id is required for real-time breakdown information'
      );
      expect(() => realTimeInstance.breakdown({})).to.throw(
        'The dimension query parameter is required for real-time breakdown information'
      );
    });
  });

  /** @test {RealTime.histogramTimeseries} */
  describe('RealTime.histogramTimeseries', () => {
    /** @test {RealTime.histogramTimeseries} */
    it('throws an error if the value query parameter is not provided', () => {
      expect(() => realTimeInstance.histogramTimeseries()).to.throw(
        'A metric Id is required for real-time histogram timeseries information'
      );
    });
  });

  /** @test {RealTime.timeseries} */
  describe('RealTime.timeseries', () => {
    /** @test {RealTime.timeseries} */
    it('throws an error if the value query parameter is not provided', () => {
      expect(() => realTimeInstance.timeseries()).to.throw(
        'A metric Id is required for real-time timeseries information'
      );
    });
  });
});
