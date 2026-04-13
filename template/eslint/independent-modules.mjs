// @ts-check

/**
 * DISCLAIMER - Work in Progress Configuration
 * ==============================================
 * ⚠️ This configuration is subject to evolution and will adapt to your needs.
 *
 * Feel free to modify this structure according to your requirements:
 * - Add custom rules
 * - Remove irrelevant rules
 *
 * 📖 To understand how to use, modify or disable this configuration,
 *    check out the documentation: https://thecodingmachine.github.io/react-native-boilerplate/docs/eslint-project-structure
 *
 */

import { createIndependentModules } from 'eslint-plugin-project-structure';

const reusableImportPatterns = {
  testWrappers: ['src/__tests__/**/*.tsx'],
  // ├── components/
  // │   ├── atoms/
  atomsBarrel: ['src/components/atoms/index.ts'],
  // │   ├── molecules/
  moleculesBarrel: ['src/components/molecules/index.ts'],
  // │   ├── organisms/
  organismsBarrel: ['src/components/organisms/index.ts'],
  // │   ├── templates/
  templatesBarrel: ['src/components/templates/index.ts'],
  // │   └── providers/
  providersBarrel: ['src/components/providers/index.ts'],
  // aggregate all barrels for easy import in rules@&
  components: [
    '{atomsBarrel}',
    '{moleculesBarrel}',
    '{organismsBarrel}',
    '{templatesBarrel}',
    '{providersBarrel}',
  ],
  // ├── hooks/
  hooksBarrel: ['src/hooks/index.ts'],
  // ├── navigators/
  navigatorsBarrel: ['src/navigators/index.ts'],
  // ├── screens/
  screensBarrel: ['src/screens/index.ts'],
  // ├── services/
  services: [
    'src/services/*.ts',
    'src/services/domains/**/index.ts',
    'src/services/**/*.ts',
  ],
  themeService: [
    'src/services/theme-generation/*.ts',
    'src/services/theme-generation/**/*.ts',
  ],
  // ├── theme/
  themeConfig: ['src/theme/*.ts'],
  // │   ├── assets/
  getAssetsContext: ['src/theme/assets/get-assets-context.ts'],
  // │   |   ├── icons/
  themeIcons: [String.raw`src/theme/assets/icons/*.svg`],
  // |   |   └── images/
  themeImages: [
    'src/theme/assets/images/*.webp',
    'src/theme/assets/images/**/*.png',
  ],
  // ├── translations/
  translations: ['src/translations/*.json'],
};

export const independentModulesConfig = createIndependentModules({
  modules: [
    // src
    // ├── __tests__/
    {
      name: 'Tests files',
      pattern: 'src/__tests__/**/*.(ts|tsx)',
      // can import:
      allowImportsFrom: [
        '{dirname}/**/*.(ts|tsx)',
        '{hooksBarrel}',
        '{services}',
        '{providersBarrel}',
        '{getAssetsContext}',
      ],
    },
    // ├── components/
    {
      name: 'tests Components',
      pattern: 'src/components/**/*.test.tsx',
      // can import:
      allowImportsFrom: [
        '{testWrappers}',
        '{dirname}/*.tsx',
        '{hooksBarrel}',
        '{services}',
        '{providersBarrel}',
      ],
    },
    // │   ├── atoms/
    {
      name: 'Atoms Components',
      pattern: 'src/components/atoms/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{dirname}/*.tsx',
        '{providersBarrel}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
        '{getAssetsContext}',
      ],
    },
    // │   ├── molecules/
    {
      name: 'Molecules Components',
      pattern: 'src/components/molecules/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{dirname}/*.tsx',
        '{atomsBarrel}',
        '{providersBarrel}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
        '{getAssetsContext}',
      ],
    },
    // │   ├── organisms/
    {
      name: 'Organisms Components',
      pattern: 'src/components/organisms/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{dirname}/*.tsx',
        '{atomsBarrel}',
        '{moleculesBarrel}',
        '{providersBarrel}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
        '{getAssetsContext}',
      ],
    },
    // │   ├── templates/
    {
      name: 'Templates Components',
      pattern: 'src/components/templates/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{family_2}/**/*.tsx', // allow imports from same family so templates can import other templates
        '{dirname}/*.tsx',
        '{atomsBarrel}',
        '{moleculesBarrel}',
        '{organismsBarrel}',
        '{providersBarrel}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
        '{getAssetsContext}',
      ],
    },
    // │   └── providers/
    {
      name: 'Theme Provider',
      pattern: 'src/components/providers/theme-provider/theme-provider.tsx',
      // can import:
      allowImportsFrom: [
        '{hooksBarrel}',
        '{services}',
        '{getAssetsContext}',
        '{themeConfig}',
      ],
    },
    {
      name: 'Providers Components',
      pattern: 'src/components/providers/**/*.tsx',
      // can import:
      allowImportsFrom: ['{hooksBarrel}', '{services}', '{getAssetsContext}'],
    },
    // ├── hooks/
    {
      name: 'Hooks',
      pattern: 'src/hooks/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{family_1}/**/use-*.ts', // allow imports from same family so hooks can import other hooks
        '{services}',
      ],
    },
    // TODO: improve this rule to allow imports from same family only but also from all barrels above
    {
      name: 'Tests hooks files',
      pattern: 'src/hooks/**/*.test.ts',
      // can import:
      allowImportsFrom: ['{family_2}/*.ts'],
    },
    // ├── screens/
    {
      name: 'Screens Test Components',
      pattern: 'src/screens/**/*.test.tsx',
      // can import:
      allowImportsFrom: [
        '{family_1}/**/*.tsx', // allow imports from same family so screens test files can import other screens test files
        '{components}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
      ],
    },
    {
      name: 'Screens Components',
      pattern: 'src/screens/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{components}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
      ],
    },
    // ├── navigators/
    {
      name: 'Navigators Components',
      pattern: 'src/navigators/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{screensBarrel}',
        '{components}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
      ],
    },
    // ├── services/
    {
      name: 'Services',
      pattern: 'src/services/**/*.ts',
      // can import:
      allowImportsFrom: [
        '{family_1}/**/*.ts',
        '{translations}',
        '{themeImages}',
        '{themeIcons}',
      ], // allow imports from same family so services can import other services
    },
    // ├── theme/
    {
      name: 'Theme',
      pattern: 'src/theme/**/*.ts',
      // can import nothing:
      allowImportsFrom: [
        '{family_1}/**/*.ts', // allow imports from same family so theme files can import other theme files
        '{themeService}',
        //TODO: allow imports from themegen
      ],
    },
    // ├── translations/
    {
      name: 'Translations',
      pattern: 'src/translations/**/*.ts',
      // can import nothing:
      allowImportsFrom: [],
    },
    // └── app.tsx
    {
      name: 'app.tsx',
      pattern: 'src/app.tsx',
      // can import:
      allowImportsFrom: [
        '{components}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
        '{navigatorsBarrel}',
      ],
    },
  ],
  reusableImportPatterns,
});
