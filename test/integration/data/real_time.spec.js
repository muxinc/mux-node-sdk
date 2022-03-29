const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs').default;

/** @test {RealTime} */
describe('Integration::RealTime', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {RealTime.dimensions} */
  describe('RealTime.dimensions', () => {
    /** @test {RealTime.dimensions} */
    it('List of available real-time dimensions', async () => {
      const { nockDone } = await nockBack('RealTime/dimensions.json');
      const resp = await Data.RealTime.dimensions();
      expect(resp.data).to.be.an('array');
      expect(resp.data[0]).to.be.an('object');
      nockDone();
    });
  });

  /** @test {RealTime.metrics} */
  describe('RealTime.metrics', () => {
    /** @test {RealTime.metrics} */
    it('List available real-time metrics', async () => {
      const { nockDone } = await nockBack('RealTime/metrics.json');
      const resp = await Data.RealTime.metrics();
      expect(resp.data).to.be.an('array');
      expect(resp.data[0]).to.be.an('object');
      nockDone();
    });
  });

  /** @test {RealTime.breakdown} */
  describe('RealTime.breakdown', () => {
    /** @test {RealTime.breakdown} */
    it('Get breakdown information for a specific dimension and metric', async () => {
      const { nockDone } = await nockBack('RealTime/breakdown.json');
      const timestamp = 1592357452; // freeze this time for nock
      const resp = await Data.RealTime.breakdown(
        'playback-failure-percentage',
        {
          dimension: 'asn',
          timestamp,
          filters: ['operating_system:windows', 'country:US'],
        }
      );
      expect(resp.data).to.be.an('array');
      nockDone();
    });
  });

  /** @test {RealTime.histogramTimeseries} */
  describe('RealTime.histogramTimeseries', () => {
    /** @test {RealTime.histogramTimeseries} */
    it('List histogram timeseries information for a specific metric', async () => {
      const { nockDone } = await nockBack('RealTime/histogramTimeseries.json');
      const resp = await Data.RealTime.histogramTimeseries(
        'video-startup-time',
        { filters: ['operating_system:windows', 'country:US'] }
      );
      expect(resp.data).to.be.an('array');
      nockDone();
    });
  });

  /** @test {RealTime.timeseries} */
  describe('RealTime.timeseries', () => {
    /** @test {RealTime.timeseries} */
    it('List timeseries information for the playback-failure-percentage metric along with the number of concurrent viewers for the Windows operating system in the US', async () => {
      const { nockDone } = await nockBack('RealTime/timeseries.json');
      const resp = await Data.RealTime.timeseries(
        'playback-failure-percentage',
        { filters: ['operating_system:windows', 'country:US'] }
      );
      expect(resp.data).to.be.an('array');
      nockDone();
    });
  });
});
