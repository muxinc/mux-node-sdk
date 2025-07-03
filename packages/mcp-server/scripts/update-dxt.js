const fs = require('fs');
const path = require('path');

async function main() {
  const manifestPath = path.join(__dirname, '../dxt/manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  const pkgPath = path.join(__dirname, '../package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  if (manifest.version === pkg.version) {
    console.log(`↔️ DXT version is already up-to-date: ${manifest.version}`);
    return;
  }

  manifest.version = pkg.version;

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

  console.log(`⬆️ DXT version updated: ${manifest.version}`);
}

main().catch((error) => {
  console.error('❌ Error updating DXT version:', error);
  process.exit(1);
});
