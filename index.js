module.exports = {

  root: true,

  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      impliedStrict: true,
    },
  },

  env: {
    browser: false,
    node: true,
    es6: true,
  },

  plugins: [
    'prefer-arrow',
  ],

  rules: {
    'no-console': 0,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': ['error'],
    'no-irregular-whitespace': ['error'],
    semi: [ 'error', 'always' ],
    indent: ['error', 2],
    quotes: ['error', 'single'],

    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
  },

};
