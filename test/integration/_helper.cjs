const path = require('path');
const nockBack = require('nock').back;

process.env.MUX_TOKEN_ID = process.env.MUX_TOKEN_ID || 'fake-token-id';
process.env.MUX_TOKEN_SECRET =
  process.env.MUX_TOKEN_SECRET || 'fake-token-secret';

before(() => {
  // If we decide to use nock with other modules we should move this to a test helper
  nockBack.fixtures = path.join(__dirname, '/nockFixtures');
});
