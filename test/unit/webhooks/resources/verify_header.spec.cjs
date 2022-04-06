const { expect } = require('chai');
const sinon = require('sinon');
const {
  VerifyHeader,
} = require('../../../../cjs/webhooks/resources/verify_header');

/** @test {VerifyHeader} */
describe('Unit::VerifyHeader', () => {
  /** @test {VerifyHeader} */
  describe('VerifyHeader', () => {
    /** @test {VerifyHeader.parseHeader} */
    describe('parseHeader with a known-hard coded header value', () => {
      it('will correctly parse the header value to the known timestamp and signature', () => {
        /*
          This header value was generated from Mux's backend code with the following values:
            * secret: 'SuperSecret123'
            * body: "{\"test\":\"body\"}"
            * time: 1565125718 (08/06/2019 @ 9:08pm UTC)
        */
        const header =
          't=1565125718,v1=854ece4c22acef7c66b57d4e504153bc512595e8e9c772ece2a68150548c19a7';
        const expectedSignature =
          '854ece4c22acef7c66b57d4e504153bc512595e8e9c772ece2a68150548c19a7';
        const parsed = VerifyHeader.parseHeader(header);
        expect(parsed.timestamp).to.equal(1565125718);
        expect(parsed.signatures.length).to.equal(1);
        expect(parsed.signatures[0]).to.equal(expectedSignature);
      });
    });

    /** @test {VerifyHeader.verify} */
    describe('verify', () => {
      let payload = '{"test":"body"}';
      const secret = 'SuperSecret123';
      const validTimeSec = 1565125718;
      const validHeaderAtTheTime =
        't=1565125718,v1=854ece4c22acef7c66b57d4e504153bc512595e8e9c772ece2a68150548c19a7';

      /** @test {VerifyHeader.verify} */
      describe('with a malformatted header value', () => {
        /** @test {VerifyHeader.verify} */
        it('will throw an unable to extract timestamp and signatures error', () => {
          expect(() => {
            VerifyHeader.verify(payload, 'somebadheadervalue', secret);
          }).to.throw('Unable to extract timestamp and signatures from header');
        });
      });

      /** @test {VerifyHeader.verify} */
      describe('with a header value that has the wrong scheme', () => {
        /** @test {VerifyHeader.verify} */
        it('will throw a no signatures found with expected scheme error', () => {
          expect(() => {
            const header = 't=1565125718,v2=weiorwer';
            VerifyHeader.verify(payload, header, secret);
          }).to.throw('No signatures found with expected scheme');
        });
      });

      /** @test {VerifyHeader.verify} */
      describe('with a header value that is valid expect that it is outside the tolerated time range', () => {
        /** @test {VerifyHeader.verify} */
        it('will throw a timestamp outside the tolerance zone error', () => {
          expect(() => {
            VerifyHeader.verify(payload, validHeaderAtTheTime, secret);
          }).to.throw('Timestamp outside the tolerance zone');
        });
      });

      /** @test {VerifyHeader.verify} */
      describe('with a header value that is actually valid', () => {
        let clock;

        beforeEach(() => {
          clock = sinon.useFakeTimers(new Date(validTimeSec * 1000));
        });

        afterEach(() => clock.restore());

        /** @test {VerifyHeader.verify} */
        it('will return true when the payload is a string', () => {
          const isVerified = VerifyHeader.verify(
            payload,
            validHeaderAtTheTime,
            secret
          );
          expect(isVerified).to.be.true;
        });

        /** @test {VerifyHeader.verify} */
        it('will return true when the payload is a buffer', () => {
          payload = Buffer.from(payload);
          const isVerified = VerifyHeader.verify(
            payload,
            validHeaderAtTheTime,
            secret
          );
          expect(isVerified).to.be.true;
        });
      });
    });
  });
});
