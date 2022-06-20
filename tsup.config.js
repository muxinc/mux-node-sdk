import { defineConfig } from 'tsup';

export default defineConfig({
  sourcemap: true,
  clean: true,
  minify: true,
  entryPoints: ['src/mux.ts'],
  format: ['esm', 'cjs'],
  outDir: 'lib',
  target: 'node12',
})
