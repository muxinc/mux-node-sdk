import fs from 'fs';

const main = () => {
  const pkg = JSON.parse(fs.readFileSync('package.json').toString()) as Record<string, unknown>;
  const version = pkg['version'];
  if (!version) throw 'The version property is not set in the package.json file';
  if (typeof version !== 'string') {
    throw `Unexpected type for the package.json version field; got ${typeof version}, expected string`;
  }
  fs.writeFileSync('version.ts', `export const VERSION = '${version}';\n`);
};

if (require.main === module) {
  main();
}
