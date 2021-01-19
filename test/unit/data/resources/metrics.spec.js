const { expect } = require('chai');
const moxios = require('moxios');
const sinon = require('sinon');
const Metrics = require('../../../../src/data/resources/metrics');

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

  /** @test {Metrics.breakdown} */
  // describe('Metrics.breakdown', () => {
  //   /** @test {Metrics.breakdown} */
  //   it('makes a get request to the Mux data breakdown route', done => {
  //     moxios.stubRequest(
  //       'https://api.mux.com/data/v1/metrics/testMetric/breakdown',
  //       {
  //         status: 200,
  //         responseText: '{"data": {"breakdown": true}}',
  //       }
  //     );

  //     const onFulfilled = sinon.spy();
  //     metricsInstance.breakdown('testMetric', {}).then(onFulfilled);

  //     return moxios.wait(() => {
  //       expect(onFulfilled.getCall(0).args[0].data.breakdown).to.be.true;
  //       done();
  //     });
  //   });
  // });

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

    /** @test {Metrics.comparison} */
    // it('makes a get request to the Mux data comparision route', done => {
    //   moxios.stubRequest(
    //     'https://api.mux.com/data/v1/metrics/comparison?value=abc123',
    //     {
    //       status: 200,
    //       responseText: '{"data": {"comparison": true}}',
    //     }
    //   );

    //   const onFulfilled = sinon.spy();
    //   metricsInstance.comparison({ value: 'abc123' }).then(onFulfilled);

    //   return moxios.wait(() => {
    //     expect(onFulfilled.getCall(0).args[0].data.comparison).to.be.true;
    //     done();
    //   });
    // });
  });

  /** @test {Metrics.insights} */
  describe('Metrics.insights', () => {
    /** @test {Metrics.insights} */
    it('throws an error if a metric Id is not provided', () => {
      expect(() => metricsInstance.insights()).to.throw(
        'A metric Id is required for insight metrics.'
      );
    });

    /** @test {Metrics.insights} */
    // it('makes a get request to the Mux data insights route', done => {
    //   moxios.stubRequest(
    //     'https://api.mux.com/data/v1/metrics/testMetric/insights',
    //     {
    //       status: 200,
    //       responseText: '{"data": {"insights": true}}',
    //     }
    //   );

    //   const onFulfilled = sinon.spy();
    //   metricsInstance.insights('testMetric').then(onFulfilled);

    //   return moxios.wait(() => {
    //     expect(onFulfilled.getCall(0).args[0].data.insights).to.be.true;
    //     done();
    //   });
    // });
  });

  /** @test {Metrics.overall} */
  describe('Metrics.overall', () => {
    /** @test {Metrics.overall} */
    it('throws an error if a metric Id is not provided', () => {
      expect(() => metricsInstance.overall()).to.throw(
        'A metric Id is required for overall metrics.'
      );
    });

    /** @test {Metrics.overall} */
    // it('makes a get request to the Mux data overall route', done => {
    //   moxios.stubRequest(
    //     'https://api.mux.com/data/v1/metrics/testMetric/overall',
    //     {
    //       status: 200,
    //       responseText: '{"data": {"overall": true}}',
    //     }
    //   );

    //   const onFulfilled = sinon.spy();
    //   metricsInstance.overall('testMetric', {}).then(onFulfilled);

    //   return moxios.wait(() => {
    //     expect(onFulfilled.getCall(0).args[0].data.overall).to.be.true;
    //     done();
    //   });
    // });
  });

  /** @test {Metrics.timeseries} */
  describe('Metrics.timeseries', () => {
    /** @test {Metrics.timeseries} */
    it('throws an error if a metric Id is not provided', () => {
      expect(() => metricsInstance.timeseries()).to.throw(
        'A metric Id is required for timeseries metrics.'
      );
    });

    /** @test {Metrics.timeseries} */
    it('makes a get request to the Mux data timeseries route', done => {
      moxios.stubRequest(
        'https://api.mux.com/data/v1/metrics/testMetric/timeseries',
        {
          status: 200,
          responseText: '{"data": {"timeseries": true}}',
        }
      );

      const onFulfilled = sinon.spy();
      metricsInstance.timeseries('testMetric', {}).then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data.timeseries).to.be.true;
        done();
      });
    });
  });
});
