module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  // transformIgnorePatterns: ['node_modules/?!(static-container)'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/theme/',
    '<rootDir>/src/config/',
    '<rootDir>/src/global/',
    '<rootDir>/src/navigation/',
    '<rootDir>/scripts/',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|react-native|@react-navigation/.*|@react-native-community/.*|native-base/.*)',
  ],
  // cacheDirectory: '.jest/cache',
  // globals: {
  //   'ts-jest': {
  //     isolatedModules: true,
  //   },
  // },
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: '.coverage',
};
