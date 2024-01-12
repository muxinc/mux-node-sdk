import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@mux/mux-node$': '<rootDir>/src/index.ts',
    '^@mux/mux-node/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^@mux/mux-node/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
};

export default config;
