import { expect } from 'chai';
import * as Mux from '../../../src/mux';

/** @test {Errors} */
describe('Integration::Errors', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Errors.list} */
  describe('Errors.list', () => {
    /** @test {Errors.list} */
    it('Returns a list of playback errors', async () => {
      const errors = await Data.Errors.list({
        filters: ['operating_system:windows'],
      });
      expect(errors).to.be.an('array');
    });
  });
});
