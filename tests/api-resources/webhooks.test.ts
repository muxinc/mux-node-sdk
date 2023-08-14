// File generated from our OpenAPI spec by Stainless.

import Mux from '@mux/mux-node';

const mux = new Mux({ tokenId: 'something1234', baseURL: 'http://127.0.0.1:4010', tokenSecret: 'my secret' });

describe('resource webhooks', () => {
  const payload = '{"test":"body"}';
  const secret = 'SuperSecret123';
  const timestamp = '1565125718';
  const hash = `854ece4c22acef7c66b57d4e504153bc512595e8e9c772ece2a68150548c19a7`;
  const signature = `t=${timestamp},v1=${hash}`;
  const headers = {
    'mux-signature': signature,
  };
  const fakeNow = parseFloat(timestamp) * 1000;
  beforeEach(() => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => fakeNow);
  });
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  describe('unwrap', () => {
    it('deserializes the payload object', () => {
      mux.webhooks.unwrap(payload, headers, secret);
    });
  });
  describe('unwrap_times', () => {
    const payload = '{"test":{"nested":{"nanos":718234, "seconds":1691711005}}}';
    const secret = 'SuperSecret123';
    const timestamp = '1565125718';
    const hash = `bd315c24bce1c2b8ad325696f26530c8ef7d7d830afb7c1381903705d04607be`;
    const signature = `t=${timestamp},v1=${hash}`;
    const headers = {
      'mux-signature': signature,
    };
    it('deserializes the payload object', () => {
      expect(mux.webhooks.unwrap(payload, headers, secret)).toEqual({
        test: { nested: '2023-08-10T23:43:25.718Z' },
      });
    });
  });

  describe('verifySignature', () => {
    it('should pass for valid signature', () => {
      mux.webhooks.verifySignature(payload, headers, secret);
    });

    it('should throw for timestamp outside threshold', () => {
      jest.spyOn(global.Date, 'now').mockImplementation(() => fakeNow + 360000); // 6 minutes
      expect(() => mux.webhooks.verifySignature(payload, headers, secret)).toThrowErrorMatchingInlineSnapshot(
        `"Webhook timestamp is too old"`,
      );
    });

    it('should pass for multiple signatures', () => {
      mux.webhooks.verifySignature(
        payload,
        {
          ...headers,
          'mux-signature': `t=${timestamp},v1=invalid-sig,v1=${hash}`,
        },
        secret,
      );
    });

    it('should throw for different signature version', () => {
      expect(() =>
        mux.webhooks.verifySignature(
          payload,
          {
            ...headers,
            'mux-signature': `t=${timestamp},v2=${hash}`,
          },
          secret,
        ),
      ).toThrowErrorMatchingInlineSnapshot(`"No v1 signatures found"`);
    });

    it('should pass for multiple signatures with different version', () => {
      mux.webhooks.verifySignature(
        payload,
        {
          ...headers,
          'mux-signature': `t=${timestamp},v2=${hash},v1=${hash}`,
        },
        secret,
      );
    });

    it('should throw if signature timestamp is missing', () => {
      expect(() =>
        mux.webhooks.verifySignature(
          payload,
          {
            ...headers,
            'mux-signature': hash,
          },
          secret,
        ),
      ).toThrowErrorMatchingInlineSnapshot(`"Unable to extract timestamp and signatures from header"`);
    });

    it('should throw if payload is not a string', () => {
      expect(() =>
        mux.webhooks.verifySignature({ payload: 'not a string' } as any, headers, secret),
      ).toThrowErrorMatchingInlineSnapshot(
        `"Webhook body must be passed as the raw JSON string sent from the server (do not parse it first)."`,
      );
    });
  });
});
