require('dotenv').config();
const { expect } = require('chai');
const sinon = require('sinon');
const Assets = require('../../../../src/video/resources/assets');
const api = require('../../../../src/utils/api');

/** @test {Assets} */
describe('Unit::Assets', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testAssets = new Assets(testApiKey, testSecret);

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
    before(() => {
      sinon.stub(api, 'get');
    });

    after(() => {
      api.get.restore();
    });

    /** @test {Assets.get} */
    it('makes a GET request to get an asset', () => {
      testAssets.get('somefakeasset');
      expect(api.get.calledOnce);
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
    before(() => {
      sinon.stub(api, 'del');
    });

    after(() => {
      api.del.restore();
    });

    /** @test {Assets.deleteAsset} */
    it('makes a DELETE request to delete an asset', () => {
      testAssets.deleteAsset('somefakeasset');
      expect(api.del.calledOnce);
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
    before(() => {
      sinon.stub(api, 'get');
    });

    after(() => {
      api.get.restore();
    });

    /** @test {Assets.inputInfo} */
    it('makes a GET rquest to get input info for an asset', () => {
      testAssets.inputInfo('somefakeasset');
      expect(api.get.calledOnce);
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
    before(() => {
      sinon.stub(api, 'get');
    });

    after(() => {
      api.get.restore();
    });

    /** @test {Assets.list} */
    it('makes a GET request to lists all assets for an environment', () => {
      testAssets.list();
      expect(api.get.calledOnce);
    });
  });
});
