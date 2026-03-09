// @ts-check

// src
// ├── services/
// │   ├── domains/
// │   │   ├── domain-name/
// │   │   │   ├── domain-name.(api).ts
// │   │   │   ├── domain-name.(query-options).ts <-- HERE
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
      filePattern: 'src/services/domains/**/*.query-options.ts',
      rules: [
        {
          filenamePartsToRemove: '.query-options',
          format: '{FileName}QueryKeys',
          positionIndex: 0,
          scope: 'fileExport',
          selector: ['variable'],
        },
        {
          format: '{camelCase}(Query|Mutation)Options',
          scope: 'fileExport',
          selector: ['arrowFunction', 'function'],
        },
        {
          format: ['{camelCase}', '{SNAKE_CASE}'],
          scope: 'fileRoot',
          selector: ['variable'],
        },
      ],
    },
  ],
};
