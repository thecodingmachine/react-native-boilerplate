// @ts-check

import { createFolderStructure } from 'eslint-plugin-project-structure';

// src
// ├── __tests__/
// │   ├── mocks/
// |   |   ├── libs/
// |   |   |   ├── lib-name.ts
// |   |   └── *.ts
// │   ├── setup.ts
// │   └── test-wrappers.tsx
// ├── components/
// │   ├── atoms/
// │   |   ├── component-folder/
// |   |   |   ├── component-folder.tsx
// |   |   |   └── (component-folder.test.tsx)
// │   |   ├── ...
// │   |   └── index.ts
// │   ├── molecules/                 // same structure as atoms/
// │   ├── organisms/                 // same structure as atoms/
// │   ├── templates/                 // same structure as atoms/
// │   └── providers/                 // same structure as atoms/
// ├── hooks/
// │   ├── use-hook-name/
// │   |   ├── use-hook-name.ts
// │   |   └── (use-hook-name.test.ts)
// │   └── index.ts
// ├── navigators/
// |   ├── (navigator-folder)/
// |   |   |   ├── navigator-folder.tsx
// |   |   |   └── (navigator-folder.test.tsx)
// │   └── kebab-case.tsx
// ├── screens/
// |   ├── screen-folder/
// |   |   |   ├── screen-folder.tsx
// |   |   |   └── (screen-folder.test.tsx)
// │   └── index.ts
// ├── services/
// │   ├── domains/
// │   │   ├── domain-name/
// │   │   │   ├── (domain-name.api.ts)
// │   │   │   ├── (domain-name.query-options.ts)
// │   │   │   ├── (domain-name.schema.ts)
// │   │   │   └── index.ts
// │   ├── navigation/
// │   │   ├── paths.ts
// │   │   └── types.ts
// │   ├── theme-generation/
// |   |   ├── types/
// |   |   ├── background.ts
// |   |   ├── borders.ts
// |   |   ├── colors.ts
// |   |   ├── commons.ts
// |   |   ├── config.ts
// |   |   ├── fonts.ts
// |   |   ├── gutters.ts
// |   |   ├── theme.ts
// │   │   └── generate-config.ts
// │   ├── i18n/
// │   │   ├── instance.ts
// │   │   └── i18next.d.ts
// │   ├── <folder-name>/*(.test)?.ts
// │   ├── http-client.ts
// │   ├── storage.ts
// │   └── *.ts
// ├── theme/
// |   ├── assets/
// |   |   ├── icons/
// |   |   |   └── kebab-case.{svg}
// |   |   └── images/
// │   │   │   ├── dark/
// │   │   |   |   └── kebab-case.{webp}
// |   |   |   └── kebab-case.{webp}
// |   |   ├── context.d.ts
// |   |   └── get-assets-context.ts
// |   ├── _config.ts
// |   ├── background.ts
// |   ├── borders.ts
// |   ├── components.ts
// |   ├── fonts.ts
// |   ├── gutters.ts
// |   ├── layout.ts
// ├── translations/
// |   └── *.json
// ├── app.tsx
// └── reactotron.config.ts

export const folderStructureConfig = createFolderStructure({
  ignorePatterns: [
    'coverage/**',
    'eslint/**',
    'node_modules/**',
    './*.config.js',
  ],
  rules: {
    // ├── __tests__/
    tests: {
      name: '__tests__',
      // child
      children: [
        {
          children: [
            { children: [{ name: '*.ts' }], name: 'libs' },
            { name: '*.ts' },
          ],
          name: 'mocks',
        },
        { name: 'setup.ts' },
        { name: 'test-wrappers.tsx' },
      ],
    },
    // ├── components/
    components: {
      name: 'components',
      // child
      children: [
        {
          name: 'atoms',
          // child
          children: [{ name: 'index.ts' }, { ruleId: 'component' }],
          enforceExistence: 'index.ts',
        },
        {
          name: 'molecules',
          // child
          children: [{ name: 'index.ts' }, { ruleId: 'component' }],
          enforceExistence: 'index.ts',
        },
        {
          name: 'organisms',
          // child
          children: [{ name: 'index.ts' }, { ruleId: 'component' }],
          enforceExistence: 'index.ts',
        },
        {
          name: 'templates',
          // child
          children: [{ name: 'index.ts' }, { ruleId: 'component' }],
          enforceExistence: 'index.ts',
        },
        {
          name: 'providers',
          // child
          children: [{ name: 'index.ts' }, { ruleId: 'component' }],
          enforceExistence: 'index.ts',
        },
      ],
    },
    // ├── components/*
    component: {
      name: '{kebab-case}',
      // child
      children: [
        { name: '{folder-name}(-{kebab-case})?.tsx' },
        { name: '{folder-name}(-{kebab-case})?.stories.tsx' },
        { name: '{folder-name}(-{kebab-case})?.test.tsx' },
      ],
    },
    componentStrict: {
      name: '{kebab-case}',
      // child
      children: [
        {
          name: '{folder-name}(-{kebab-case})?.tsx',
          // force existence
          enforceExistence: ['{node-name}.stories.tsx', '{node-name}.test.tsx'],
        },
        { name: '{folder-name}(-{kebab-case})?.stories.tsx' },
        { name: '{folder-name}(-{kebab-case})?.test.tsx' },
      ],
    },
    // ├── hooks/
    hooks: {
      name: 'hooks',
      // child
      children: [{ ruleId: 'hook' }, { name: 'index.ts' }],
    },
    // ├── hooks/*
    hook: {
      name: 'use-{kebab-case}',
      // child
      children: [
        { name: '{folder-name}.ts' },
        { name: '{folder-name}.test.ts' },
      ],
    },
    navigators: {
      name: 'navigators',
      // child
      children: [
        { name: 'index.ts' },
        { name: '*.tsx' },
        {
          children: [
            { name: '{folder-name}.tsx' },
            { name: '{folder-name}.test.tsx' },
          ],
          name: '{kebab-case}',
        },
      ],
    },
    screens: {
      name: 'screens',
      // child
      children: [
        { name: 'index.ts' },
        {
          children: [
            { name: '{folder-name}.tsx' },
            { name: '{folder-name}.test.tsx' },
          ],
          name: '{kebab-case}',
        },
      ],
    },
    // ├── services/
    services: {
      name: 'services',
      // child
      children: [
        { ruleId: 'domains' },
        { ruleId: 'navigation' },
        { ruleId: 'i18n' },
        { ruleId: 'themeGen' },
        { name: '{kebab-case}.ts' },
        {
          name: '{kebab-case}',
          // child
          children: [
            { name: '{folder-name}.ts' },
            { name: '{folder-name}.test.ts' },
          ],
        },
      ],
    },
    // ├── services/domains
    domains: {
      name: 'domains',
      // child
      children: [{ ruleId: 'domain' }, { name: 'common.ts' }],
    },
    // ├── services/domains/*
    domain: {
      name: '{kebab-case}',
      // child
      children: [
        { name: '{folder-name}.api.ts' },
        { name: '{folder-name}.query-options.ts' },
        { name: '{folder-name}.schema.ts' },
        { name: 'index.ts' },
      ],
    },
    // ├── services/navigation

    navigation: {
      name: 'navigation',
      // child
      children: [{ name: 'paths.ts' }, { name: 'types.ts' }],
    },
    // ├── services/i18n
    i18n: {
      name: 'i18n',
      // child
      children: [{ name: 'instance.ts' }, { name: 'i18next.d.ts' }],
    },
    // ├── services/theme-generation
    themeGen: {
      name: 'theme-generation',
      // child
      children: [
        {
          name: 'types',
          // child
          children: [
            { name: 'backgrounds.ts' },
            { name: 'borders.ts' },
            { name: 'colors.ts' },
            { name: 'common.ts' },
            { name: 'config.ts' },
            { name: 'fonts.ts' },
            { name: 'gutters.ts' },
            { name: 'theme.ts' },
          ],
        },
        { name: 'generate-config.ts' },
      ],
    },
    // ├── theme/
    theme: {
      name: 'theme',
      // child
      children: [
        {
          name: 'assets',
          // child
          children: [
            {
              name: 'icons',
              // child
              children: [{ name: 'kebab-case.{svg}' }],
            },
            {
              name: 'images',
              // child
              children: [
                {
                  children: [{ name: 'kebab-case.{webp}' }],
                  name: 'dark',
                },
                { name: 'kebab-case.{webp}' },
              ],
            },
            {
              name: 'context.d.ts',
            },
            {
              name: 'get-assets-context.ts',
            },
          ],
        },
        { name: '_config.ts' },
        { name: 'backgrounds.ts' },
        { name: 'borders.ts' },
        { name: 'components.ts' },
        { name: 'fonts.ts' },
        { name: 'gutters.ts' },
        { name: 'layout.ts' },
      ],
    },
    // ├── translations/
    translations: {
      name: 'translations',
      // child
      children: [{ name: '*.json' }],
    },
  },
  structure: [
    {
      name: 'src',
      // folders
      children: [
        { ruleId: 'tests' },
        { ruleId: 'components' },
        { ruleId: 'hooks' },
        { ruleId: 'navigators' },
        { ruleId: 'screens' },
        { ruleId: 'services' },
        { ruleId: 'theme' },
        { ruleId: 'translations' },
        { name: 'app.tsx' },
        { name: 'reactotron.config.ts' },
      ],
    },
    { name: 'index.d.ts' },
    { name: 'index.js' },
  ],
});
