require('dotenv').config();
const { expect } = require('chai');
const should = require('chai').should();
const Assets = require('../../../lib/video/resources/Assets');

const TEST_VIDEO = 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4';

describe('Integration::Assets', () => {
  const asset = new Assets({
    apiKey: process.env.MUX_ACCESS_TOKEN,
    secret: process.env.MUX_SECRET,
  });

  describe('assets.create', () => {
    it('creates an asset when given an input', (done) => {
      asset.create({ input: TEST_VIDEO })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(201);
          done();
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
          done();
        });
    });

    it('fails to create an asset when not given an input', (done) => {
      asset.create({})
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
          done();
        })
        .catch((err) => {
          should.exist(err);
          done();
        });
    });

    // @TODO: this could potentially be a unit test with mocked api calls
    it('fails to create an asset when not given params', (done) => {
      asset.create()
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
          done();
        })
        .catch((err) => {
          should.exist(err);
          // @TODO: test to make sure api call was not made.
          done();
        });
    });
  });

  describe('assets.deleteAsset', () => {
    it('deletes an asset', (done) => {
      asset.create({ input: TEST_VIDEO })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(201);
          return asset.deleteAsset(data.data.id);
        })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(204);
          done();
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
          done();
        });
    });

    it('fails to delete an asset when not given an incorrect assetId', (done) => {
      asset.deleteAsset('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
          done();
        })
        .catch((err) => {
          should.exist(err);
          done();
        });
    });

    // @TODO: this could potentially be a unit test with mocked api calls
    it('fails to delete an asset when not given an assetId', (done) => {
      asset.deleteAsset()
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
          done();
        })
        .catch((err) => {
          should.exist(err);
          done();
        });
    });
  });

  describe('assets.get', () => {
    it('gets an asset', (done) => {
      asset.create({ input: TEST_VIDEO })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(201);
          return asset.get(data.data.id);
        })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
          return asset.deleteAsset(data.data.id);
        })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(204);
          done();
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
          done();
        });
    });

    it('fails to get an asset when not given an incorrect assetId', (done) => {
      asset.get('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
          done();
        })
        .catch((err) => {
          should.exist(err);
          done();
        });
    });

    // @TODO: this could potentially be a unit test with mocked api calls
    it('fails to get an asset when not given an assetId', (done) => {
      asset.get()
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
          done();
        })
        .catch((err) => {
          should.exist(err);
          done();
        });
    });
  });

  describe.skip('assets.inputInfo', () => {
    it('gets input-info for an asset', (done) => {
      asset.create({ input: TEST_VIDEO })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(201);
          return asset.inputInfo(data.data.id);
        })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
          return asset.deleteAsset(data.data.id);
        })
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(204);
          done();
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
          done();
        });
    });

    it('fails to get an asset when not given an incorrect assetId', (done) => {
      asset.inputInfo('somefakeid')
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
          done();
        })
        .catch((err) => {
          should.exist(err);
          done();
        });
    });

    // @TODO: this could potentially be a unit test with mocked api calls
    it('fails to get an asset when not given an assetId', (done) => {
      asset.inputInfo()
        .then((res) => {
          const { data } = res;
          should.not.exist(data);
          done();
        })
        .catch((err) => {
          should.exist(err);
          done();
        });
    });
  });

  describe('assets.list', () => {
    it('lists all assets for an environment', (done) => {
      asset.list()
        .then((res) => {
          const { data } = res;
          should.exist(data);
          expect(res.status).to.equal(200);
          done();
        })
        .catch((err) => {
          expect(err).to.equal(undefined);
          done();
        });
    });
  });
});
