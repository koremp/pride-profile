module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        react,
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        actor: 'readonly',
        Feature: 'readonly',
        Scenario: 'readonly',
        context: 'readonly',
        given: 'readonly',
    },
    rules: {
        indent: ['error',
            2,
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
        ],
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: [
                    '.tsx',
                ],
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
            'error',
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'max-len': [
            'warn',
            {
                code: 100,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    'no-trailing-spaces': 'error',
    curly: 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'linebreak-style': 'off',
    'no-proto': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
};
