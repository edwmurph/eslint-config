"use strict";

const js = require("@eslint/js");
const globals = require("globals");
const importPlugin = require("eslint-plugin-import");
const n = require("eslint-plugin-n");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [
  {
    name: "@edwmurph/eslint-config/ignores",
    ignores: ["**/node_modules/**", "**/dist/**", "**/coverage/**"],
  },
  js.configs.recommended,
  {
    name: "@edwmurph/eslint-config/nodejs",
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
      n,
    },
    rules: {
      camelcase: "off",
      "max-len": [
        "error",
        { code: 100, ignoreStrings: true, ignoreUrls: true },
      ],
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "object-curly-spacing": ["error", "always"],
      "max-statements-per-line": ["error", { max: 1 }],
      "consistent-return": "off",
      "no-console": "off",
      "class-methods-use-this": "off",
      "comma-dangle": ["error", "never"],
      "arrow-body-style": "off",
      "n/no-exports-assign": "error",
      "n/no-extraneous-require": "error",
      "n/no-missing-require": "error",
      "n/process-exit-as-throw": "error",
      "n/no-deprecated-api": "error",
      "n/shebang": "error",
      "import/no-unresolved": "off",
    },
  },
  {
    name: "@edwmurph/eslint-config/nodejs-modules",
    files: ["**/*.mjs"],
    languageOptions: {
      sourceType: "module",
    },
  },
  prettierRecommended,
];
