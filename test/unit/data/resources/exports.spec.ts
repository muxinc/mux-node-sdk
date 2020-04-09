import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';
import Exports from '../../../../src/data/resources/exports';

/** @test {Exports} */
describe('Unit::Exports', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const exportsInstance = new Exports(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(exportsInstance.http);
  });

  afterEach(() => {
    moxios.uninstall(exportsInstance.http);
  });

  /** @test {Exports} */
  describe('Exports', () => {
    /** @test {Exports} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Exports()).to.throw(
        'API Access Token must be provided.'
      );
    });

    /** @test {Exports} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Exports(testApiKey)).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Exports} */
    it('creates a new Exports instance', () => {
      const TestExports = new Exports(testApiKey, testSecret);
      expect(() => new Exports(testApiKey, testSecret)).to.not.throw();
      expect(TestExports.tokenId).to.equal(testApiKey);
      expect(TestExports.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {Exports.list} */
  describe('Exports.list', () => {
    /** @test {Exports.list} */
    it('makes a get request to the Mux data exports route', done => {
      moxios.stubRequest('https://api.mux.com/data/v1/exports', {
        status: 200,
        responseText: '{"data": {"exports": true}}',
      });

      const onFulfilled = sinon.spy();
      exportsInstance.list({}).then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].exports).to.be.true;
        done();
      });
    });
  });
});
