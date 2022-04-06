const { expect } = require('chai');
const sinon = require('sinon');
const { Webhooks } = require('../../../cjs/webhooks/webhooks');

/** @test {Webhooks} */
describe('Unit::Webhooks', () => {
  /** @test {Webhooks.verifyHeader} */
  describe('verifyHeader', () => {
    const payload = '{"test":"body"}';
    const secret = 'SuperSecret123';
    const validTimeSec = 1565125718;
    const validHeaderAtTheTime =
      't=1565125718,v1=854ece4c22acef7c66b57d4e504153bc512595e8e9c772ece2a68150548c19a7';
    let clock;

    beforeEach(() => {
      clock = sinon.useFakeTimers(new Date(validTimeSec * 1000));
    });

    afterEach(() => clock.restore());

    /** @test {Webhooks.verifyHeader} */
    it('returns true for a valid header', () => {
      expect(Webhooks.verifyHeader(payload, validHeaderAtTheTime, secret)).to.be
        .true;
    });
  });
});
