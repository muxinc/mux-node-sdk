import { expect } from 'chai';
import * as Mux from '../../../src/mux';

/** @test {RealTime} */
describe('Integration::RealTime', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {RealTime.dimensions} */
  describe('RealTime.dimensions', () => {
    /** @test {RealTime.dimensions} */
    it('List of available real-time dimensions', async () => {
      const dimensions = await Data.RealTime.dimensions();
      expect(dimensions).to.be.an('array');
      expect(dimensions[0]).to.be.an('object');
    });
  });

  /** @test {RealTime.metrics} */
  describe('RealTime.metrics', () => {
    /** @test {RealTime.metrics} */
    it('List available real-time metrics', async () => {
      const metrics = await Data.RealTime.metrics();
      expect(metrics).to.be.an('array');
      expect(metrics[0]).to.be.an('object');
    });
  });

  /** @test {RealTime.breakdown} */
  describe('RealTime.breakdown', () => {
    /** @test {RealTime.breakdown} */
    it('Get breakdown information for a specific dimension and metric', async () => {
      const breakdown = await Data.RealTime.breakdown(
        'playback-failure-percentage',
        {
          dimension: 'asn',
          timestamp: Math.floor(new Date().getTime() / 1000),
          filters: ['operating_system:windows', 'country:US'],
        }
      );
      expect(breakdown).to.be.an('array');
    });
  });

  /** @test {RealTime.histogramTimeseries} */
  describe('RealTime.histogramTimeseries', () => {
    /** @test {RealTime.histogramTimeseries} */
    it('List histogram timeseries information for a specific metric', async () => {
      const histogramTimeseries = await Data.RealTime.histogramTimeseries(
        'video-startup-time',
        { filters: ['operating_system:windows', 'country:US'] }
      );
      expect(histogramTimeseries).to.be.an('array');
    });
  });

  /** @test {RealTime.timeseries} */
  describe('RealTime.timeseries', () => {
    /** @test {RealTime.timeseries} */
    it('List timeseries information for the playback-failure-percentage metric along with the number of concurrent viewers for the Windows operating system in the US', async () => {
      const timeseries = await Data.RealTime.timeseries(
        'playback-failure-percentage',
        { filters: ['operating_system:windows', 'country:US'] }
      );
      expect(timeseries).to.be.an('array');
    });
  });
});
