# eslint-config
[![npm version](https://badge.fury.io/js/%40edwmurph%2Feslint-config.svg)](https://badge.fury.io/js/%40edwmurph%2Feslint-config)

My JavaScript Styleguide for ESLint.

# Install

`npm install @edwmurph/eslint-config --save-dev`

# Usage

Use npm scripts to lint JS, e.g. `npm run lint`:
```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

alternatively if you are using the Vue config, you'll also need to tell eslint to look for `.vue` files:

```json
"scripts": {
  "lint": "eslint . --ext .js,.vue",
  "lint:fix": "eslint . --fix --ext .js,.vue"
}
```

Add an `.eslintrc.js` file at the root of the repo extending the eslint config for the target project type

### Node JS

```javascript
module.exports = {
  root: true,
  extends: [
    '@edwmurph/eslint-config',
    // uncomment this if you are building a chrome extension
    // '@edwmurph/eslint-config/webextensions'
  ]
};
```

### Gatsby JS

```javascript
module.exports = {
  root: true,
  extends: [
    '@edwmurph/eslint-config/gatsby',
    // uncomment this if you are building a chrome extension
    // '@edwmurph/eslint-config/webextensions'
  ]
};
```

### React

```javascript
module.exports = {
  root: true,
  extends: [
    '@edwmurph/eslint-config/react',
    // uncomment this if you are building a chrome extension
    // '@edwmurph/eslint-config/webextensions'
  ]
};
```

### NextJS

```javascript
module.exports = {
  root: true,
  extends: [
    '@edwmurph/eslint-config/nextjs',
    // uncomment this if you are building a chrome extension
    // '@edwmurph/eslint-config/webextensions'
  ]
};
```

### Vue 3

```javascript
module.exports = {
  root: true,
  extends: [
    '@edwmurph/eslint-config/vue',
    // uncomment this if you are building a chrome extension
    // '@edwmurph/eslint-config/webextensions'
  ]
};
```

also for vue configs you need to update your lint scripts to look for vue files:

```json
"scripts": {
  "lint": "eslint . --ext .js,.vue",
  "lint:fix": "eslint . --fix --ext .js,.vue"
}
```

also currently eslint@8 is [not compatible](https://github.com/vuejs/vue-cli/issues/6759) with @vue/cli-plugin-eslint@4.5 so you may temporarilly need to workaround this by also installing an older verison of eslint via:

```bash
npm install -d eslint@6.7
```
