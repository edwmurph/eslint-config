module.exports = {

  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      impliedStrict: true
    }
  },

  env: {
    browser: false,
    node: true,
    es6: true
  },

  extends: [
    'eslint:recommended'
  ],

  plugins: [
    'node'
  ],

  rules: {
    'max-len': [ 2, { code: 100 } ],
    'brace-style': [ 2, '1tbs', { 'allowSingleLine': true } ],
    'object-curly-spacing': [ 2, 'always' ],
    'max-statements-per-line': ['error', { max: 1 }],
    'consistent-return': 0,
    'no-console': 0,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': ['error'],
    'no-irregular-whitespace': ['error'],
    semi: [ 'error', 'always' ],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],

    'arrow-body-style': 0,
    'node/no-exports-assign': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'error',
    'node/process-exit-as-throw': 'error',
    'node/no-deprecated-api': 'error',
    'node/shebang': 'error'
  }

};
