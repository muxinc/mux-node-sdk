/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { defineConfig } from 'tsup';

export default defineConfig({
  sourcemap: true,
  clean: true,
  minify: false,
  entry: ['src'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  target: 'node12',
  treeshake: false,
  splitting: false,
});
