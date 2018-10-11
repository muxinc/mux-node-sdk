const { expect } = require('chai');
const moxios = require('moxios');
const Base = require('../../src/base');

/** @test {Mux} */
describe('Unit::Base', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    delete process.env.MUX_TOKEN_ID;
    delete process.env.MUX_TOKEN_SECRET;
    moxios.uninstall();
  });

  /** @test {Base} */
  describe('Base', () => {
    /** @test {Base} */
    it('allows configuration to be passed in as params', () => {
      const baseClient = new Base('testKey', 'testSecret');
      expect(baseClient.tokenId).to.be.eq('testKey');
      expect(baseClient.tokenSecret).to.be.eq('testSecret');
    });

    it('allows configuration to be passed in via environment variables', () => {
      process.env.MUX_TOKEN_ID = 'testKey';
      process.env.MUX_TOKEN_SECRET = 'testSecret';
      const baseClient = new Base();
      expect(baseClient.tokenId).to.be.eq('testKey');
      expect(baseClient.tokenSecret).to.be.eq('testSecret');
    });

    it('prioritizes params over environment variables', () => {
      process.env.MUX_TOKEN_ID = 'crusty-old-id';
      process.env.MUX_TOKEN_SECRET = 'crusty-old-secret';
      const baseClient = new Base('fancy-new-id', 'fancy-new-secret');
      expect(baseClient.tokenId).to.be.eq('fancy-new-id');
      expect(baseClient.tokenSecret).to.be.eq('fancy-new-secret');
    });

    it('allows configuration to be passed in via the parent instance', () => {
      const parentBase = new Base('testKey', 'testSecret');
      const childBase = new Base(parentBase);
      expect(childBase.tokenId).to.be.eq(parentBase.tokenId);
      expect(childBase.tokenSecret).to.be.eq(parentBase.tokenSecret);
    });

    describe('http requests', () => {
      moxios.stubRequest('https://api.mux.com/test/v1/foo', {
        status: 200,
        responseText: '{"data": ["something", "very", "fun"]}',
      });

      it('fire an event on a requests', (done) => {
        const baseClient = new Base('fancy-new-id', 'fancy-new-secret');
        baseClient.http.get('/test/v1/foo').then((data) => {
          expect(data).to.be.eq(['something', 'very', 'fun']);
          done();
        });
      });
    });
  });
});
