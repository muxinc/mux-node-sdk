require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Mux = require('../../../src/mux');

// const TEST_VIDEO = 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

/** @test {PlaybackIds} */
describe('Unit::PlaybackIds', () => {
  // const muxVideo = new Mux.Video(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);

  before(() => {});

  after(() => {});

  /** @test {PlaybackIds} */
  describe('PlaybackIds', () => {
    /** @test {PlaybackIds} */
    it('throws an error if an api key is not given', () => {});

    /** @test {PlaybackIds} */
    it('throws an error if a secret key is not given', () => {});

    /** @test {PlaybackIds} */
    it('creates a new PlaybackIds instance', () => {});
  });

  /** @test {PlaybackIds.create} */
  describe('PlaybackIds.create', () => {

    /** @test {PlaybackIds.create} */
    it('creates a playbackId', () => {});

    /** @test {PlaybackIds.create} */
    it('throws an error if a playbackId is not given', () => {});
  });

  /** @test {PlaybackIds.deletePlaybackIds} */
  describe('PlaybackIds.deletePlaybackIds', () => {});

  /** @test {PlaybackIds.get} */
  describe('PlaybackIds.get', () => {});
});
