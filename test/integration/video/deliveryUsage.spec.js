const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs').default;

/** @test {DeliveryUsage} */
describe('Integration::DeliveryUsage', () => {
  const muxClient = new Mux();
  const { Video } = muxClient;

  /** @test {DeliveryUsage.list} */
  describe('DeliveryUsage.list', () => {
    /** @test {DeliveryUsage.list} */
    it('lists all delivery usage for a timeframe', async () => {
      const { nockDone } = await nockBack('DeliveryUsage/list.json');
      const usage = await Video.DeliveryUsage.list({
        timeframe: [],
        page: 2,
        limit: 100,
      });
      expect(usage).to.be.an('array');
      nockDone();
    });
  });
});
