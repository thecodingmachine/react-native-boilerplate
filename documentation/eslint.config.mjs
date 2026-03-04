//  @ts-check
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

const ERROR = 2;
const OFF = 0;

export default defineConfig([
  {
    ignores: [
      'node_modules/**',
      '.docusaurus/**',
      'build/**',
      'babel.config.js',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  unicorn.configs.all,
  perfectionist.configs['recommended-alphabetical'],
  react.configs.flat['jsx-runtime'],
  reactRefresh.configs.recommended,
  reactYouMightNotNeedAnEffect.configs.recommended,
  eslintConfigPrettier, // last
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      // parser: tseslint.parser,
    },
    settings: {
      'import/resolver': {
        extensions: ['.js', '.mjs', '.ts', '.tsx'],
        node: true,
        typescript: true,
      },
      perfectionist: {
        partitionByComment: true,
        type: 'alphabetical',
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    ...reactHooks.configs.flat['recommended-latest'],
    // plugins: {
    //   'react-hooks': reactHooks,
    // },
    rules: {
      'import-x/order': OFF, // handled by perfectionist
      'react-you-might-not-need-an-effect/no-adjust-state-on-prop-change':
        ERROR,
      'react-you-might-not-need-an-effect/no-chain-state-updates': ERROR,
      'react-you-might-not-need-an-effect/no-derived-state': ERROR,
      'react-you-might-not-need-an-effect/no-empty-effect': ERROR,
      'react-you-might-not-need-an-effect/no-event-handler': ERROR,
      'react-you-might-not-need-an-effect/no-initialize-state': ERROR,
      'react-you-might-not-need-an-effect/no-pass-data-to-parent': ERROR,
      'react-you-might-not-need-an-effect/no-pass-live-state-to-parent': ERROR,
      'react-you-might-not-need-an-effect/no-reset-all-state-on-prop-change':
        ERROR,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
      '@typescript-eslint/dot-notation': [ERROR, { allowKeywords: true }],
      '@typescript-eslint/no-empty-function': OFF,
      '@typescript-eslint/only-throw-error': [OFF],
      '@typescript-eslint/restrict-template-expressions': OFF,
      'import/no-unresolved': OFF, // handled by TypeScript
      'no-console': [ERROR, { allow: ['warn', 'error'] }],
      'no-duplicate-imports': ERROR,
      'no-magic-numbers': OFF,
      'react-refresh/only-export-components': OFF,
      'react/forbid-component-props': OFF,
      'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', '.jsx'] }],
      'react/jsx-max-depth': [ERROR, { max: 10 }],
      'react/jsx-no-bind': OFF,
      'react/jsx-no-literals': ERROR,
      'react/jsx-props-no-spreading': OFF,
      'react/jsx-sort-props': OFF, // Handled by perfectionist
      'react/no-multi-comp': OFF,
      'react/no-unescaped-entities': OFF,
      'react/require-default-props': [
        ERROR,
        {
          forbidDefaultForRequired: true,
          functions: 'defaultArguments',
        },
      ],
      // Disable perfectionist/sort-objects for createFileRoute calls to prioritize @tanstack/router/create-route-property-order
      'perfectionist/sort-objects': [
        ERROR,
        {
          useConfigurationIf: {
            callingFunctionNamePattern: '^createFileRoute$',
          },
        },
      ],
      'sort-imports': OFF, // handled by perfectionist
      'unicorn/no-keyword-prefix': OFF,
      'unicorn/no-useless-undefined': OFF,
      'unicorn/prefer-top-level-await': 0, // not valid on RN for the moment
      'unicorn/prevent-abbreviations': [
        ERROR,
        {
          allowList: {
            env: true,
            Param: true,
            Params: true,
            props: true,
            Props: true,
            utils: true,
          },
        },
      ],
    },
  },
]);
