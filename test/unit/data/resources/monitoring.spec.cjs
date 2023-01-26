const { expect } = require('chai');
const moxios = require('moxios');
const { Monitoring } = require('../../../../dist/data/resources/monitoring');

/** @test {Monitoring} */
describe('Unit::Monitoring', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const monitoringInstance = new Monitoring(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(monitoringInstance.http);
  });

  afterEach(() => {
    moxios.uninstall(monitoringInstance.http);
  });

  /** @test {Monitoring} */
  describe('Monitoring', () => {
    /** @test {Monitoring} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Monitoring()).to.throw(
        'API Access Token must be provided.'
      );
    });

    /** @test {Monitoring} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Monitoring(testApiKey)).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Monitoring} */
    it('creates a new Monitoring instance', () => {
      const TestMetrics = new Monitoring(testApiKey, testSecret);
      expect(() => new Monitoring(testApiKey, testSecret)).to.not.throw();
      expect(TestMetrics.tokenId).to.equal(testApiKey);
      expect(TestMetrics.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {Monitoring.breakdown} */
  describe('Monitoring.breakdown', () => {
    /** @test {Monitoring.breakdown} */
    it('throws an error if the value query parameter is not provided', () => {
      expect(() => monitoringInstance.breakdown()).to.throw(
        'A metric Id is required for monitoring breakdown information'
      );
      expect(() => monitoringInstance.breakdown({})).to.throw(
        'The dimension query parameter is required for monitoring breakdown information'
      );
    });
  });

  /** @test {Monitoring.histogramTimeseries} */
  describe('Monitoring.histogramTimeseries', () => {
    /** @test {Monitoring.histogramTimeseries} */
    it('throws an error if the value query parameter is not provided', () => {
      expect(() => monitoringInstance.histogramTimeseries()).to.throw(
        'A metric Id is required for monitoring histogram timeseries information'
      );
    });
  });

  /** @test {Monitoring.timeseries} */
  describe('Monitoring.timeseries', () => {
    /** @test {Monitoring.timeseries} */
    it('throws an error if the value query parameter is not provided', () => {
      expect(() => monitoringInstance.timeseries()).to.throw(
        'A metric Id is required for monitoring timeseries information'
      );
    });
  });
});
