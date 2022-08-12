/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    jest: true,
  },
  extends: ['@kobionic/eslint-config-typescript-react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
