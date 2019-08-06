const crypto = require('crypto');
const DEFAULT_TOLERANCE = 300; // 5 minutes
const EXPECTED_SCHEME = 'v1';

const Base = require('../../base');

/**
 * Secure compare, from https://github.com/freewil/scmp
*/
function _secureCompare (a, b) {
  a = Buffer.from(a);
  b = Buffer.from(b);

  // return early here if buffer lengths are not equal since timingSafeEqual
  // will throw if buffer lengths are not equal
  if (a.length !== b.length) {
    return false;
  }

  // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
  // otherwise use our own scmp-internal function.
  if (crypto.timingSafeEqual) {
    return crypto.timingSafeEqual(a, b);
  }

  const len = a.length;
  let result = 0;

  for (let i = 0; i < len; ++i) {
    result |= a[i] ^ b[i];
  }
  return result === 0;
}

class VerifyHeader extends Base {
  parseHeader (header, scheme = EXPECTED_SCHEME) {
    if (typeof header !== 'string') {
      return null;
    }

    return header.split(',').reduce(
      (accum, item) => {
        const kv = item.split('=');

        if (kv[0] === 't') {
          accum.timestamp = kv[1];
        }

        if (kv[0] === scheme) {
          accum.signatures.push(kv[1]);
        }

        return accum;
      },
      {
        timestamp: -1,
        signatures: [],
      }
    );
  }

  computeSignature (payload, secret) {
    return crypto
      .createHmac('sha256', secret)
      .update(payload, 'utf8')
      .digest('hex');
  }

  verify (payload, header, secret, tolerance = DEFAULT_TOLERANCE) {
    payload = Buffer.isBuffer(payload) ? payload.toString('utf8') : payload;
    header = Buffer.isBuffer(header) ? header.toString('utf8') : header;

    const details = this.parseHeader(header);

    if (!details || details.timestamp === -1) {
      throw new Error('Unable to extract timestamp and signatures from header');
    }

    if (!details.signatures.length) {
      throw new Error('No signatures found with expected scheme');
    }

    const expectedSignature = this.computeSignature(
      `${details.timestamp}.${payload}`,
      secret
    );

    const signatureFound = !!details.signatures.filter((sig) => _secureCompare(sig, expectedSignature)).length;

    if (!signatureFound) {
      throw new Error('No signatures found matching the expected signature for payload.')
    }

    const timestampAge = Math.floor(Date.now() / 1000) - details.timestamp;

    if (tolerance > 0 && timestampAge > tolerance) {
      throw new Error('Timestamp outside the tolerance zone')
    }

    return true;
  }
}

module.exports = VerifyHeader;
