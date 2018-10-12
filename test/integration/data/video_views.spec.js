require('dotenv').config();
const { expect } = require('chai');
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
        .then(views => expect(views).to.be.an('array'))
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });

  /** @test {VideoViews.get} */
  describe('VideoViews.get', () => {
    /** @test {VideoViews.get} */
    it('Returns the details for a single video view', () => (
      Data.videoViews.get(process.env.MUX_VIDEO_VIEW_ID)
        .then(view => expect(view).to.be.an('object'))
        .catch((err) => {
          expect(err).to.equal(undefined);
        })
    ));
  });
});
