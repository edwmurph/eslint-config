const index = require('./');

module.exports = {

  ...index,

  extends: [
    ...index.extends,
    'plugin:vue/vue3-strongly-recommended'
  ],

  env: {
    ...index.env,
    'vue/setup-compiler-macros': true,
    browser: true
  },

  rules: {
    ...index.rules,

    'no-alert': 0,
    'class-methods-use-this': 0,
    'no-console': 0
  }

};
