const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  "extends": [
    "next/core-web-vitals",
    "next/typescript"
  ],
  "rules": {
    semi: [ERROR, 'always'],
    'space-infix-ops': ERROR,
    'no-multi-spaces': ERROR,
    'class-methods-use-this': WARNING,
    'arrow-parens': [ERROR, 'as-needed'],
    '@typescript-eslint/no-unused-vars': ERROR,
    // "no-restricted-imports": [
    //   "error",
    //   {
    //     "patterns": ["./*", "../*"]
    //   }
    // ]
  }
}
