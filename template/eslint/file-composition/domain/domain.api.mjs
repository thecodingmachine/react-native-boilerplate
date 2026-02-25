// @ts-check

// src
// ├── services/
// │   ├── domains/
// │   │   ├── domain-name/
// │   │   │   ├── domain-name.(api).ts <-- HERE
// │   │   │   ├── domain-name.(query-options).ts
// │   │   │   ├── domain-name.(schema).ts
// │   │   │   └── index.ts

/**
 * @type {ReturnType<typeof import('eslint-plugin-project-structure').createFileComposition>}
 */
export default {
  filesRules: [
    {
      allowOnlySpecifiedSelectors: {
        nestedSelectors: false,
      },
      filePattern: 'src/services/domains/**/*.api.ts',
      rules: [
        {
          filenamePartsToRemove: '.api',
          format: '{FileName}Apis',
          positionIndex: -1,
          scope: 'fileExport',
          selector: ['variable'],
        },
      ],
    },
  ],
};
