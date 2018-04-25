require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../src/mux');

// const TEST_VIDEO = 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

/** @test {Assets} */
describe('Unit::Assets', () => {
  // const muxVideo = new Mux.Video(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);

  before(() => {});

  after(() => {});

  /** @test {Assets} */
  describe('Assets', () => {
    /** @test {Assets} */
    it('throws an error if an api key is not given', () => {});

    /** @test {Assets} */
    it('throws an error if a secret key is not given', () => {});

    /** @test {Assets} */
    it('creates a new Assets instance', () => {});
  });

  /** @test {Assets.create} */
  describe('Assets.create', () => {
    /** @test {Assets.create} */
    it('creates an asset', () => {});

    /** @test {Assets.create} */
    it('throws an error if no asset params are given', () => {});
  });

  /** @test {Assets.get} */
  describe('Assets.get', () => {
    /** @test {Assets.get} */
    it('gets an asset', () => {});

    /** @test {Assets.get} */
    it('throws an error when an asset id is not given', () => {});
  });

  /** @test {Assets.deleteAsset} */
  describe('Assets.deleteAsset', () => {
    /** @test {Assets.deleteAsset} */
    it('deletes an asset', () => {});

    /** @test {Assets.deleteAsset} */
    it('throws an error when an asset id is not given', () => {});
  });

  /** @test {Assets.inputInfo} */
  describe('Assets.inputInfo', () => {
    /** @test {Assets.inputInfo} */
    it('gets input info for an asset', () => {});

    /** @test {Assets.inputInfo} */
    it('throws an error when an asset id is not given', () => {});
  });

  /** @test {Assets.list} */
  describe('Assets.list', () => {
    /** @test {Assets.list} */
    it('lists all assets for an environment', () => {});
  });
});
