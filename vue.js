module.exports = {

  extends: 'plugin:vue/essential',

  env: {
    browser: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'class-methods-use-this': 0,
    'no-console': 0,
    'prefer-arrow/prefer-arrow-functions': [0],
  },

};