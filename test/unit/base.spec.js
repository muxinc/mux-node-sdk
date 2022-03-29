const { expect } = require('chai');
const moxios = require('moxios');
const { Base } = require('../../cjs/base');

/** @test {Mux} */
describe('Unit::Base', () => {
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
      let baseClient;

      beforeEach(() => {
        baseClient = new Base('fancy-new-id', 'fancy-new-secret');
        moxios.install(baseClient.http);

        moxios.stubRequest('/test/v1/foo', {
          status: 200,
          responseText: '{"data": ["something", "very", "fun"]}',
        });
      });

      afterEach(() => {
        delete process.env.MUX_TOKEN_ID;
        delete process.env.MUX_TOKEN_SECRET;
        moxios.uninstall(baseClient.http);
      });

      it('fire an event on a request', (done) => {
        baseClient.on('request', (req) => {
          expect(req.auth.username).to.equal('fancy-new-id');
          expect(req.auth.password).to.equal('fancy-new-secret');
          expect(req.baseURL).to.equal('https://api.mux.com');
          expect(req.url).to.equal('/test/v1/foo');
          done();
        });

        baseClient.http.get('/test/v1/foo');
      });

      it('fire an event on a response', (done) => {
        baseClient.on('response', (res) => {
          expect(res.status).to.equal(200);
          expect(res.data).to.eql({ data: ['something', 'very', 'fun'] });
          done();
        });

        baseClient.http.get('/test/v1/foo');
      });
    });
  });
});
