const { expect } = require('chai');
const Mux = require('../../../src/mux');

/** @test {Incidents} */
describe('Integration::Incidents', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Incidents.list} */
  describe('Incidents.list', () => {
    /** @test {Incidents.list} */
    it('Returns a list of open incidents', async () => {
      const resp = await Data.Incidents.list({
        status: 'open',
      });
      expect(resp.data).to.be.an('array');
      expect(resp.timeframe).to.be.an('array');
    });
  });
});
