require('dotenv').config();
const { expect } = require('chai');
const Mux = require('../../../src/mux');

/** @test {Exports} */
describe('Integration::Errors', () => {
  const muxClient = new Mux(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);
  const { Data } = muxClient;

  /** @test {Exports.list} */
  describe('Exports.list', () => {
    /** @test {Exports.list} */
    it('Lists the available video view exports along with URLs to retrieve them', () => (
      Data.exports.list()
        .then((exports) => {
          expect(exports).to.be.an('array');
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });
});
