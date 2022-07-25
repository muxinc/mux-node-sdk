const { expect } = require('chai');
const moxios = require('moxios');
const { Dimensions } = require('../../../../dist/data/resources/dimensions');

/** @test {Dimensions} */
describe('Unit::Dimensions', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const dimensionsInstance = new Dimensions(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(dimensionsInstance.http);
  });

  afterEach(() => {
    moxios.uninstall(dimensionsInstance.http);
  });

  /** @test {Dimensions} */
  describe('Dimensions', () => {
    /** @test {Dimensions} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Dimensions()).to.throw(
        'API Access Token must be provided.'
      );
    });

    /** @test {Dimensions} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Dimensions(testApiKey)).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Dimensions} */
    it('creates a new Dimensions instance', () => {
      const TestDimensions = new Dimensions(testApiKey, testSecret);
      expect(() => new Dimensions(testApiKey, testSecret)).to.not.throw();
      expect(TestDimensions.tokenId).to.equal(testApiKey);
      expect(TestDimensions.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {Dimensions.get} */
  describe('Dimentions.get', () => {
    /** @test {Dimensions.get} */
    it('throws an error if a dimention Id is not provided', () => {
      expect(() => dimensionsInstance.get()).to.throw(
        'Dimension Id is required to get dimension information.'
      );
    });
  });
});
