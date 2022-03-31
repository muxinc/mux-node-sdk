const { expect } = require('chai');
const moxios = require('moxios');
const { Filters } = require('../../../../cjs/data/resources/filters');

/** @test {Filters} */
describe('Unit::Filters', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const filtersInstance = new Filters(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(filtersInstance.http);
  });

  afterEach(() => {
    moxios.uninstall(filtersInstance.http);
  });

  /** @test {Filters} */
  describe('Filters', () => {
    /** @test {Filters} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Filters()).to.throw(
        'API Access Token must be provided.'
      );
    });

    /** @test {Filters} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Filters(testApiKey)).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Filters} */
    it('creates a new Filters instance', () => {
      const TestFilters = new Filters(testApiKey, testSecret);
      expect(() => new Filters(testApiKey, testSecret)).to.not.throw();
      expect(TestFilters.tokenId).to.equal(testApiKey);
      expect(TestFilters.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {Filters.get} */
  describe('Filters.get', () => {
    /** @test {Filters.get} */
    it('throws an error if a filter Id is not provided', () => {
      expect(() => filtersInstance.get()).to.throw(
        'Filter Id is required to get filter information.'
      );
    });
  });
});
