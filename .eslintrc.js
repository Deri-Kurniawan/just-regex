module.exports = {
  parser: '@typescript-eslint/parser', // Add this line for fix (Error: Parsing error: The keyword '[any] is reserved')
  extends: ['prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-reserved-keywords': 'off',
  },
};
