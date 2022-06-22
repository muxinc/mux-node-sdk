/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { defineConfig } from 'tsup';

export default defineConfig({
  sourcemap: true,
  clean: true,
  minify: false,
  entry: ['src'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  target: 'node14',
  treeshake: false,
  esbuildOptions: (options, context) => {
    // eslint-disable-next-line no-param-reassign
    options.footer = {
      js:
        context.format === 'cjs'
          ? 'module.exports = module.exports.default || module.exports;'
          : '',
    };
  },
  splitting: false,
});
