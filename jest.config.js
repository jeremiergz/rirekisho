const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!<rootDir>/node_modules/', '!**/*.d.ts'],
  coveragePathIgnorePatterns: ['.cache/', 'public/'],
  globals: {
    __PATH_PREFIX__: '',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpe?g|png|gif|eot|otf|webp|svg|ttf|woff2?|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/hooks/data/useLanguagesData': '<rootDir>/src/components/hooks/data/useLanguagesData.ts',
    ...paths,
  },
  setupFilesAfterEnv: ['<rootDir>/__mocks__/window.ts', '<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  verbose: true,
};
