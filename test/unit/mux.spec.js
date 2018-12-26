const { expect } = require('chai');
const Mux = require('../../src/mux');
const MuxVideo = require('../../src/video/video');
const MuxData = require('../../src/data/data');

/** @test {Mux} */
describe('Unit::Mux', () => {
  /** @test {Mux} */
  describe('Mux', () => {
    /** @test {Mux} */
    it('exposes Mux Video, Data, and JWT utilities', () => {
      const muxClient = new Mux('testKey', 'testSecret');
      const { Video, Data, JWT } = muxClient;
      expect(Video).to.to.be.an.instanceof(MuxVideo);
      expect(Data).to.to.be.an.instanceof(MuxData);
      expect(JWT.sign).to.be.a('function');
      expect(JWT.decode).to.be.a('function');
    });
  });
});
