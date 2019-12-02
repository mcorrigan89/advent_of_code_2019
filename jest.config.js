// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  reporters: ['default'],
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{ts, tsx}'],
  coverageDirectory: `${__dirname}/test_reports/`,
  coverageReporters: ['json', 'lcov', 'text'],
  verbose: true,
  globals: {
    'ts-jest': {
      tsConfig: __dirname + '/tsconfig.spec.json'
    }
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(tsx?)$': 'ts-jest'
  }
};
