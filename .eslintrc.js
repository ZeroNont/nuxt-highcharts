module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'indent': 'off',
    'vue/max-attributes-per-line': 'off',
    "no-unused-vars": 0,
    "vue/multi-word-component-names": ["error", {
    "ignores": []
  }]
  }
}
