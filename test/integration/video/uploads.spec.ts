import { expect } from 'chai';
import * as Mux from '../../../src/mux';

/** @test {Uploads} */
describe('Integration::Uploads', () => {
  const muxClient = new Mux();
  const { Video } = muxClient;
  let testUpload;
  const createdUploads: any[] = []; // These are uploads we'll clean up when it's all done.

  before(async () => {
    testUpload = await Video.Uploads.create({
      new_asset_settings: { playback_policy: 'public' },
    });
    createdUploads.push(testUpload);
  });

  after(() =>
    createdUploads.forEach(upload => Video.Uploads.cancel(upload.id))
  );

  /** @test {Uploads.create} */
  describe('Uploads.create', () => {
    /** @test {Uploads.create} */
    it('creates an upload', async () => {
      const upload = await Video.Uploads.create({
        new_asset_settings: { playback_policy: 'public' },
      });
      createdUploads.push(upload);
      expect(upload.status).to.equal('waiting');
      expect(upload.id).to.exist;
    });
  });

  /** @test {Uploads.cancel} */
  describe('Uploads.cancel', () => {
    /** @test {Uploads.cancel} */
    it('deletes an upload', async () => {
      const upload = await Video.Uploads.create({
        new_asset_settings: { playback_policy: 'public' },
      });
      await Video.Uploads.cancel(upload.id);
      const updatedUpload = await Video.Uploads.get(upload.id);
      expect(updatedUpload.status).to.equal('cancelled');
    });

    /** @test {Uploads.del} */
    it('fails to delete an upload when given an incorrect upload id', () =>
      Video.Uploads.cancel('somefakeid').catch(err => expect(err).to.exist));
  });

  /** @test {Uploads.get} */
  describe('Uploads.get', () => {
    /** @test {Uploads.get} */
    it('gets an upload', async () => {
      const asset = await Video.Uploads.get(testUpload.id);
      expect(asset.id).to.equal(testUpload.id);
    });

    /** @test {Uploads.get} */
    it('fails to get an upload when given an incorrect upload id', () =>
      Video.Uploads.get('somefakeid').catch(err => expect(err).to.exist));
  });
});
