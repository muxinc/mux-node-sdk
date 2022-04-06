module.exports = {
  extends: ['airbnb-base', 'prettier'],
  root: true,
  env: {
    node: true,
    mocha: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'chai-friendly'],
  rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
    'prettier/prettier': 'error',
    'extensions': 0,
    'import/no-unresolved': 0,
  },
  overrides: [
    {
      files: ['*.ts'],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.ts'],
          },
        },
      },
      rules: {
        camelcase: 'off',
        'no-useless-constructor': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/420
        'no-unused-vars': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/363
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
          },
        ],
        'import/prefer-default-export': 'off',
        'lines-between-class-members': 'off',
        'max-classes-per-file': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
};
