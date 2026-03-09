module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{jsx, tsx}',
    '<rootDir>/src/app.{jsx, tsx}',
  ],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts'],
  testMatch: ['**/*.test.ts?(x)', '**/*.test.js?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|ky)',
  ],
  watchman: false,
};
