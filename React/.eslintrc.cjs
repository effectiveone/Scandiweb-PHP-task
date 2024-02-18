module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Dodanie pluginu TypeScript dla ESLint
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser', // Określenie parsera dla TypeScriptu
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@typescript-eslint'], // Dodanie pluginu TypeScript do ESLint
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Dodatkowe reguły dla TypeScriptu
    '@typescript-eslint/no-explicit-any': 'off', // Możesz dostosować reguły dla TypeScriptu tutaj
  },
};
