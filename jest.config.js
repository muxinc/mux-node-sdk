/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^mux$': '<rootDir>/src/index.ts',
    '^mux/_shims/(.*)$': '<rootDir>/src/_shims/$1.node',
    '^mux/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/ecosystem-tests/', '<rootDir>/dist/'],
};
