require('dotenv').config();
const { expect } = require('chai');
const Mux = require('../../../src/mux');

/** @test {Errors} */
describe('Integration::Errors', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {Errors.list} */
  describe('Errors.list', () => {
    /** @test {Errors.list} */
    it('Returns a list of playback errors', () => (
      Data.errors.list({ filters: ['operating_system:windows'] })
        .then((errors) => {
          expect(errors).to.be.an('array');
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });
});
