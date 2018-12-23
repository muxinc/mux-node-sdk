const fs = require('fs');
const jwt = require('jsonwebtoken');

const typeToClaim = type => {
  const typeMap = {
    video: 'v',
    thumbnail: 't',
    gif: 'g',
  };

  return typeMap[type];
};

const getSigningKey = options => {
  if (options.keyId) {
    return options.keyId;
  } else if (process.env.MUX_SIGNING_KEY) {
    return process.env.MUX_SIGNING_KEY;
  }

  throw new TypeError('Signing Key ID required');
};

const getPrivateKey = options => {
  let key;
  if (options.keySecret) {
    key = options.keySecret;
  } else if (options.keyFilePath) {
    key = fs.readFileSync(options.keyFile);
  } else if (process.env.MUX_PRIVATE_KEY) {
    key = Buffer.from(process.env.MUX_PRIVATE_KEY, 'base64');
  }

  if (key) {
    const [rsaHeader] = key.split('\n');
    if (rsaHeader === '-----BEGIN RSA PRIVATE KEY-----') {
      return key;
    }

    try {
      return Buffer.from(key, 'base64');
    } catch (err) {
      throw new TypeError(
        'Specified signing key must be either a valid PEM string or a base64 encoded PEM.'
      );
    }
  }

  throw new TypeError('Signing Key ID required');
};

const sign = (playbackId, options = {}) => {
  const opts = {
    type: 'video',
    expiration: '7d',
    params: {},
    ...options,
  };

  const keyId = getSigningKey(options);
  const keySecret = getPrivateKey(options);

  const tokenOptions = {
    keyid: keyId,
    subject: playbackId,
    audience: typeToClaim(opts.type),
    expiresIn: opts.expiration,
    noTimestamp: true,
    algorithm: 'RS256',
  };

  return jwt.sign(opts.params, keySecret, tokenOptions);
};

const { decode } = jwt;

module.exports = { sign, decode };
