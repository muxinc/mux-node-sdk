const { expect } = require('chai');
const Mux = require('../../../src/mux');

/** @test {Filters} */
describe('Integration::Errors', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Filters.list} */
  describe('Filters.list', () => {
    /** @test {Filters.list} */
    it('Lists all the filters broken out into basic and advanced', async () => {
      const filters = await Data.Filters.list();
      expect(filters.basic).to.be.an('array');
      expect(filters.advanced).to.be.an('array');
    });
  });

  /** @test {Filters.get} */
  describe('Filters.get', () => {
    /** @test {Filters.get} */
    it('Lists the values for a filter along with a total count of related views', async () => {
      const filters = await Data.Filters.get('browser');
      expect(filters).to.be.an('array');
    });
  });
});
