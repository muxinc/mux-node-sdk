require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../src/mux');

/** @test {Metrics} */
describe('Integration::Metrics', () => {
  const muxClient = new Mux(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);
  const { Data } = muxClient;

  /** @test {Metrics.breakdown} */
  describe('Metrics.breakdown', () => {
    /** @test {Metrics.breakdown} */
    it('Lists all of the values across every breakdown for a specific metric', () => (
      Data.metrics.breakdown('aggregate_startup_time', { group_by: 'browser' })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });

  /** @test {Metrics.comparision} */
  describe('Metrics.comparision', () => {
    /** @test {Metrics.comparision} */
    it('Lists the breakdown values for a specific metric', () => (
      Data.metrics.comparison({ dimension: 'browser' })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });

  /** @test {Metrics.insights} */
  describe('Metrics.insights', () => {
    /** @test {Metrics.insights} */
    it('Returns a list of insights for a metric', () => (
      Data.metrics.insights('video_startup_time')
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });

  /** @test {Metrics.overall} */
  describe('Metrics.overall', () => {
    /** @test {Metrics.overall} */
    it('Returns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric', () => (
      Data.metrics.overall('video_startup_time')
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });

  /** @test {Metrics.timeseries} */
  describe('Metrics.timeseries', () => {
    /** @test {Metrics.timeseries} */
    it('Returns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric', () => (
      Data.metrics.timeseries('video_startup_time')
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });
});
