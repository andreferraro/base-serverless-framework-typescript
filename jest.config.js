const { compilerOptions } = require('./tsconfig.paths.json');

function createModuleNameMapper() {
    const aliases = {};

    for (const key in compilerOptions.paths) {
        const alias = key.replace('/*', '/(.*)');
        const value = compilerOptions.paths[key][0].replace('/*', '/$1');
        aliases[alias] = `<rootDir>/${value}`;
    }

    return aliases;
}

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src/test/'],
    testMatch: ['**/?(*.)+(spec|test).(j|t)s?(x)'],
    moduleNameMapper: createModuleNameMapper(),
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: 75
        }
    }
};
