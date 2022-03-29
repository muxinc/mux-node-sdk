const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs').default;

/** @test {Incidents} */
describe('Integration::Incidents', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Incidents.list} */
  describe('Incidents.list', () => {
    /** @test {Incidents.list} */
    it('Returns a list of open incidents', async () => {
      const { nockDone } = await nockBack('Incidents/list.json');
      const resp = await Data.Incidents.list({
        status: 'open',
      });
      expect(resp.data).to.be.an('array');
      expect(resp.timeframe).to.be.an('array');
      nockDone();
    });
  });
});
