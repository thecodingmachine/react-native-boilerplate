---
slug: /eslint-project-structure
sidebar_label: ESLint & Project Structure
title: ESLint & Project Structure
id: eslint-project-structure
keywords: [eslint, project structure, code quality, linting, perfectionist, unicorn]
---

Version 5.0 introduces powerful ESLint rules that enforce project structure, code composition, and module independence.
These rules help maintain consistency and prevent common architectural issues as your project grows.

:::tip Optional Strict Rules
The project structure enforcement rules are **intentionally strict** to maintain architectural consistency. However, they are:
- **Evolutionary**: These rules will be refined and updated over time as best practices emerge
- **Optional**: If you find them too restrictive for your use case, you can disable them by commenting out the project-structure configuration in `eslint.config.js`:

```js title="eslint.config.js"
export default defineConfig([
  // {
  //   files: ['**/*.{js,jsx,ts,tsx}'],
  //   ignores: ['project-structure.cache.json'],
  //   languageOptions: { parser: projectStructureParser },
  //   plugins: {
  //     'project-structure': projectStructurePlugin,
  //   },
  //   rules: {
  //     'project-structure/file-composition': [ERROR, fileCompositionConfig],
  //     'project-structure/folder-structure': [ERROR, folderStructureConfig],
  //     'project-structure/independent-modules': [ERROR, independentModulesConfig],
  //   },
  // },
  // ... rest of config
]);
```

You can also selectively disable specific rules (e.g., only keep `folder-structure` but disable `independent-modules`).
:::

## Enhanced ESLint Configuration

The boilerplate now uses a modern ESLint flat config with several powerful plugins:

```js title="eslint.config.js"
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import perfectionist from 'eslint-plugin-perfectionist';
import { projectStructurePlugin } from 'eslint-plugin-project-structure';

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  unicorn.configs.all,
  perfectionist.configs['recommended-alphabetical'],
  // ... custom rules
]);
```

## Key Plugins

### 1. eslint-plugin-project-structure

This plugin enforces three critical aspects of your project:

#### Folder Structure

Ensures files are placed in the correct folders:

```js
'project-structure/folder-structure': [ERROR, {
  structure: {
    children: [
      {
        name: 'src',
        children: [
          { name: 'components' },
          { name: 'hooks' },
          { name: 'navigators' },
          { name: 'screens' },
          { name: 'services' },
          { name: 'theme' },
          { name: 'translations' },
          { name: '__tests__' },
        ],
      },
    ],
  },
}]
```

This prevents files from being placed in incorrect locations and enforces the boilerplate's architecture.

#### File Composition

Enforces what each file can contain based on its location:

**Hook files** (`hooks/**/*.ts`):
- ✅ Only function declarations and exports
- ❌ No class declarations, no inline objects

**Domain API files** (`services/domains/*/*.api.ts`):
- ✅ Only function declarations, exports, and API object
- ❌ No React components, no hooks

**Component files** (`components/**/*.tsx`):
- ✅ React components and related types
- ❌ No API calls, no business logic

Example configuration:

```js
{
  name: 'Hook',
  rules: {
    filePattern: '**/hooks/**/*.{ts,tsx}',
    allowOnlySpecifiedSelectors: true,
    selectors: ['function', 'exportNamedDeclaration'],
  },
}
```

This ensures each file has a single responsibility and prevents mixing concerns.

#### Independent Modules

Prevents circular dependencies and enforces module boundaries:

```js
'project-structure/independent-modules': [ERROR, {
  modules: [
    {
      name: 'hooks',
      pattern: 'src/hooks/**',
      errorMessage: 'Hooks should not depend on screens or navigators',
      allowImportsFrom: ['src/services/**', 'src/theme/**'],
    },
    {
      name: 'components',
      pattern: 'src/components/**',
      errorMessage: 'Components should not import from screens or navigators',
      allowImportsFrom: ['src/hooks/**', 'src/services/**'],
    },
  ],
}]
```

This creates a clear dependency hierarchy and prevents tight coupling.

### 2. eslint-plugin-perfectionist

Automatically sorts and organizes code elements alphabetically:

- **Import sorting**: Organizes imports by type (built-in, external, internal)
- **Object keys**: Sorts object properties alphabetically
- **Type members**: Organizes TypeScript interface/type members
- **Enum members**: Sorts enum values
- **JSX props**: Organizes component props

Example of sorted imports:

```tsx
// ✅ Correct order
import type { User } from './user.schema';

import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';

import { useTheme } from '@/hooks';
import { SafeScreen } from '@/components/templates';

import { fetchOneUserQueryOptions } from '@/services/domains/user/user.query-options';

// ❌ Incorrect order (ESLint will auto-fix)
import { SafeScreen } from '@/components/templates';
import { useTheme } from '@/hooks';
import { Text, View } from 'react-native';
```

### 3. eslint-plugin-unicorn

Enforces modern JavaScript/TypeScript best practices:

Examples:
- Prefer `node:` protocol for Node.js imports
- Prefer array method callbacks over inline functions
- Prefer `String#startsWith()` over regex
- Prevent abbreviations in names
- Enforce proper error handling

```tsx
// ❌ Avoid
if (str.match(/^foo/)) { }
const btn = document.getElementById('btn');

// ✅ Prefer
if (str.startsWith('foo')) { }
const button = document.getElementById('button');
```

### 4. eslint-plugin-react-you-might-not-need-an-effect

Prevents unnecessary `useEffect` usage:

```tsx
// ❌ Avoid - Derived state
const [fullName, setFullName] = useState('');
useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);

// ✅ Prefer - Computed value
const fullName = `${firstName} ${lastName}`;

// ❌ Avoid - Prop change handler
useEffect(() => {
  if (userId !== previousUserId) {
    fetchUser(userId);
  }
}, [userId]);

// ✅ Prefer - Key-based reset
<UserProfile key={userId} userId={userId} />
```

## File Naming Conventions

All files must use **kebab-case**:

```
✅ Correct:
  - asset-by-variant.tsx
  - use-theme.ts
  - user.api.ts
  - root.tsx
  - app.tsx

❌ Incorrect:
  - AssetByVariant.tsx
  - useTheme.ts
  - UserAPI.ts
  - Root.tsx
  - App.tsx
```

This is enforced by the folder structure rules.

## Dependency Hierarchy

The enforced dependency hierarchy prevents tight coupling and creates a clear architectural flow:

```
app.tsx
  ↓
Navigators (navigators/)
  ↓
Screens (screens/)
  ↓
Components (components/)
  ├─ Templates
  ├─ Organisms
  ├─ Molecules
  ├─ Atoms
  └─ Providers
  ↓
Hooks (hooks/)
  ↓
Services (services/)
  ↓
Theme (theme/) & Translations
```

### Detailed Import Rules

#### app.tsx
**Can import:**
- `@/components/*` (all component barrels: atoms, molecules, organisms, templates, providers)
- `@/hooks` (hooks barrel)
- `@/theme/assets/icons/*` and `@/theme/assets/images/*`
- `@/services/**/*`
- `@/navigators` (navigators barrel)

#### Navigators (`src/navigators/**/*.tsx`)
**Can import:**
- `@/screens` (screens barrel)
- `@/components/*` (all component barrels)
- `@/hooks` (hooks barrel)
- Theme assets (icons/images)
- `@/services/**/*`

#### Screens (`src/screens/**/*.tsx`)
**Can import:**
- `@/components/*` (all component barrels)
- `@/hooks` (hooks barrel)
- Theme assets (icons/images)
- `@/services/**/*`

**Cannot import:** Other screens, navigators

#### Components

Components follow the atomic design hierarchy:

**Templates** (`src/components/templates/**/*.tsx`):
- ✅ Other templates (same family)
- ✅ Atoms, Molecules, Organisms, Providers (via barrels)
- ✅ Hooks barrel
- ✅ Theme assets and `get-assets-context`
- ✅ Services
- ❌ Screens, Navigators

**Organisms** (`src/components/organisms/**/*.tsx`):
- ✅ Atoms, Molecules, Providers (via barrels)
- ✅ Hooks barrel
- ✅ Theme assets and `get-assets-context`
- ✅ Services
- ❌ Templates, Screens, Navigators

**Molecules** (`src/components/molecules/**/*.tsx`):
- ✅ Atoms, Providers (via barrels)
- ✅ Hooks barrel
- ✅ Theme assets and `get-assets-context`
- ✅ Services
- ❌ Molecules, Organisms, Templates, Screens, Navigators

**Atoms** (`src/components/atoms/**/*.tsx`):
- ✅ Providers (via barrel)
- ✅ Hooks barrel
- ✅ Theme assets and `get-assets-context`
- ✅ Services
- ❌ Other component types, Screens, Navigators

**Providers** (`src/components/providers/**/*.tsx`):
- ✅ Hooks barrel
- ✅ Services
- ✅ `get-assets-context`
- ❌ Other components, Screens, Navigators

**Special case - Theme Provider** (`src/components/providers/theme-provider/theme-provider.tsx`):
- ✅ Hooks barrel
- ✅ Services
- ✅ `get-assets-context`
- ✅ Theme config (`src/theme/*.ts`)

#### Hooks (`src/hooks/**/*.tsx`)
**Can import:**
- ✅ Other hooks from the same family (e.g., `use-*.ts`)
- ✅ Services
- ❌ Components, Screens, Navigators, Theme (except via services)

#### Services (`src/services/**/*.ts`)
**Can import:**
- ✅ Other services (same family)
- ✅ Translations (`src/translations/*.json`)
- ✅ Theme assets (icons/images)
- ❌ Components, Hooks, Screens, Navigators

#### Theme (`src/theme/**/*.ts`)
**Can import:**
- ✅ Other theme files (same family)
- ✅ Theme generation service (`src/services/theme-generation/**/*`)
- ❌ Everything else

#### Translations (`src/translations/**/*`)
**Cannot import anything** - they are pure data files.

### Key Principles

1. **Atomic Design Flow**: Components can only import from lower levels in the atomic hierarchy
2. **Barrel Imports**: Most cross-module imports must go through barrel files (`index.ts`)
3. **No Circular Dependencies**: The hierarchy prevents circular imports
4. **Same Family Imports**: Files can import from their own family/directory
5. **Services Independence**: Services are isolated from UI concerns

### Example Violations

```tsx
// ❌ Wrong: Atom importing Molecule
// src/components/atoms/button/button.tsx
import { Card } from '@/components/molecules'; // ERROR!

// ✅ Correct: Molecule importing Atom
// src/components/molecules/card/card.tsx
import { Button } from '@/components/atoms'; // OK

// ❌ Wrong: Hook importing Component
// src/hooks/use-navigation/use-navigation.ts
import { SafeScreen } from '@/components/templates'; // ERROR!

// ✅ Correct: Component importing Hook
// src/components/templates/safe-screen/safe-screen.tsx
import { useTheme } from '@/hooks'; // OK

// ❌ Wrong: Service importing Hook
// src/services/domains/user/user.api.ts
import { useUser } from '@/hooks'; // ERROR!

// ✅ Correct: Hook using Service
// src/hooks/use-user/use-user.ts
import { UserApis } from '@/services/domains/user/user.api'; // OK
```

## Auto-fixing

Many rules support auto-fixing. Run ESLint with the fix flag:

```bash
npm run lint -- --fix
```

This will automatically:
- Sort imports
- Sort object keys
- Fix naming issues (where possible)
- Apply perfectionist rules

## Customization

The ESLint configuration is modular. You can customize rules in separate files:

```
eslint/
  folder-structure.mjs       # Folder structure rules
  independent-modules.mjs    # Module dependency rules
  file-composition/
    index.mjs                # Main file composition config
    hook.mjs                 # Hook file rules
    domain/
      domain.api.mjs         # API file rules
      domain.schema.mjs      # Schema file rules
      domain.query-option.mjs # Query options file rules
```

To modify rules, edit the corresponding file. For example, to add a new folder:

```js title="eslint/folder-structure.mjs"
export const folderStructureConfig = {
  structure: {
    children: [
      {
        name: 'src',
        children: [
          { name: 'components' },
          { name: 'hooks' },
          { name: 'navigators' },
          { name: 'screens' },
          { name: 'services' },
          { name: 'theme' },
          { name: 'translations' },
          { name: '__tests__' },
          { name: 'utils' }, // ← Add new folder
        ],
      },
    ],
  },
};
```

## Disabling Rules

If you need to disable a rule for a specific file or line:

```tsx
// Disable for entire file
/* eslint-disable unicorn/no-null */

// Disable for specific line
const value = null; // eslint-disable-line unicorn/no-null

// Disable for next line
// eslint-disable-next-line unicorn/no-null
const value = null;
```

However, try to follow the rules rather than disabling them. The rules are designed to improve code quality and maintainability.

## Benefits

These ESLint rules provide several benefits:

1. **Consistency**: All team members follow the same structure and patterns
2. **Maintainability**: Clear file organization makes code easier to find and modify
3. **Scalability**: Enforced boundaries prevent the codebase from becoming tangled
4. **Onboarding**: New developers can understand the codebase structure quickly
5. **Quality**: Catches common mistakes and anti-patterns early
6. **Automation**: Many improvements are applied automatically

## Troubleshooting

### Cache Issues

If ESLint seems to be using stale data:

```bash
rm -rf node_modules/.cache
npm run lint
```

### Project Structure Cache

The project structure plugin creates a cache file:

```bash
rm project-structure.cache.json
npm run lint
```

### Type Checking Issues

If TypeScript type checking is slow:

```js title="eslint.config.js"
{
  languageOptions: {
    parserOptions: {
      projectService: true, // Uses TypeScript project service
      tsconfigRootDir: import.meta.dirname,
    },
  },
}
```

This uses the TypeScript project service for faster type checking.

## Resources

- [eslint-plugin-project-structure](https://github.com/Igorkowalski94/eslint-plugin-project-structure)
- [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)
- [TypeScript ESLint](https://typescript-eslint.io/)
