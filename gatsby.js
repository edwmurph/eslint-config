const react = require('./react');
const index = require('./');

module.exports = {
  ...index,

  overrides: [
    {
      ...react,
      files: ['gatsby-*.js', 'src/**/*.js']
    }
  ]
};
