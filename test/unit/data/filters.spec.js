const { expect } = require('chai');
const moxios = require('moxios');
const sinon = require('sinon');
const Filters = require('../../../src/data/resources/filters');

/** @test {Filters} */
describe('Unit::Filters', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const filtersInstance = new Filters(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  /** @test {Filters} */
  describe('Filters', () => {
    /** @test {Filters} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Filters()).to.throw('API Access Token must be provided.');
    });

    /** @test {Filters} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Filters(testApiKey)).to.throw('API secret key must be provided');
    });

    /** @test {Filters} */
    it('creates a new Filters instance', () => {
      const TestFilters = new Filters(testApiKey, testSecret);
      expect(() => new Filters(testApiKey, testSecret)).to.not.throw();
      expect(TestFilters.requestOptions.auth.username).to.equal(testApiKey);
      expect(TestFilters.requestOptions.auth.password).to.equal(testSecret);
    });
  });

  /** @test {Filters.list} */
  describe('Filters.list', () => {
    /** @test {Filters.list} */
    it('makes a get request to the Mux data filters route', (done) => {
      moxios.stubRequest('https://api.mux.com/data/v1/filters', {
        status: 200,
        responseText: 'filters',
      });

      const onFulfilled = sinon.spy();
      filtersInstance.list({})
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('filters');
        done();
      });
    });
  });

  /** @test {Filters.get} */
  describe('Filters.get', () => {
    /** @test {Filters.get} */
    it('makes a get request to the Mux data filters route', (done) => {
      moxios.stubRequest('https://api.mux.com/data/v1/filters/someFilter', {
        status: 200,
        responseText: 'filters',
      });

      const onFulfilled = sinon.spy();
      filtersInstance.get('someFilter', {})
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('filters');
        done();
      });
    });
  });
});
