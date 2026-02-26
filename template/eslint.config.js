//  @ts-check
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';
import perfectionist from 'eslint-plugin-perfectionist';
import {
  projectStructureParser,
  projectStructurePlugin,
} from 'eslint-plugin-project-structure';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import { fileCompositionConfig } from './eslint/file-composition/index.mjs';
import { folderStructureConfig } from './eslint/folder-structure.mjs';
import { independentModulesConfig } from './eslint/independent-modules.mjs';

const ERROR = 2;
const OFF = 0;

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['project-structure.cache.json'],
    languageOptions: { parser: projectStructureParser },
    plugins: {
      'project-structure': projectStructurePlugin,
    },
    rules: {
      'project-structure/file-composition': [ERROR, fileCompositionConfig],
      'project-structure/folder-structure': [ERROR, folderStructureConfig],
      'project-structure/independent-modules': [
        ERROR,
        independentModulesConfig,
      ],
    },
  },
  {
    ignores: ['coverage/**', 'dist/**'],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  unicorn.configs.all,
  perfectionist.configs['recommended-alphabetical'],
  react.configs.flat['jsx-runtime'],
  reactRefresh.configs.recommended,
  reactYouMightNotNeedAnEffect.configs.strict,
  eslintConfigPrettier, // last
  {
    languageOptions: {
      globals: {
        __DEV__: 'readonly', // define it as a global variable
      },
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
    rules: {
      'import-x/order': OFF, // handled by perfectionist
      // 'react-you-might-not-need-an-effect/no-adjust-state-on-prop-change':
      //   ERROR,
      // 'react-you-might-not-need-an-effect/no-chain-state-updates': ERROR,
      // 'react-you-might-not-need-an-effect/no-derived-state': ERROR,
      // 'react-you-might-not-need-an-effect/no-empty-effect': ERROR,
      // 'react-you-might-not-need-an-effect/no-event-handler': ERROR,
      // 'react-you-might-not-need-an-effect/no-initialize-state': ERROR,
      // 'react-you-might-not-need-an-effect/no-manage-parent': ERROR,
      // 'react-you-might-not-need-an-effect/no-pass-data-to-parent': ERROR,
      // 'react-you-might-not-need-an-effect/no-pass-live-state-to-parent': ERROR,
      // 'react-you-might-not-need-an-effect/no-reset-all-state-on-prop-change':
      // ERROR,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
      '@typescript-eslint/dot-notation': [ERROR, { allowKeywords: true }],
      '@typescript-eslint/no-empty-function': OFF,
      '@typescript-eslint/no-useless-default-assignment': OFF,
      '@typescript-eslint/only-throw-error': [OFF],
      '@typescript-eslint/restrict-template-expressions': OFF,
      'import/no-unresolved': OFF, // handled by TypeScript
      'no-console': [ERROR, { allow: ['warn', 'error'] }],
      'no-duplicate-imports': ERROR,
      'no-magic-numbers': [
        ERROR,
        { ignore: [-1, 0, 1, 2, 3, 4, 5, 6], ignoreArrayIndexes: true },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: '@/components(/.+)?',
              groupName: 'components',
            },
            {
              elementNamePattern: '@/hooks(/.+)?',
              groupName: 'hooks',
            },
            {
              elementNamePattern: '@/navigation(/.+)?',
              groupName: 'navigation',
            },
            {
              elementNamePattern: '@/screens(/.+)?',
              groupName: 'screens',
            },
            {
              elementNamePattern: '@/test(/.+)?',
              groupName: 'test',
            },
            {
              elementNamePattern: '@/theme(/.+)?',
              groupName: 'theme',
            },
            {
              elementNamePattern: '@/translations(/.+)?',
              groupName: 'translations',
            },
          ],
          groups: [
            'side-effect',
            ['type'],
            ['builtin', 'external'],
            ['hooks', 'navigation', 'translations'],
            ['components', 'screens'],
            'internal',
            'unknown',
          ],
          newlinesBetween: 1,
          type: 'alphabetical',
        },
      ],
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
  {
    files: ['**/theme/*.ts'],
    rules: {
      'no-magic-numbers': OFF,
    },
  },
  {
    files: ['*.conf.js', '*.config.js', '*.setup.js'],
    rules: {
      '@typescript-eslint/no-require-imports': OFF,
      '@typescript-eslint/no-unsafe-assignment': OFF,
      '@typescript-eslint/no-unsafe-call': OFF,
      'no-undef': OFF,
      'unicorn/prefer-module': OFF,
    },
  },
  {
    files: ['**/*.spec.{js,ts,jsx,tsx}', '**/*.test.{js,ts,jsx,tsx}'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
    },
  },
  {
    ignores: ['plugins/**'],
  },
]);
