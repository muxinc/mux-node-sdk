const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs').default;

/** @test {Exports} */
describe('Integration::Exports', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Exports.list} */
  describe('Exports.list', () => {
    /** @test {Exports.list} */
    it('Lists the available video view exports along with URLs to retrieve them', async () => {
      const { nockDone } = await nockBack('Exports/list.json');
      const resp = await Data.Exports.list();
      expect(resp.data).to.be.an('array');
      expect(resp.total_row_count).to.be.greaterThan(6); // we should have 7 or 8
      expect(resp.timeframe).to.be.an('array');
      nockDone();
    });
  });
});
