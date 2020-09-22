module.exports = {
    collectCoverage: true,

    verbose: false,

    // Test matching.
    testRegex: '.*(\\.|/)test\\.js?$',

    // Module resolution.
    moduleDirectories: ['<rootDir>/src', 'node_modules'],

    modulePathIgnorePatterns: ['<rootDir>/src/utils'],

    // Code coverage.
    collectCoverageFrom: ['src/**/*.js'],

    coverageThreshold: {
        global: {
            lines: 80,
            branches: 80,
            functions: 80,
            statements: 80
        }
    },

    // Preprossesing.
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};
