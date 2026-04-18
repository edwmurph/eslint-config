# eslint-config
[![npm version](https://badge.fury.io/js/%40edwmurph%2Feslint-config.svg)](https://badge.fury.io/js/%40edwmurph%2Feslint-config)

Flat ESLint configs for Node.js and React.

## Install

```bash
npm install --save-dev @edwmurph/eslint-config
```

## Usage

This package exports flat configs. Create an `eslint.config.js` file in your project.

### Node.js

```js
const nodejsConfig = require('@edwmurph/eslint-config');

module.exports = [...nodejsConfig];
```

### React

```js
const reactConfig = require('@edwmurph/eslint-config/react');

module.exports = [...reactConfig];
```

## Lint Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Prettier Integration

Both `nodejs` and `react` configs include `eslint-plugin-prettier/recommended`, which applies:

- `eslint-plugin-prettier`
- `eslint-config-prettier`

Running `eslint --fix` will apply Prettier formatting for backend and frontend code.
