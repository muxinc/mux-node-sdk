const { expect } = require('chai');
const moxios = require('moxios');
const sinon = require('sinon');
const api = require('../../../src/utils/api');

/** @test {Data.metrics} */
describe.only('Unit::Data.metrics', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  /** @test {Data.metrics} */
  describe('api', () => {
    /** @test {Data.metrics.breakdown} */
    it('makes a get request', (done) => {
      moxios.stubRequest('https://api.mux.com/data/v1/metrics', {
        status: 200,
        responseText: 'breakdown',
      });

      const onFulfilled = sinon.spy();
      api.get('/data/v1/metrics', {}, {})
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('breakdown');
        done();
      });
    });
  });
});
