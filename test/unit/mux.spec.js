const { expect } = require('chai');
const Mux = require('../../src/mux');
const MuxVideo = require('../../src/video/video');
const MuxData = require('../../src/data/data');

/** @test {Mux} */
describe('Unit::Mux', () => {
  /** @test {Mux} */
  describe('Mux', () => {
    /** @test {Mux} */
    it('exposes Mux Video and Data as instance methods', () => {
      const muxClient = new Mux('testKey', 'testSecret');
      const { Video, Data } = muxClient;
      expect(Video).to.to.be.an.instanceof(MuxVideo);
      expect(Data).to.to.be.an.instanceof(MuxData);
    });

    it('exposes JWT Helper utilities as static methods', () => {
      expect(Mux.JWT.sign).to.be.a('function');
      expect(Mux.JWT.decode).to.be.a('function');
    });

    it('exposes Webhooks.verifyHeader', () => {
      const muxClient = new Mux('testKey', 'testSecret');
      const { Webhooks } = muxClient;
      expect(Webhooks.verifyHeader).to.be.a('function');
    });
  });
});
