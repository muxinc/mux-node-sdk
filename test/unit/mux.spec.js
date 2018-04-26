require('dotenv').config();
const { expect } = require('chai');
const Mux = require('../../src/mux');
const Video = require('../../src/video/video');

/** @test {Mux} */
describe('Unit::Mux', () => {
  /** @test {Mux} */
  describe('Assets', () => {
    /** @test {Mux} */
    it('exposes Mux Video and Data', () => {
      expect(Mux.Video).to.equal(Video);
    });
  });
});
