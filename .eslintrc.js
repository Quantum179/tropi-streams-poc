module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-use-v-if-with-v-for': 0,
    'quotes': 0,
    'prefer-template': 0,
    'prefer-const': 0,
    'comma-dangle': 0,
    'keyword-spacing': 0,
    'no-plusplus': 0,
    'semi': 0,
    'max-len': 0,
    'prefer-destructuring': 0,
    'no-multiple-empty-lines': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'global-require': 0
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
