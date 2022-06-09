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
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/$1`,
  },
  setupFilesAfterEnv: ['<rootDir>/__mocks__/window.ts', '<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-script)/)'],
  verbose: true,
};
