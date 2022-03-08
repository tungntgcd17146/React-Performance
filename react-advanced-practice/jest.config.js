/* eslint-disable no-undef */
module.exports = {
  rootDir: 'src',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/config/setup-tests.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.stories.tsx',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!<rootDir>/vite-env.d.ts',
    '!<rootDir>/interface/**',
    '!<rootDir>/main.tsx'
  ]
};
