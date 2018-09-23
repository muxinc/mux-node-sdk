const { expect } = require('chai');
const Base = require('../../src/base');

/** @test {Mux} */
describe('Unit::Base', () => {
  afterEach(() => {
    process.env.MUX_TOKEN_ID = undefined;
    process.env.MUX_TOKEN_SECRET = undefined;
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

    it('exposes a requestOptions getter for request authenntication', () => {
      const baseClient = new Base('testKey', 'testSecret');
      expect(baseClient.requestOptions).to.be.eql({
        auth: {
          username: 'testKey',
          password: 'testSecret',
        },
      });
    });
  });
});
