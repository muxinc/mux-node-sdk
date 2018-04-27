require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
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
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });
});
