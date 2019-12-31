module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        amd: true,
        node: true,
        es6: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        }
    },
    rules: {
        'no-tabs': 'error',
        'no-var': 'error',
        'semi': [
            'error',
            'always',
        ],
        'semi-style': [
            'error',
            'last'
        ],
        'template-curly-spacing': [
            'error',
            'never'
        ],
        'react/prop-types': 0,
        'react/jsx-max-props-per-line': [
            2,
            {
                maximum: 3,
                when: 'always',
            },
        ],
        '@typescript-eslint/camelcase': [
            'error', {
                'properties': 'never'
            }
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
                allowHigherOrderFunctions: true
            }
        ],
        'jsx-quotes': [
            'error',
            'prefer-double',
        ],
        'quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
    },
    overrides: [
        {
            files: [
                '*.js'
            ],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
        {
            files: [
                '*.spec.*',
            ],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    globals: {
        __CONFIG__: 'readonly',
        'requestAnimationFrame': false,
    },
};
