import { expect } from 'chai';
import * as Mux from '../../src/mux';
import * as MuxVideo from '../../src/video/video';
import * as MuxData from '../../src/data/data';

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

    /** @test {Mux.JTW} */
    it('exposes JWT Helper utilities as static methods', () => {
      expect(Mux.JWT.sign).to.be.a('function');
      expect(Mux.JWT.decode).to.be.a('function');
    });

    /** @test {Mux.Webhooks} */
    it('exposes Webhooks.verifyHeader', () => {
      expect(Mux.Webhooks.verifyHeader).to.be.a('function');
    });
  });
});
