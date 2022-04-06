const { expect } = require('chai');
const moxios = require('moxios');
const { Metrics } = require('../../../../cjs/data/resources/metrics');

/** @test {Metrics} */
describe('Unit::Metrics', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const metricsInstance = new Metrics(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(metricsInstance.http);
  });

  afterEach(() => {
    moxios.uninstall(metricsInstance.http);
  });

  /** @test {Metrics} */
  describe('Metrics', () => {
    /** @test {Metrics} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Metrics()).to.throw(
        'API Access Token must be provided.'
      );
    });

    /** @test {Metrics} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Metrics(testApiKey)).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Metrics} */
    it('creates a new Metrics instance', () => {
      const TestMetrics = new Metrics(testApiKey, testSecret);
      expect(() => new Metrics(testApiKey, testSecret)).to.not.throw();
      expect(TestMetrics.tokenId).to.equal(testApiKey);
      expect(TestMetrics.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {Metrics.comparison} */
  describe('Metrics.comparison', () => {
    /** @test {Metrics.comparison} */
    it('throws an error if the value query parameter is not provided', () => {
      expect(() => metricsInstance.comparison()).to.throw(
        'The value query parameter is required for comparing metrics'
      );
      expect(() => metricsInstance.comparison({})).to.throw(
        'The value query parameter is required for comparing metrics'
      );
    });
  });

  /** @test {Metrics.insights} */
  describe('Metrics.insights', () => {
    /** @test {Metrics.insights} */
    it('throws an error if a metric Id is not provided', () => {
      expect(() => metricsInstance.insights()).to.throw(
        'A metric Id is required for insight metrics.'
      );
    });
  });

  /** @test {Metrics.overall} */
  describe('Metrics.overall', () => {
    /** @test {Metrics.overall} */
    it('throws an error if a metric Id is not provided', () => {
      expect(() => metricsInstance.overall()).to.throw(
        'A metric Id is required for overall metrics.'
      );
    });
  });

  /** @test {Metrics.timeseries} */
  describe('Metrics.timeseries', () => {
    /** @test {Metrics.timeseries} */
    it('throws an error if a metric Id is not provided', () => {
      expect(() => metricsInstance.timeseries()).to.throw(
        'A metric Id is required for timeseries metrics.'
      );
    });
  });
});
