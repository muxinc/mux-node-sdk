/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@mux/mux-node$': '<rootDir>/src/index.ts',
    '^@mux/mux-node/_shims/(.*)$': '<rootDir>/src/_shims/$1-node',
    '^@mux/mux-node/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/ecosystem-tests/', '<rootDir>/dist/', '<rootDir>/deno_tests/'],
};
