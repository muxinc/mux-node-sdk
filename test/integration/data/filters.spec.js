require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../src/mux');

/** @test {Filters} */
describe('Integration::Errors', () => {
  const muxClient = new Mux(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);
  const { Data } = muxClient;

  /** @test {Filters.list} */
  describe('Filters.list', () => {
    /** @test {Filters.list} */
    it('Lists all the filters broken out into basic and advanced', () => (
      Data.filters.list()
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

  /** @test {Filters.get} */
  describe('Filters.get', () => {
    /** @test {Filters.get} */
    it('Lists the values for a filter along with a total count of related views', () => (
      Data.filters.get('browser')
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
