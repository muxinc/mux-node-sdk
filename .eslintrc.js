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
        'no-useless-constructor': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
};
