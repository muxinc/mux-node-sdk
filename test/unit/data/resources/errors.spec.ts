import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';
import Errors from '../../../../src/data/resources/errors';

/** @test {Errors} */
describe('Unit::Errors', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const errorsInstance = new Errors(testApiKey, testSecret);

  // TODO: Figure out why axios and moxios don't match
  beforeEach(() => {
    moxios.install(errorsInstance.http as any);
  });

  afterEach(() => {
    moxios.uninstall(errorsInstance.http as any);
  });

  /** @test {Errors} */
  describe('Errors', () => {
    /** @test {Errors} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Errors()).to.throw('API Access Token must be provided.');
    });

    /** @test {Errors} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Errors(testApiKey)).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Errors} */
    it('creates a new Errors instance', () => {
      const TestErrors = new Errors(testApiKey, testSecret);
      expect(() => new Errors(testApiKey, testSecret)).to.not.throw();
      expect(TestErrors.tokenId).to.equal(testApiKey);
      expect(TestErrors.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {Errors.list} */
  describe('Errors.list', () => {
    /** @test {Errors.list} */
    it('makes a get request to the Mux data errors route', done => {
      moxios.stubRequest('https://api.mux.com/data/v1/errors', {
        status: 200,
        responseText: '{"data": {"errors": true}}',
      });

      const onFulfilled = sinon.spy();
      errorsInstance.list({}).then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].errors).to.be.true;
        done();
      });
    });
  });
});
