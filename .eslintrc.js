//Enforces the style guides
//https://eslint.org/docs/user-guide/getting-started
//Run: eslint src/ --fix
module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'require-jsdoc' : 0,
  },
};
