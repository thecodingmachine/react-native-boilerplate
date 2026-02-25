// @ts-check

// src
// ├── services/
// │   ├── domains/
// │   │   ├── domain-name/
// │   │   │   ├── domain-name.(api).ts
// │   │   │   ├── domain-name.(query-options).ts
// │   │   │   ├── domain-name.(schema).ts <-- HERE
// │   │   │   └── index.ts
/**
 * @type {ReturnType<typeof import('eslint-plugin-project-structure').createFileComposition>}
 */
export default {
  filesRules: [
    {
      allowOnlySpecifiedSelectors: {
        fileRoot: false,
        nestedSelectors: false,
      },
      filePattern: 'src/services/domains/**/*.schema.ts',
      rules: [
        {
          format: '{PascalCase}',
          scope: 'fileExport',
          selector: ['enum', 'type'],
        },
        {
          format: '{SNAKE_CASE}',
          scope: 'fileExport',
          selector: ['variable'],
        },
        {
          format: '{PascalCase}Schema',
          scope: 'fileExport',
          selector: ['variableExpression'],
        },
        {
          format: 'build{PascalCase}Schema',
          scope: ['fileExport', 'fileRoot'],
          selector: ['arrowFunction'],
        },
      ],
    },
  ],
};
