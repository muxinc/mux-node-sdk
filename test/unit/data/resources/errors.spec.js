const { expect } = require('chai');
const moxios = require('moxios');
const sinon = require('sinon');
const Errors = require('../../../../src/data/resources/errors');

/** @test {Errors} */
describe('Unit::Errors', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const errorsInstance = new Errors(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  /** @test {Errors} */
  describe('Errors', () => {
    /** @test {Errors} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Errors()).to.throw('API Access Token must be provided.');
    });

    /** @test {Errors} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Errors(testApiKey)).to.throw('API secret key must be provided');
    });

    /** @test {Errors} */
    it('creates a new Errors instance', () => {
      const TestErrors = new Errors(testApiKey, testSecret);
      expect(() => new Errors(testApiKey, testSecret)).to.not.throw();
      expect(TestErrors.requestOptions.auth.username).to.equal(testApiKey);
      expect(TestErrors.requestOptions.auth.password).to.equal(testSecret);
    });
  });

  /** @test {Errors.list} */
  describe('Errors.list', () => {
    /** @test {Errors.list} */
    it('makes a get request to the Mux data errors route', (done) => {
      moxios.stubRequest('https://api.mux.com/data/v1/errors', {
        status: 200,
        responseText: 'errors',
      });

      const onFulfilled = sinon.spy();
      errorsInstance.list({})
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data).to.equal('errors');
        done();
      });
    });
  });
});
