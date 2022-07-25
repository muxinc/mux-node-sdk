const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../dist/mux.js');

/** @test {Dimensions} */
describe('Integration::Dimensions', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Dimensions.list} */
  describe('Dimensions.list', () => {
    /** @test {Filters.list} */
    it('Lists all the dimensions broken out into basic and advanced', async () => {
      const { nockDone } = await nockBack('Dimensions/list.json');
      const resp = await Data.Dimensions.list();
      expect(resp.timeframe).to.be.an('array');
      expect(resp.data.basic).to.be.an('array');
      expect(resp.data.advanced).to.be.an('array');
      nockDone();
    });
  });

  /** @test {Dimensions.get} */
  describe('Dimensions.get', () => {
    /** @test {Dimensions.get} */
    it('Lists the values for a dimension along with a total count of related views', async () => {
      const { nockDone } = await nockBack('Dimensions/get.json');
      const resp = await Data.Dimensions.get('browser');
      expect(resp.data).to.be.an('array');
      expect(resp.timeframe).to.be.an('array');
      nockDone();
    });
  });
});
