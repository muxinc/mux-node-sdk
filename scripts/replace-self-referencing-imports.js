'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

const path = require('path');
const distDir = path.resolve(__dirname, '..', 'dist');
const distSrcDir = path.join(distDir, 'src');

function replaceSelfReferencingImports({ orig, file, config }) {
  // replace self-referencing imports in source files to reduce errors users will
  // see if they go to definition
  if (!file.startsWith(distDir)) return orig;

  return orig.replace(/['"]([^"'\r\n]+)['"]/, (match, importPath) => {
    if (!importPath.startsWith('@mux/mux-node/')) return match;
    if (!file.startsWith(distSrcDir)) return match;
    let relativePath = path.relative(
      path.dirname(file),
      path.join(distSrcDir, importPath.substring('@mux/mux-node/'.length)),
    );
    if (!relativePath.startsWith('.')) relativePath = `./${relativePath}`;
    return JSON.stringify(relativePath);
  });
}
exports.default = replaceSelfReferencingImports;
