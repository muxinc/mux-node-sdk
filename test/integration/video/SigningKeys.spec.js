const path = require('path');

require('dotenv').config();
const { expect } = require('chai');
const Mux = require('../../../src/mux');
const nockBack = require('nock').back;

nockBack.setMode('record');

// If we decide to use nock with other modules we should move this to a test helper
nockBack.fixtures = path.join(__dirname, '/nockFixtures');

/** @test {Uploads} */
describe('SigningKeys', () => {
  const muxClient = new Mux();
  const { Video } = muxClient;

  /** @test {SigningKeys.create} */
  describe('SigningKeys.create', () => {
    /** @test {SigningKeys.create} */
    it('creates a new signing key', async () => {
      const { nockDone } = await nockBack('SigningKeys/create.json');
      const signingKey = await Video.SigningKeys.create();

      expect(signingKey.id).to.exist;
      expect(signingKey.private_key).to.exist;
      expect(signingKey.created_at).to.exist;
      nockDone();
    });
  });

  /** @test {SigningKeys.get} */
  describe('SigningKeys.get', () => {
    /** @test {SigningKeys.create} */
    it('retrieves a signing key', async () => {
      const { nockDone } = await nockBack('SigningKeys/get.json');
      const createdSigningKey = await Video.SigningKeys.create();

      const signingKey = await Video.SigningKeys.get(createdSigningKey.id);
      expect(signingKey.id).to.exist;
      expect(signingKey.created_at).to.exist;
      expect(signingKey.private_key).to.not.exist;
      nockDone();
    });
  });

  /** @test {SigningKeys.del} */
  describe('SigningKeys.del', () => {
    /** @test {SigningKeys.del} */
    it('deletes a signing key', async () => {
      const { nockDone } = await nockBack('SigningKeys/del.json');
      const createdSigningKey = await Video.SigningKeys.create();

      const signingKey = await Video.SigningKeys.del(createdSigningKey.id);
      expect(signingKey).to.be.empty;

      try {
        await Video.SigningKeys.get(createdSigningKey.id);
      } catch (err) {
        expect(err.type).to.eq('not_found');
      }

      nockDone();
    });
  });

  /** @test {SigningKeys.list} */
  describe('SigningKeys.list', () => {
    /** @test {SigningKeys.list} */
    it('lists signing keys', async () => {
      const { nockDone } = await nockBack('SigningKeys/list.json');
      await Video.SigningKeys.create();

      const signingKeys = await Video.SigningKeys.list();

      expect(signingKeys.length).to.be.greaterThan(0);

      nockDone();
    });

    /** @test {SigningKeys.list} */
    it('lists signing keys with params', async () => {
      const { nockDone } = await nockBack('SigningKeys/list-with-params.json');
      await Video.SigningKeys.create();
      await Video.SigningKeys.create();

      const signingKeys = await Video.SigningKeys.list({ limit: 1 });

      expect(signingKeys.length).to.eq(1);

      nockDone();
    });
  });
});
