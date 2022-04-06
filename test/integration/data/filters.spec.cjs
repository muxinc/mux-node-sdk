const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs');

/** @test {Filters} */
describe('Integration::Filters', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Filters.list} */
  describe('Filters.list', () => {
    /** @test {Filters.list} */
    it('Lists all the filters broken out into basic and advanced', async () => {
      const { nockDone } = await nockBack('Filters/list.json');
      const resp = await Data.Filters.list();
      expect(resp.timeframe).to.be.an('array');
      expect(resp.data.basic).to.be.an('array');
      expect(resp.data.advanced).to.be.an('array');
      nockDone();
    });
  });

  /** @test {Filters.get} */
  describe('Filters.get', () => {
    /** @test {Filters.get} */
    it('Lists the values for a filter along with a total count of related views', async () => {
      const { nockDone } = await nockBack('Filters/get.json');
      const resp = await Data.Filters.get('browser');
      expect(resp.data).to.be.an('array');
      expect(resp.timeframe).to.be.an('array');
      nockDone();
    });
  });
});
