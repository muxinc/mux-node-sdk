const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs').default;

/** @test {Uploads} */
describe('Integration::Uploads', () => {
  const muxClient = new Mux();
  const { Video } = muxClient;

  /** @test {Uploads.create} */
  describe('Uploads.create', () => {
    /** @test {Uploads.create} */
    it('creates an upload', async () => {
      const { nockDone } = await nockBack('Uploads/create.json');
      const upload = await Video.Uploads.create({
        new_asset_settings: { playback_policy: 'public' },
      });
      expect(upload.status).to.equal('waiting');
      expect(upload.id).to.exist;
      await Video.Uploads.cancel(upload.id);
      nockDone();
    });
  });

  /** @test {Uploads.cancel} */
  describe('Uploads.cancel', () => {
    /** @test {Uploads.cancel} */
    it('cancels an upload', async () => {
      const { nockDone } = await nockBack('Uploads/cancel.json');
      const upload = await Video.Uploads.create({
        new_asset_settings: { playback_policy: 'public' },
      });
      await Video.Uploads.cancel(upload.id);
      const updatedUpload = await Video.Uploads.get(upload.id);
      expect(updatedUpload.status).to.equal('cancelled');
      nockDone();
    });

    /** @test {Uploads.cancel} */
    it('fails to delete an upload when given an incorrect upload id', () =>
      Video.Uploads.cancel('somefakeid').catch((err) => expect(err).to.exist));
  });

  /** @test {Uploads.get} */
  describe('Uploads.get', () => {
    /** @test {Uploads.get} */
    it('gets an upload', async () => {
      const { nockDone } = await nockBack('Uploads/get.json');
      const testUpload = await Video.Uploads.create({
        new_asset_settings: { playback_policy: 'public' },
      });
      const upload = await Video.Uploads.get(testUpload.id);
      expect(upload.id).to.equal(testUpload.id);
      await Video.Uploads.cancel(testUpload.id);
      nockDone();
    });

    /** @test {Uploads.get} */
    it('fails to get an upload when given an incorrect upload id', () =>
      Video.Uploads.get('somefakeid').catch((err) => expect(err).to.exist));
  });

  /** @test {Uploads.list} */
  describe('Uploads.list', () => {
    /** @test {Uploads.list} */
    it('lists all uploads for an environment', async () => {
      const { nockDone } = await nockBack('Uploads/list.json');
      const assets = await Video.Uploads.list();
      expect(assets).to.be.an('array');
      nockDone();
    });

    it('lists 5 uploads for an environment', async () => {
      const { nockDone } = await nockBack('Uploads/listLimit.json');
      const assets = await Video.Uploads.list({ limit: 5 });
      expect(assets).to.be.an('array');
      nockDone();
    });
  });
});
