import { expect } from 'chai';
import { Mux } from '../../lib/mux.mjs';

/** @test {Mux} */
describe('ESM: Unit::Mux', () => {
  /** @test {Mux} */
  describe('Mux', () => {
    /** @test {Mux} */
    it('exposes Mux via ESM default', () => {
      const muxClient = new Mux('testKey', 'testSecret');

      expect(muxClient).to.be.an.instanceof(Mux);
    });
  });
});
