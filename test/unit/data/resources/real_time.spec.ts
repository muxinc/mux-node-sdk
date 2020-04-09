import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';
import RealTime from '../../../../src/data/resources/real_time';

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

  /** @test {RealTime.dimensions} */
  describe('RealTime.dimensions', () => {
    /** @test {RealTime.dimensions} */
    it('makes a get request to the Mux data real-time dimensions route', done => {
      moxios.stubRequest('https://api.mux.com/data/v1/realtime/dimensions', {
        status: 200,
        responseText: '{"data": {"name": "asn", "display_name": "ASN"}}',
      });

      const onFulfilled = sinon.spy();
      realTimeInstance.dimensions().then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].name).to.equal('asn');
        done();
      });
    });
  });

  /** @test {RealTime.metrics} */
  describe('RealTime.metrics', () => {
    /** @test {RealTime.metrics} */
    it('makes a get request to the Mux data real-time metrics route', done => {
      moxios.stubRequest('https://api.mux.com/data/v1/realtime/metrics', {
        status: 200,
        responseText:
          '{"data": {"name": "current-concurrent-viewers", "display_name": "Current Concurrent Viewers (CCV)" }}',
      });

      const onFulfilled = sinon.spy();
      realTimeInstance.metrics().then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].name).to.equal(
          'current-concurrent-viewers'
        );
        done();
      });
    });
  });

  /** @test {RealTime.breakdown} */
  describe('RealTime.breakdown', () => {
    /** @test {RealTime.breakdown} */
    it('throws an error if the value query parameter is not provided', () => {
      expect(() => realTimeInstance.breakdown(undefined as any, undefined as any)).to.throw(
        'A metric Id is required for real-time breakdown information'
      );
      expect(() => realTimeInstance.breakdown({} as any)).to.throw(
        'The dimension query parameter is required for real-time breakdown information'
      );
    });

    /** @test {RealTime.breakdown} */
    it('makes a get request to the Mux data real-time metrics route', done => {
      moxios.stubRequest(
        'https://api.mux.com/data/v1/realtime/metrics/playback-failure-percentage/breakdown?dimension=country',
        {
          status: 200,
          responseText: '{"data": { "breakdown": true }}',
        }
      );

      const onFulfilled = sinon.spy();
      realTimeInstance
        .breakdown('playback-failure-percentage', { dimension: 'country' })
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].breakdown).to.be.true;
        done();
      });
    });
  });

  /** @test {RealTime.histogramTimeseries} */
  describe('RealTime.histogramTimeseries', () => {
    /** @test {RealTime.histogramTimeseries} */
    it('throws an error if the value query parameter is not provided', () => {
      expect(() => realTimeInstance.histogramTimeseries(undefined as any)).to.throw(
        'A metric Id is required for real-time histogram timeseries information'
      );
    });

    /** @test {RealTime.histogramTimeseries} */
    it('makes a get request to the Mux data real-time histogramTimeseries route', done => {
      moxios.stubRequest(
        'https://api.mux.com/data/v1/realtime/metrics/playback-failure-percentage/histogram-timeseries',
        {
          status: 200,
          responseText: '{"data": { "histogramTimeseries": true }}',
        }
      );

      const onFulfilled = sinon.spy();
      realTimeInstance
        .histogramTimeseries('playback-failure-percentage')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].histogramTimeseries).to.be.true;
        done();
      });
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

    /** @test {RealTime.timeseries} */
    it('makes a get request to the Mux data real-time timeseries route', done => {
      moxios.stubRequest(
        'https://api.mux.com/data/v1/realtime/metrics/playback-failure-percentage/timeseries',
        {
          status: 200,
          responseText: '{"data": { "timeseries": true }}',
        }
      );

      const onFulfilled = sinon.spy();
      realTimeInstance
        .timeseries('playback-failure-percentage')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].timeseries).to.be.true;
        done();
      });
    });
  });
});
