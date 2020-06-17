const path = require('path');
const nockBack = require('nock').back;

before(() => {
  console.log('debug', nockBack.currentMode);
  // If we decide to use nock with other modules we should move this to a test helper
  nockBack.fixtures = path.join(__dirname, '/nockFixtures');
});
