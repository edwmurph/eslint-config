const react = require('./react');

// eslint config overrides for React code
module.exports = {
  ...react,

  extends: [
    ...react.extends,
    'plugin:@next/next/recommended'
  ],

  rules: {
    ...react.rules,
    'react/react-in-jsx-scope': 'off'
  }
};
