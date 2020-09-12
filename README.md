# eslint-config
[![npm version](https://badge.fury.io/js/%40edwmurph%2Feslint-config.svg)](https://badge.fury.io/js/%40edwmurph%2Feslint-config)

My JavaScript Styleguide for ESLint.

# Usage

`npm install @edwmurph/eslint-config --save-dev`

Then add an `.eslintrc.js` file at the root of the repo with:

```
module.exports = {
  root: true,
  extends: '@edwmurph/eslint-config'
};
```

Also Gatsby, React and Vue config extensions can be added:

```
module.exports = {
  extends: [
    '@edwmurph/eslint-config',
    // '@edwmurph/eslint-config/gatsby',
    // '@edwmurph/eslint-config/react',
    // '@edwmurph/eslint-config/vue',
  ]
};
```
