module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
    'vue',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue-types/strongly-recommended',
    '@nuxtjs',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    serviceworker: true,
  },
  rules: {
    'prettier/prettier': [
      'off',
      {
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
        printWidth: 150,
      },
    ],
    'semi': [2, 'never'],
    'function-paren-newline': ['off'],
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-newline': ['off'],
    'max-len': ['error', {
      code: 120,
      ignoreUrls: true
    }],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    'vue-types/require-default-prop': ['off'],
    'vue/require-default-prop': ['off'],
  },
}