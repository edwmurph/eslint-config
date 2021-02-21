const index = require('./');

// eslint config overrides for React code
module.exports = {
  ...index,

  parser: 'babel-eslint',

  extends: [
    ...index.extends,
    'plugin:react/recommended',
    'airbnb-base',
  ],

  settings: {
    react: {
      version: 'latest',
    },
  },

  env: {
    ...index.env,
    browser: true,
  },

  rules: {
    ...index.rules,

    'no-alert': 0,
    'class-methods-use-this': 0,
    'no-await-in-loop': ['off'],
    'object-curly-newline': [0],
    'react/prop-types': [0],
    'react/jsx-indent': [2, 2],
    'jsx-quotes': ['error', 'prefer-single'],
  },

};
