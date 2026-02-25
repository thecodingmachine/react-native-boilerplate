// @ts-check

import { createIndependentModules } from 'eslint-plugin-project-structure';

const reusableImportPatterns = {
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
  // │   ├── assets/
  // │   |   ├── icons/
  getAssetsContext: ['src/theme/assets/get-assets-context.ts'],
  themeIcons: [String.raw`src/theme/assets/icons/*.svg`],
  // |   |   └── images/
  themeConfig: ['src/theme/*.ts'],
  themeImages: [
    'src/theme/assets/images/*.webp',
    'src/theme/assets/images/**/*.png',
  ],
  // |   ├── styles/
  themeStyles: ['src/theme/styles/*.css'],
  // ├── translations/
  translations: ['src/translations/*.json'],
};

export const independentModulesConfig = createIndependentModules({
  modules: [
    // src
    // ├── __tests__/
    // │   ├── mocks/
    // |   |   └── *.ts
    // │   ├── setup.ts
    // │   └── test-wrappers.tsx
    {
      name: 'Tests files',
      pattern: 'src/__tests__/**/*.(ts|tsx)',
      // can import:
      allowImportsFrom: [
        '{family}/**/*.(ts|tsx)',
        '{hooksBarrel}',
        '{services}',
        '{providersBarrel}',
        '{getAssetsContext}',
      ],
    },
    // ├── components/
    // │   ├── atoms/
    // │   |   ├── component-folder/
    // |   |   |   ├── component-folder.tsx
    // |   |   |   └── (component-folder.test.tsx)
    // │   |   ├── ...
    // │   |   └── index.ts
    // TODO: improve this rule to allow imports from same family only but also from all barrels below
    {
      name: 'Tests component files',
      pattern: 'src/components/**/*.(test|stories).tsx',
      // can import:
      allowImportsFrom: ['**/*'],
    },
    {
      name: 'Atoms Components',
      pattern: 'src/components/atoms/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{providersBarrel}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
        '{getAssetsContext}',
      ],
    },
    // │   ├── molecules/                 // same structure as atoms/
    {
      name: 'Molecules Components',
      pattern: 'src/components/molecules/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{atomsBarrel}',
        '{providersBarrel}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
        '{getAssetsContext}',
      ],
    },
    // │   ├── organisms/                 // same structure as atoms/
    {
      name: 'Organisms Components',
      pattern: 'src/components/organisms/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{atomsBarrel}',
        '{moleculesBarrel}',
        '{family_1}/**/*.tsx', // allow imports from same family so organisms can import other organisms
        '{providersBarrel}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
        '{getAssetsContext}',
      ],
    },
    // │   ├── templates/                 // same structure as atoms/
    {
      name: 'Templates Components',
      pattern: 'src/components/templates/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{atomsBarrel}',
        '{moleculesBarrel}',
        '{organismsBarrel}',
        '{providersBarrel}',
        '{hooksBarrel}',
        '{themeIcons}',
        '{themeImages}',
        '{services}',
        '{family_2}/**/*.tsx', // allow imports from same family so templates can import other templates
        '{getAssetsContext}',
      ],
    },
    // │   └── providers/                 // same structure as atoms/
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
      allowImportsFrom: [
        '{hooksBarrel}',
        '{themeIcons}', // why ?
        '{themeImages}', // why ?
        '{services}',
        '{getAssetsContext}',
      ],
    },
    // ├── hooks/
    // │   ├── use-hook-name/
    // │   |   ├── use-hook-name.ts
    // │   |   └── (use-hook-name.test.tsx)
    // │   └── index.ts
    {
      name: 'Hooks',
      pattern: 'src/hooks/**/*.tsx',
      // can import:
      allowImportsFrom: [
        '{family_1}/**/use-*.ts', // allow imports from same family so hooks can import other hooks
        // '{themeIcons}', // why ?
        // '{themeImages}', // why ?
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
    // │   ├── domains/
    // │   │   ├── domain-name/
    // │   │   │   ├── (api.ts)
    // │   │   │   ├── (query-options.ts)
    // │   │   │   ├── (schema.ts)
    // │   │   │   └── index.ts
    // │   ├── navigation/
    // │   │   ├── router.ts
    // │   │   └── routeTree.gen.ts
    // │   ├── i18n/
    // │   │   ├── instance.ts
    // │   │   └── i18next.d.ts
    // │   ├── api.ts
    // │   ├── instance.ts
    // │   └── *.ts
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
    // |   ├── assets/
    // |   |   ├── icons/
    // |   |   |   └── kebab-case.{svg}
    // |   |   └── images/
    // |   |   |   └── kebab-case.{webp}
    // |   ├── styles/
    // |   |   └── *.css
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
    // |   └── *.json
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
        '{themeStyles}',
        '{services}',
      ],
    },
  ],
  reusableImportPatterns,
});
