const { expect } = require('chai');
const Mux = require('../../../src/mux');

/** @test {Exports} */
describe('Integration::Exports', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Exports.list} */
  describe('Exports.list', () => {
    /** @test {Exports.list} */
    it('Lists the available video view exports along with URLs to retrieve them', async () => {
      const resp = await Data.Exports.list();
      expect(resp.data).to.be.an('array');
      expect(resp.total_row_count).to.eq(8);
      expect(resp.timeframe).to.be.an('array');
    });
  });
});
