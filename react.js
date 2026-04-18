"use strict";

const js = require("@eslint/js");
const globals = require("globals");
const importPlugin = require("eslint-plugin-import");
const reactPlugin = require("eslint-plugin-react");
const unicornPlugin = require("eslint-plugin-unicorn").default;
const prettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [
  {
    name: "@edwmurph/eslint-config/ignores",
    ignores: ["**/node_modules/**", "**/dist/**", "**/coverage/**"],
  },
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    name: "@edwmurph/eslint-config/react",
    files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
      unicorn: unicornPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
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
      "no-alert": "off",
      "no-await-in-loop": "off",
      "object-curly-newline": "off",
      "jsx-quotes": ["error", "prefer-single"],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "off",
      "unicorn/filename-case": [
        "error",
        { case: "kebabCase", multipleFileExtensions: true },
      ],
    },
  },
  prettierRecommended,
];
