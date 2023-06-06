/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "eslint:recommended",
    "@nuxtjs/eslint-config-typescript"
  ],
  plugins: [],
  rules: {
    quotes: [2, "double", { avoidEscape: true }]
  }
}
