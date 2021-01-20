const { expect } = require('chai');
const sinon = require('sinon');
const moxios = require('moxios');
const Uploads = require('../../../../src/video/resources/uploads');

/** @test {Uploads} */
describe('Unit::Uploads', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testUploads = new Uploads(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(testUploads.http);
  });

  afterEach(() => {
    moxios.uninstall(testUploads.http);
  });

  /** @test {Uploads.create} */
  describe('Uploads.create', () => {
    /** @test {Uploads.create} */
    it('throws an error if no params are given', () =>
      testUploads.create().catch(err => {
        expect(err).to.exist;
        expect(err.message).to.include('Params are required');
      }));
  });

  /** @test {Uploads.get} */
  describe('Uploads.get', () => {
    /** @test {Uploads.get} */
    it('throws an error when an upload id is not given', () =>
      testUploads
        .get()
        .then(res => {
          expect(res).to.not.exist;
        })
        .catch(err => {
          expect(err).to.exist;
          expect(err.message).to.include('An upload ID is required');
        }));
  });

  /** @test {Uploads.cancel} */
  describe('Uploads.cancel', () => {
    /** @test {Uploads.del} */
    it('throws an error when an upload id is not given', () =>
      testUploads.cancel().catch(err => {
        expect(err).to.exist;
        expect(err.message).to.include('An upload ID is required');
      }));
  });
});
