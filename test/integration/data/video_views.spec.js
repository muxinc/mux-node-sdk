const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs').default;

/** @test {VideoViews} */
describe('Integration::VideoViews', () => {
  const muxClient = new Mux();
  const { Data } = muxClient;

  /** @test {VideoViews.list} */
  describe('VideoViews.list', () => {
    /** @test {VideoViews.list} */
    it('Returns a list of video views for a property that occurred within the specified timeframe', async () => {
      const { nockDone } = await nockBack('VideoViews/list.json');
      const resp = await Data.VideoViews.list({
        viewer_id: 'test',
        order_direction: 'asc',
      });
      expect(resp.data).to.be.an('array');
      nockDone();
    });
  });

  /** @test {VideoViews.get} */
  describe('VideoViews.get', () => {
    /** @test {VideoViews.get} */
    it('Returns the details for a single video view', async () => {
      const { nockDone } = await nockBack('VideoViews/listAndGet.json');
      const resp = await Data.VideoViews.list();
      const view = await Data.VideoViews.get(resp.data[0].id);
      expect(view).to.be.an('object');
      nockDone();
    });
  });
});
