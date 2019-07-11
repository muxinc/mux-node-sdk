const { expect } = require('chai');
const Mux = require('../../../src/mux');

/** @test {Metrics} */
describe('Integration::Metrics', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Metrics.breakdown} */
  describe('Metrics.breakdown', () => {
    /** @test {Metrics.breakdown} */
    it('Lists all of the values across every breakdown for a specific metric', async () => {
      const breakdown = await Data.Metrics.breakdown('aggregate_startup_time', {
        group_by: 'browser',
      });
      expect(breakdown).to.be.an('array');
    });
  });

  /** @test {Metrics.comparision} */
  describe('Metrics.comparision', () => {
    /** @test {Metrics.comparision} */
    it('Lists the breakdown values for a specific metric', async () => {
      const comparison = await Data.Metrics.comparison({
        value: 'Safari',
        dimension: 'browser',
      });
      expect(comparison).to.be.an('array');
    });
  });

  /** @test {Metrics.insights} */
  describe('Metrics.insights', () => {
    /** @test {Metrics.insights} */
    it('Returns a list of insights for a metric', async () => {
      const insights = await Data.Metrics.insights('video_startup_time');
      expect(insights).to.be.an('array');
    });
  });

  /** @test {Metrics.overall} */
  describe('Metrics.overall', () => {
    /** @test {Metrics.overall} */
    it('Returns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric', async () => {
      const overall = await Data.Metrics.overall('video_startup_time');
      expect(overall).to.be.an('object');
    });
  });

  /** @test {Metrics.timeseries} */
  describe('Metrics.timeseries', () => {
    /** @test {Metrics.timeseries} */
    it('Returns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric', async () => {
      const timeseries = await Data.Metrics.timeseries('video_startup_time');
      expect(timeseries).to.be.an('array');
    });
  });
});
