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
      version: 'detect',
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
    'no-await-in-loop': 0,
    'object-curly-newline': 0,
    'jsx-quotes': [2, 'prefer-single'],

    'react/prop-types': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [1, { when: 'multiline' }],
    'react/jsx-equals-spacing': [1, 'never'],
    'react/jsx-closing-tag-location': 0,
    'react/jsx-one-expression-per-line': [1, { allow: 'single-child' }],
    'react/jsx-props-no-multi-spaces': 1,
    'react/jsx-tag-spacing': [1, { beforeSelfClosing: 'never', beforeClosing: 'never' }],
    'react/jsx-curly-spacing': [1, { when: 'never' }],
    'react/jsx-curly-newline': [1, { multiline: 'forbid', singleline: 'consistent' }],
  },

};
