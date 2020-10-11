const index = require('./');

module.exports = {

  ...index,

  extends: [
    ...index.extends,
    'plugin:vue/essential',
  ],

  env: {
    ...index.env,
    browser: true,
  },

  parserOptions: {
    ...index.parserOptions,
    parser: 'babel-eslint',
  },

  rules: {
    ...index.rules,

    'no-alert': 0,
    'class-methods-use-this': 0,
    'no-console': 0,
    'prefer-arrow/prefer-arrow-functions': [0],
  },

};
