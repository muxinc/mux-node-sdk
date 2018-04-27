require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../src/mux');

/** @test {Errors} */
describe('Integration::Errors', () => {
  const muxClient = new Mux(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);
  const { Data } = muxClient;

  /** @test {Errors.list} */
  describe('Errors.list', () => {
    /** @test {Errors.list} */
    it('Returns a list of playback errors', () => (
      Data.errors.list({ filters: ['operating_system:windows'] })
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
