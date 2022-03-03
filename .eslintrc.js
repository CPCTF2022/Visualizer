module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/member-delimiter-style': 'off'
  },
  plugins: ['react'],
  overrides: [
    {
      // 直下のファイル
      files: ['*.{js,mjs,cjs}'],
      excludedFiles: ['*/**/*.{js,mjs,cjs}'],
      env: {
        node: true
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  reportUnusedDisableDirectives: true
}