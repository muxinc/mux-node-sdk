import { expect } from 'chai';
import * as Mux from '../../../src/mux';

/** @test {VideoViews} */
describe('Integration::VideoViews', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {VideoViews.list} */
  describe('VideoViews.list', () => {
    /** @test {VideoViews.list} */
    it('Returns a list of video views for a property that occurred within the specified timeframe', async () => {
      const views = await Data.VideoViews.list({
        viewer_id: 'test',
        order_direction: 'asc',
      });
      expect(views).to.be.an('array');
    });
  });

  /** @test {VideoViews.get} */
  describe('VideoViews.get', () => {
    /** @test {VideoViews.get} */
    it('Returns the details for a single video view', async () => {
      const view = await Data.VideoViews.get(process.env.MUX_VIDEO_VIEW_ID);
      expect(view).to.be.an('object');
    });
  });
});
