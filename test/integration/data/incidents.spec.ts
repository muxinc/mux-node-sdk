import { expect } from 'chai';
import Mux from '../../../src/mux';

/** @test {Incidents} */
describe('Integration::Incidents', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Incidents.list} */
  describe('Incidents.list', () => {
    /** @test {Incidents.list} */
    it('Returns a list of open incidents', async () => {
      const incidents = await Data.Incidents.list({
        status: 'open',
      });
      expect(incidents).to.be.an('array');
    });
  });
});
