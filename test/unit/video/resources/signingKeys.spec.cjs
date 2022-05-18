const { expect } = require('chai');
const sinon = require('sinon');
const moxios = require('moxios');
const { SigningKeys } = require('../../../../cjs/video/resources/signingKeys');

/** @test {SigningKeys} */
describe('Unit::SigningKeys', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testSigningKeys = new SigningKeys(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(testSigningKeys.http);
  });

  afterEach(() => {
    moxios.uninstall(testSigningKeys.http);
  });

  /** @test {SigningKeys.get} */
  describe('SigningKeys.get', () => {
    /** @test {SigningKeys.get} */
    it('throws an error when an key id is not given', () =>
      testSigningKeys
        .get()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.include('An signing key ID is required.');
        }));
  });

  /** @test {SigningKeys.del} */
  describe('SigningKeys.del', () => {
    /** @test {SigningKeys.del} */
    it('throws an error when an key id is not given', () =>
      testSigningKeys.del().catch((err) => {
        expect(err).to.exist;
        expect(err.message).to.include('An signing key ID is required.');
      }));
  });

  /** @test {SigningKeys.list} */
  describe('SigningKeys.list', () => {
    /** @test {SigningKeys.list} */
    it('makes a GET request to list 100 signing keys offset by 2 pages', (done) => {
      moxios.stubRequest('/video/v1/signing-keys?limit=100&page=2', {
        status: 200,
        responseText: '{"data": {"list": true}}',
      });

      const onFulfilled = sinon.spy();
      testSigningKeys.list({ limit: 100, page: 2 }).then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].list).to.be.true;
        done();
      });
    });
  });
});
