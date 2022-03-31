const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs');

/** @test {Metrics} */
describe('Integration::Metrics', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Metrics.breakdown} */
  describe('Metrics.breakdown', () => {
    /** @test {Metrics.breakdown} */
    it('Lists all of the values across every breakdown for a specific metric', async () => {
      const { nockDone } = await nockBack('Metrics/breakdown.json');
      const resp = await Data.Metrics.breakdown('aggregate_startup_time', {
        group_by: 'browser',
      });
      expect(resp.data).to.be.an('array');
      expect(resp.timeframe).to.be.an('array');
      nockDone();
    });
  });

  /** @test {Metrics.comparision} */
  describe('Metrics.comparision', () => {
    /** @test {Metrics.comparision} */
    it('Lists the breakdown values for a specific metric', async () => {
      const { nockDone } = await nockBack('Metrics/comparison.json');
      const resp = await Data.Metrics.comparison({
        value: 'Safari',
        dimension: 'browser',
      });
      expect(resp.data).to.be.an('array');
      expect(resp.timeframe).to.be.an('array');
      nockDone();
    });
  });

  /** @test {Metrics.insights} */
  describe('Metrics.insights', () => {
    /** @test {Metrics.insights} */
    it('Returns a list of insights for a metric', async () => {
      const { nockDone } = await nockBack('Metrics/insights.json');
      const resp = await Data.Metrics.insights('video_startup_time');
      expect(resp.data).to.be.an('array');
      expect(resp.timeframe).to.be.an('array');
      nockDone();
    });
  });

  /** @test {Metrics.overall} */
  describe('Metrics.overall', () => {
    /** @test {Metrics.overall} */
    it('Returns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric', async () => {
      const { nockDone } = await nockBack('Metrics/overall.json');
      const resp = await Data.Metrics.overall('video_startup_time');
      expect(resp.data).to.be.an('object');
      expect(resp.timeframe).to.be.an('array');
      nockDone();
    });
  });

  /** @test {Metrics.timeseries} */
  describe('Metrics.timeseries', () => {
    /** @test {Metrics.timeseries} */
    it('Returns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric', async () => {
      const { nockDone } = await nockBack('Metrics/timeseries.json');
      const resp = await Data.Metrics.timeseries('video_startup_time');
      expect(resp.data).to.be.an('array');
      expect(resp.timeframe).to.be.an('array');
      nockDone();
    });
  });
});
