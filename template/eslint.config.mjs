import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import tsEslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  ...tsEslint.configs.strict,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      import: importPlugin,
      react,
      'react-hooks': reactHooks,
      unicorn,
      'unused-imports': unusedImports,
      jest,
    },
    rules: {
      'import/no-unresolved': 0, // handled by TypeScript
      'unicorn/prefer-top-level-await': 0, // not valid on RN for the moment
      curly: 2,
      // `import/default`, `import/namespace` and `import/no-duplicates` are slow.
      'import/default': 0,
      'import/named': 0,
      'import/namespace': 0,
      'import/no-duplicates': 0,
      'import/no-extraneous-dependencies': 2,
      'import/no-named-as-default-member': 0,
      'import/order': 0,
      'no-const-assign': 2,
      'no-constant-binary-expression': 2,
      'no-extra-parens': [2, 'functions'],
      'no-irregular-whitespace': 2,
      'no-this-before-super': 2,
      'no-unused-expressions': 2,
      'no-unused-labels': 2,
      'no-unused-vars': 0,
      'no-useless-rename': 2,
      'no-var': 2,
      'no-console': 2,
      'no-warning-comments': [2, { terms: ['@nocommit'] }],
      'object-curly-spacing': 0,
      'object-shorthand': 2,
      'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
      'prefer-const': 2,
      'react-hooks/exhaustive-deps': 2,
      'react/jsx-sort-props': 2,
      'react/prop-types': 2,
      'react/react-in-jsx-scope': 0,
      'react/require-default-props': [
        2,
        {
          forbidDefaultForRequired: true,
          functions: 'defaultArguments',
        },
      ],
      'unicorn/better-regex': 2,
      'unicorn/catch-error-name': 2,
      'unicorn/consistent-empty-array-spread': 2,
      'unicorn/consistent-function-scoping': 2,
      'unicorn/no-abusive-eslint-disable': 2,
      'unicorn/no-hex-escape': 2,
      'unicorn/no-invalid-fetch-options': 2,
      'unicorn/no-length-as-slice-end': 2,
      'unicorn/no-magic-array-flat-depth': 2,
      'unicorn/no-typeof-undefined': 2,
      'unicorn/no-unnecessary-polyfills': 2,
      'unicorn/no-useless-promise-resolve-reject': 2,
      'unicorn/no-useless-spread': 2,
      'unicorn/numeric-separators-style': 2,
      'unicorn/prefer-array-flat-map': 2,
      'unicorn/prefer-array-index-of': 2,
      'unicorn/prefer-array-some': 2,
      'unicorn/prefer-at': 2,
      'unicorn/prefer-dom-node-append': 2,
      'unicorn/prefer-native-coercion-functions': 2,
      'unicorn/prefer-node-protocol': 2,
      'unicorn/prefer-number-properties': 2,
      'unicorn/prefer-optional-catch-binding': 2,
      'unicorn/prefer-set-size': 2,
      'unicorn/prefer-string-raw': 2,
      'unicorn/prefer-string-replace-all': 2,
      'unicorn/prefer-string-slice': 2,
      'unicorn/prefer-structured-clone': 2,
      'unicorn/prefer-ternary': 2,
      'unicorn/text-encoding-identifier-case': 2,
      'unused-imports/no-unused-imports': 0,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsEslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      'typescript-sort-keys': typescriptSortKeys,
    },
    rules: {
      'import/no-unresolved': 0, // handled by TypeScript
      '@typescript-eslint/consistent-type-imports': 2,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-dynamic-delete': 0,
      '@typescript-eslint/no-invalid-void-type': 0,
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-this-alias': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-var-requires': 0,
      'react/prop-types': 0,
      'typescript-sort-keys/interface': 2,
      'typescript-sort-keys/string-enum': 2,
    },
  },
  {
    files: ['./**/*.test.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-unsafe-return': 0,
    },
  },
  {
    ignores: ['metro.config.js'],
  },
];
