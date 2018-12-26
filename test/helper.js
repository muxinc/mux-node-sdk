require('dotenv').config();
const path = require('path');
const nockBack = require('nock').back;

before(() => {
  nockBack.setMode(nockBack.currentMode);
  console.log(nockBack.currentMode);

  // If we decide to use nock with other modules we should move this to a test helper
  nockBack.fixtures = path.join(__dirname, '/nockFixtures');
});
