module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'jest', 'import'],
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'js': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never',
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                'devDependencies': [
                    'test/**',
                    'tests/**',
                    'spec/**',
                    '**/__tests__/**',
                    '**/__mocks__/**',
                    'test.{js,jsx,ts,tsx}',
                    'test-*.{js,jsx,ts,tsx}',
                    '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
                    'src/**'
                ],
                'optionalDependencies': false,
            },
        ],
    },
};
