module.exports = {
  root: true,
  plugins: ['import', 'prettier', 'simple-import-sort'],
  extends: ['airbnb-typescript/base', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': 2,
    'no-unused-vars': 2,
    'no-param-reassign': 2,
    'no-restricted-imports': 2,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // simple-import-sort
    'sort-imports': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 1. Side effect imports
          ['^\\u0000'],
          // 2. React and React Native imports
          ['^react$', '^react-native$', '^react/', '^react-native/'],
          // 3. Any other 3rd party imports
          ['^@?\\w'],
          // 4. Our modules, other than the module the current file is part of
          [
            '^@services?\\w',
            '^@components?\\w',
            '^@hooks?\\w',
            '^@utils?\\w',
            '^@screens?\\w',
            '^@store?\\w',
            '^@theme?\\w',
            '^@config?\\w',
            '^@assets?\\w',
          ],
          // 5. Other parts of the same module that the current file is part of
          ['^\\.'],
          // 6. Styles
          ['^\\./styles'],
          // 7. Types
          ['^.*\\u0000$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
