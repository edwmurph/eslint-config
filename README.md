# eslint-config
[![npm version](https://badge.fury.io/js/%40edwmurph%2Feslint-config.svg)](https://badge.fury.io/js/%40edwmurph%2Feslint-config)

My JavaScript Styleguide for ESLint.

# Install

`npm install @edwmurph/eslint-config --save-dev`

# Usage

Use npm scripts to lint JS, e.g. `npm run lint`:
```
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

Add an `.eslintrc.js` file at the root of the repo extending the eslint config for the target project type

### Node JS

```
module.exports = {
  root: true,
  extends: '@edwmurph/eslint-config'
};
```

### Gatsby JS

```
module.exports = {
  root: true,
  extends: '@edwmurph/eslint-config/gatsby'
};
```

### React

```
module.exports = {
  root: true,
  extends: '@edwmurph/eslint-config/react'
};
```

### NextJS

```
module.exports = {
  root: true,
  extends: '@edwmurph/eslint-config/nextjs'
};
```

### Vue

```
module.exports = {
  root: true,
  extends: '@edwmurph/eslint-config/vue'
};
```
