const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../dist/mux.js');

/** @test {Monitoring} */
describe('Integration::Monitoring', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Monitoring.dimensions} */
  describe('Monitoring.dimensions', () => {
    /** @test {Monitoring.dimensions} */
    it('List of available monitoring dimensions', async () => {
      const { nockDone } = await nockBack('Monitoring/dimensions.json');
      const resp = await Data.Monitoring.dimensions();
      expect(resp.data).to.be.an('array');
      expect(resp.data[0]).to.be.an('object');
      nockDone();
    });
  });

  /** @test {Monitoring.metrics} */
  describe('Monitoring.metrics', () => {
    /** @test {Monitoring.metrics} */
    it('List available monitoring metrics', async () => {
      const { nockDone } = await nockBack('Monitoring/metrics.json');
      const resp = await Data.Monitoring.metrics();
      expect(resp.data).to.be.an('array');
      expect(resp.data[0]).to.be.an('object');
      nockDone();
    });
  });

  /** @test {Monitoring.breakdown} */
  describe('Monitoring.breakdown', () => {
    /** @test {Monitoring.breakdown} */
    it('Get breakdown information for a specific dimension and metric', async () => {
      const { nockDone } = await nockBack('Monitoring/breakdown.json');
      const timestamp = 1592357452; // freeze this time for nock
      const resp = await Data.Monitoring.breakdown(
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

  /** @test {Monitoring.histogramTimeseries} */
  describe('Monitoring.histogramTimeseries', () => {
    /** @test {Monitoring.histogramTimeseries} */
    it('List histogram timeseries information for a specific metric', async () => {
      const { nockDone } = await nockBack('Monitoring/histogramTimeseries.json');
      const resp = await Data.Monitoring.histogramTimeseries(
        'video-startup-time',
        { filters: ['operating_system:windows', 'country:US'] }
      );
      expect(resp.data).to.be.an('array');
      nockDone();
    });
  });

  /** @test {Monitoring.timeseries} */
  describe('Monitoring.timeseries', () => {
    /** @test {Monitoring.timeseries} */
    it('List timeseries information for the playback-failure-percentage metric along with the number of concurrent viewers for the Windows operating system in the US', async () => {
      const { nockDone } = await nockBack('Monitoring/timeseries.json');
      const resp = await Data.Monitoring.timeseries(
        'playback-failure-percentage',
        { filters: ['operating_system:windows', 'country:US'] }
      );
      expect(resp.data).to.be.an('array');
      nockDone();
    });
  });
});
