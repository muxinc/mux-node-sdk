const moxios = require('moxios');
const { Exports } = require('../../../../cjs/data/resources/exports');

/** @test {Exports} */
describe('Unit::Exports', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const exportsInstance = new Exports(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(exportsInstance.http);
  });

  afterEach(() => {
    moxios.uninstall(exportsInstance.http);
  });
});
