const { expect } = require('chai');
const sinon = require('sinon');
const moxios = require('moxios');
const Assets = require('../../../../src/video/resources/assets');
const api = require('../../../../src/utils/api');

/** @test {Assets} */
describe('Unit::Assets', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testAssets = new Assets(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  /** @test {Assets} */
  describe('Assets', () => {
    /** @test {Assets} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Assets()).to.throw('API Access Token must be provided.');
    });

    /** @test {Assets} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Assets('testKey')).to.throw('API secret key must be provided');
    });

    /** @test {Assets} */
    it('creates a new Assets instance', () => {
      const TestAssets = new Assets(testApiKey, testSecret);
      expect(() => new Assets(testApiKey, testSecret)).to.not.throw();
      expect(TestAssets.requestOptions.auth.username).to.equal(testApiKey);
      expect(TestAssets.requestOptions.auth.password).to.equal(testSecret);
    });
  });

  /** @test {Assets.create} */
  describe('Assets.create', () => {
    before(() => {
      sinon.stub(api, 'post');
    });

    after(() => {
      api.post.restore();
    });

    /** @test {Assets.create} */
    it('makes a POST request to create an asset', () => {
      testAssets.create({ input: 'http://test.mov' });
      expect(api.post.calledOnce);
    });

    /** @test {Assets.create} */
    it('throws an error if no asset params are given', () => (
      testAssets.create()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('Params are required for creating an asset');
        })
    ));
  });

  /** @test {Assets.get} */
  describe('Assets.get', () => {
    /** @test {Assets.get} */
    it('makes a GET request to get an asset', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/assets/testAsset', {
        status: 200,
        responseText: 'asset',
      });

      const onFulfilled = sinon.spy();
      testAssets.get('testAsset')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(api.get.calledOnce);
        expect(onFulfilled.getCall(0).args[0].data).to.equal('asset');
        done();
      });
    });

    /** @test {Assets.get} */
    it('throws an error when an asset id is not given', () => (
      testAssets.get()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('An asset ID is required to get an asset');
        })
    ));
  });

  /** @test {Assets.deleteAsset} */
  describe('Assets.deleteAsset', () => {
    /** @test {Assets.deleteAsset} */
    it('makes a DELETE request to delete an asset', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/assets/testAsset', {
        status: 200,
        responseText: 'delete asset',
      });

      const onFulfilled = sinon.spy();
      testAssets.deleteAsset('testAsset')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(api.del.calledOnce);
        expect(onFulfilled.getCall(0).args[0].data).to.equal('delete asset');
        done();
      });
    });

    /** @test {Assets.deleteAsset} */
    it('throws an error when an asset id is not given', () => (
      testAssets.deleteAsset()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('An asset ID is required to delete an asset');
        })
    ));
  });

  /** @test {Assets.inputInfo} */
  describe('Assets.inputInfo', () => {
    /** @test {Assets.inputInfo} */
    it('makes a GET request to get input info for an asset', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/assets/testAsset/input-info', {
        status: 200,
        responseText: 'input info',
      });

      const onFulfilled = sinon.spy();
      testAssets.inputInfo('testAsset')
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(api.get.calledOnce);
        expect(onFulfilled.getCall(0).args[0].data).to.equal('input info');
        done();
      });
    });

    /** @test {Assets.inputInfo} */
    it('throws an error when an asset id is not given', () => (
      testAssets.inputInfo()
        .then((res) => {
          expect(res).to.not.exist;
        })
        .catch((err) => {
          expect(err).to.exist;
          expect(err.message).to.equal('An asset ID is required to get input-info');
        })
    ));
  });

  /** @test {Assets.list} */
  describe('Assets.list', () => {
    /** @test {Assets.list} */
    it('makes a GET request to list all assets', (done) => {
      moxios.stubRequest('https://api.mux.com/video/v1/assets', {
        status: 200,
        responseText: 'list',
      });

      const onFulfilled = sinon.spy();
      testAssets.list()
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(api.get.calledOnce);
        expect(onFulfilled.getCall(0).args[0].data).to.equal('list');
        done();
      });
    });
  });
});
