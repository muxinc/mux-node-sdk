import { expect } from 'chai';
import Mux from '../../../src/mux';

/** @test {Exports} */
describe('Integration::Errors', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Exports.list} */
  describe('Exports.list', () => {
    /** @test {Exports.list} */
    it('Lists the available video view exports along with URLs to retrieve them', async () => {
      const exports = await Data.Exports.list();
      expect(exports).to.be.an('array');
    });
  });
});
