import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import Uploads from '../../../../src/video/resources/uploads';

/** @test {Uploads} */
describe('Unit::Uploads', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';
  const testUploads = new Uploads(testApiKey, testSecret);

  // TODO: Figure out why axios and moxios don't match
  beforeEach(() => {
    moxios.install(testUploads.http as any);
  });

  afterEach(() => {
    moxios.uninstall(testUploads.http as any);
  });

  /** @test {Uploads.create} */
  describe('Uploads.create', () => {
    /** @test {Uploads.create} */
    it('makes a POST request to create a new Upload', done => {
      moxios.stubRequest('https://api.mux.com/video/v1/uploads', {
        status: 201,
        responseText: '{"data": {"create": true}}',
      });

      const onFulfilled = sinon.spy();
      testUploads
        .create({
          new_asset_settings: { playback_policy: 'public' },
        })
        .then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].create).to.be.true;
        done();
      });
    });

    /** @test {Uploads.create} */
    it('throws an error if no params are given', () =>
      testUploads.create(undefined as any).catch(err => {
        expect(err).to.exist;
        expect(err.message).to.include('Params are required');
      }));
  });

  /** @test {Uploads.get} */
  describe('Uploads.get', () => {
    /** @test {Uploads.get} */
    it('makes a GET request to get an upload', done => {
      moxios.stubRequest('https://api.mux.com/video/v1/uploads/testUpload', {
        status: 200,
        responseText: '{"data": {"upload": "get"}}',
      });

      const onFulfilled = sinon.spy();
      testUploads.get('testUpload').then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].upload).to.equal('get');
        done();
      });
    });

    /** @test {Uploads.get} */
    it('throws an error when an upload id is not given', () =>
      testUploads
        .get(undefined as any)
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
    /** @test {Uploads.cancel} */
    it('makes a PUT request to cancel an upload', done => {
      moxios.stubRequest(
        'https://api.mux.com/video/v1/uploads/testUpload/cancel',
        {
          status: 200,
          responseText: '{"data": {"upload": "cancel"}}',
        }
      );

      const onFulfilled = sinon.spy();
      testUploads.cancel('testUpload').then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].upload).to.equal('cancel');
        done();
      });
    });

    /** @test {Uploads.del} */
    it('throws an error when an upload id is not given', () =>
      testUploads.cancel(undefined as any).catch(err => {
        expect(err).to.exist;
        expect(err.message).to.include('An upload ID is required');
      }));
  });
});
