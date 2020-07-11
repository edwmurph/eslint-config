// eslint config overrides for React code

module.exports = {
  parser: 'babel-eslint',

  extends: [
    'plugin:react/recommended',
    'airbnb-base',
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },

  env: {
    browser: true,
  },

  rules: {
    'class-methods-use-this': 0,
    'no-console': 0,
    'no-await-in-loop': ['off'],
    'object-curly-newline': [0],
    'react/prop-types': [0],
  },

};
