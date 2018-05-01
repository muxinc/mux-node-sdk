require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../src/mux');

/** @test {VideoViews} */
describe('Integration::VideoViews', () => {
  const muxClient = new Mux(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);
  const { Data } = muxClient;

  /** @test {VideoViews.list} */
  describe('VideoViews.list', () => {
    /** @test {VideoViews.list} */
    it('Returns a list of video views for a property that occurred within the specified timeframe', () => (
      Data.videoViews.list({ viewer_id: 'test', order_direction: 'asc' })
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

  /** @test {VideoViews.get} */
  describe('VideoViews.get', () => {
    /** @test {VideoViews.get} */
    it('Returns the details for a single video view', () => (
      Data.videoViews.get('Jp95ZdDtM59p6eHEPoSd9oFBDdC8LljVlRWo')
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
