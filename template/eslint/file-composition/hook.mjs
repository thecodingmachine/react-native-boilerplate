// @ts-check

// ├── hooks/
// │   ├── use-hook-name/
// │   |   ├── use-hook-name.ts <-- HERE
// │   |   └── (use-hook-name.test.tsx)
// │   └── index.ts

/**
 * @type {ReturnType<typeof import('eslint-plugin-project-structure').createFileComposition>}
 */
export default {
  filesRules: [
    {
      filePattern: 'src/hooks/use-*/use-*.test.ts',
    },
    {
      allowOnlySpecifiedSelectors: {
        nestedSelectors: false,
      },
      filePattern: ['src/hooks/use-*/use-*.ts'],
      rules: [
        // Can create inner types and enums
        {
          format: '{PascalCase}',
          positionIndex: { index: 0, sorting: 'none' },
          scope: 'fileRoot',
          selector: ['type', 'enum'],
        },
        // Context hook
        {
          format: '{PascalCase}Context',
          positionIndex: { index: 1, sorting: 'none' },
          scope: 'fileExport',
          selector: ['variableExpression'],
        },
        // can create inner const variables
        {
          format: '{SNAKE_CASE}',
          positionIndex: { index: 1, sorting: 'none' },
          scope: 'fileRoot',
          selector: ['variable', 'variableExpression'],
        },
        // can create inner const variables
        {
          format: '{camelCase}',
          positionIndex: { index: 1, sorting: 'none' },
          scope: 'fileRoot',
          selector: ['arrowFunction'],
        },
        // Always create the type of the params of the hook
        {
          format: '{FileName}Params',
          positionIndex: 2,
          scope: 'fileRoot',
          selector: ['type'],
        },
        // The hook itself
        {
          format: '{fileName}',
          positionIndex: -1,
          scope: 'fileExport',
          selector: ['arrowFunction'],
        },
      ],
    },
  ],
};
