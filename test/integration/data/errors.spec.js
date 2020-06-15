const { expect } = require('chai');
const Mux = require('../../../src/mux');

/** @test {Errors} */
describe('Integration::Errors', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Errors.list} */
  describe('Errors.list', () => {
    /** @test {Errors.list} */
    it('Returns a list of playback errors', async () => {
      const resp = await Data.Errors.list({
        filters: ['operating_system:linux'],
      });
      expect(resp.data).to.be.an('array');
      expect(resp.timeframe).to.be.an('array');
    });
  });
});
