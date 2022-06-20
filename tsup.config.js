/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { defineConfig } from 'tsup';

export default defineConfig({
  sourcemap: true,
  clean: true,
  minify: true,
  entry: ['src'],
  format: ['esm', 'cjs'],
  outDir: 'lib',
  target: 'node12',
  treeshake: true,
});
