/* eslint-disable no-undef */
module.exports = {
  rootDir: 'src',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/infrastructure/tests/setup-tests.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!<rootDir>/context/**',
    '!<rootDir>/vite-env.d.ts',
    '!<rootDir>/interface/**',
    '!<rootDir>/main.tsx'
  ]
};
