const { expect } = require('chai');
const moxios = require('moxios');
const sinon = require('sinon');
const api = require('../../../src/utils/api');

/** @test {api} */
describe('Unit::api', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  /** @test {api} */
  describe('api.get', () => {
    /** @test {api.get} */
    it('makes a get request', (done) => {
      moxios.stubRequest('https://api.mux.com/data/v1', {
        status: 200,
        responseText: 'success',
      });

      const onFulfilled = sinon.spy();
      api.get('/data/v1', {}, {})
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('success');
        done();
      });
    });
  });

  describe('api.post', () => {
    /** @test {api.post} */
    it('makes a post request', (done) => {
      moxios.stubRequest('https://api.mux.com/data/v1', {
        status: 200,
        responseText: 'success',
      });

      const onFulfilled = sinon.spy();
      api.post('/data/v1', {}, {})
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('success');
        done();
      });
    });
  });

  describe('api.put', () => {
    /** @test {api.put} */
    it('makes a put request', (done) => {
      moxios.stubRequest('https://api.mux.com/data/v1', {
        status: 200,
        responseText: 'success',
      });

      const onFulfilled = sinon.spy();
      api.put('/data/v1', {}, {})
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('success');
        done();
      });
    });
  });

  describe('api.del', () => {
    /** @test {api.del} */
    it('makes a delete request', (done) => {
      moxios.stubRequest('https://api.mux.com/data/v1', {
        status: 200,
        responseText: 'success',
      });

      const onFulfilled = sinon.spy();
      api.del('/data/v1', {})
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('success');
        done();
      });
    });
  });
});
