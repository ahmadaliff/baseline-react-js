import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jest from 'eslint-plugin-jest';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
  },
  js.configs.recommended,
  react.configs.recommended,
  reactHooks.configs.recommended,
  prettier,
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      jest,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      'react-refresh' : reactRefresh
    },

    settings: {
      react: {
        version: '18.2',
      },
    },

    rules: {
      'react-refresh/only-export-components': 'warn',
      'react/forbid-prop-types': 'off',
      'no-param-reassign': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
    },
  },
  {
    files: ['**/*.test.*', '**/*.spec.*'],
    plugins: { jest },
    languageOptions: {
      globals: {
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
  },
];
