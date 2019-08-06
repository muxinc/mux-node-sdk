const { expect } = require('chai');
const sinon = require('sinon');
const Webhooks = require('../../../src/webhooks/webhooks');

/** @test {Webhooks} */
describe('Unit::Webhooks', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';

  /** @test {Webhooks} */
  describe('Webhooks', () => {
    /** @test {Webhooks} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Webhooks()).to.throw('API Access Token must be provided.');
    });

    /** @test {Webhooks} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Webhooks('testKey')).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Webhooks} */
    it('creates a new Webhooks instance', () => {
      const TestWebhooks = new Webhooks(testApiKey, testSecret);
      expect(() => new Webhooks(testApiKey, testSecret)).to.not.throw();
      expect(TestWebhooks.verifyHeader).to.be.a('function');
    });
  });

  /** @test {Webhooks.verifyHeader} */
  describe('verifyHeader', () => {
    const payload = "{\"test\":\"body\"}";
    const secret = "SuperSecret123";
    const validTimeSec = 1565125718;
    const validHeaderAtTheTime = "t=1565125718,v1=854ece4c22acef7c66b57d4e504153bc512595e8e9c772ece2a68150548c19a7";
    let clock;

    beforeEach(() => {
      clock = sinon.useFakeTimers(new Date(validTimeSec * 1000))
    })

    afterEach(() => clock.restore())

    /** @test {Webhooks.verifyHeader} */
    it('returns true for a valid header', () => {
      const webhooks = new Webhooks(testApiKey, testSecret);
      expect(webhooks.verifyHeader(payload, validHeaderAtTheTime, secret)).to.be.true;
    });
  });
});
