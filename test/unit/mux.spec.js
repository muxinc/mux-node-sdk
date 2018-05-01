const { expect } = require('chai');
const Mux = require('../../src/mux');
const MuxVideo = require('../../src/video/video');
const MuxData = require('../../src/data/data');

/** @test {Mux} */
describe('Unit::Mux', () => {
  /** @test {Mux} */
  describe('Mux', () => {
    /** @test {Mux} */
    it('exposes Mux Video and Data', () => {
      const muxClient = new Mux('testKey', 'testSecret');
      const { Video, Data } = muxClient;
      expect(Video).to.to.be.an.instanceof(MuxVideo);
      expect(Data).to.to.be.an.instanceof(MuxData);
    });
  });
});
