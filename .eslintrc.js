module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': 'off',

    indent: ['error', 2],

    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'object-curly-newline': 0,
    'consistent-return': 0,
  },
};
