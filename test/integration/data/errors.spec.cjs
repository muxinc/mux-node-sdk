const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs');

/** @test {Errors} */
describe('Integration::Errors', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Errors.list} */
  describe('Errors.list', () => {
    /** @test {Errors.list} */
    it('Returns a list of playback errors', async () => {
      const { nockDone } = await nockBack('Errors/list.json');
      const resp = await Data.Errors.list({
        filters: ['operating_system:linux'],
      });
      expect(resp.data).to.be.an('array');
      expect(resp.timeframe).to.be.an('array');
      nockDone();
    });
  });
});
