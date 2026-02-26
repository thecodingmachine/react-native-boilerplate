---
slug: /faq
sidebar_label: FAQ
title: Frequently Asked Questions
id: faq
keywords: [faq, questions, javascript, typescript, help, common issues]
---

## General Questions

### Is there a Modern JavaScript version available?

**Yes!** The boilerplate supports both TypeScript and Modern JavaScript (ESNext/ES2022).

During project initialization, you'll be prompted:

```bash
📘 Using typescript ? (Y/n)
```

- **Press Y or Enter** → TypeScript version (recommended)
- **Press N** → Modern JavaScript version (ESNext/ES2022)

Both options provide:
- ✅ Same architecture and project structure
- ✅ Same features (navigation, theming, i18n, data fetching)
- ✅ Same components and patterns
- ✅ Same ESLint rules (adapted for JavaScript)

The only difference is the language syntax. The JavaScript version is automatically compiled from the TypeScript source during installation.

[Learn more about the installation process →](/docs/installation#using-the-boilerplate)

### Can I switch from JavaScript to TypeScript later?

Switching from JavaScript to TypeScript after project initialization requires manual effort:
1. Reinstall TypeScript as a dev dependency
2. Re-add type definitions (`.d.ts` files)
3. Rename files from `.js` to `.ts`/`.tsx`
4. Add type annotations

**Recommendation**: If you're unsure, start with TypeScript. It's easier to write loose TypeScript (without strict types) than to migrate from JavaScript to TypeScript later.

### Can I switch from TypeScript to JavaScript later?

Yes, but it's not automated after initialization. You would need to:
1. Manually remove type annotations
2. Rename files from `.ts`/`.tsx` to `.js`/`.jsx`
3. Remove type definition files
4. Update your build configuration

**Recommendation**: Make this choice during project initialization as it's much simpler.

## Installation & Troubleshooting

### Installation fails on Windows

**Recommendation**: Use Git Bash or WSL (Windows Subsystem for Linux) for the best experience.

The boilerplate uses POSIX shell commands (`cp`, `rm`, etc.) which are not available in Windows Command Prompt or PowerShell.

**Options**:
1. **Git Bash** (recommended for Windows): Comes with Git for Windows
2. **WSL**: Full Linux environment on Windows
3. **PowerShell with Unix commands**: Install [Git for Windows](https://gitforwindows.org/) which includes basic Unix utilities


## ESLint & Code Quality

### Are ESLint rules the same for JavaScript and TypeScript?

The ESLint configuration automatically adapts:

**For TypeScript files** (`.ts`, `.tsx`):
- ✅ Full TypeScript type-checking rules
- ✅ Strict type rules
- ✅ All project structure rules

**For JavaScript files** (`.js`, `.jsx`):
- ✅ All project structure rules (folder structure, file composition, independent modules)
- ✅ React best practices
- ✅ Import sorting (perfectionist)
- ✅ Unicorn JS/TS best practices
- ❌ TypeScript type-checking rules (automatically disabled)

This means you get the same architectural enforcement and code quality rules regardless of your language choice.

[Learn more about ESLint configuration →](/docs/eslint-project-structure#javascript-support)

### Can I disable the strict project structure rules?

Yes! The project structure enforcement rules are optional. You can disable them by commenting out the configuration in `eslint.config.mjs`:

```js
// Comment out this section to disable project structure enforcement
// {
//   files: ['**/*.{js,jsx,ts,tsx}'],
//   languageOptions: { parser: projectStructureParser },
//   plugins: { 'project-structure': projectStructurePlugin },
//   rules: {
//     'project-structure/file-composition': [ERROR, fileCompositionConfig],
//     'project-structure/folder-structure': [ERROR, folderStructureConfig],
//     'project-structure/independent-modules': [ERROR, independentModulesConfig],
//   },
// },
```

You can also disable individual rules if you find only some of them too restrictive.

[Learn more →](/docs/eslint-project-structure)

## Architecture & Structure

### Why kebab-case for file names?

Version 5.0 adopted kebab-case (lowercase with hyphens) for consistency:

```
✅ asset-by-variant.tsx
✅ use-theme.ts
✅ user.api.ts

❌ AssetByVariant.tsx
❌ useTheme.ts
❌ UserAPI.ts
```

Benefits:
- **Consistency**: Single naming convention across the entire codebase
- **Case-insensitive file systems**: Prevents issues on Windows/macOS
- **URL-friendly**: Matches web conventions
- **Enforced by ESLint**: Automatically caught during development

### What's the difference between atoms, molecules, organisms, and templates?

The boilerplate follows [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology:

- **Atoms** (`src/components/atoms/`): Basic building blocks (Button, Input, Icon)
- **Molecules** (`src/components/molecules/`): Simple groups of atoms (SearchBar, Card)
- **Organisms** (`src/components/organisms/`): Complex components with business logic (Header, ProductList)
- **Templates** (`src/components/templates/`): Page-level components (SafeScreen, Layout)

**Enforced by ESLint**: Components can only import from lower levels (organisms can't import templates).

[Learn more about component architecture →](/docs/project-structure)

### Why services instead of hooks for data fetching?

Version 5.0 introduced a services layer to separate concerns:

**Before (v4)**: Hooks contained both data fetching and business logic
```tsx
// ❌ Mixed concerns
const useUser = () => {
  const fetchUser = async (id) => {
    const response = await fetch(`/users/${id}`);
    return response.json();
  };
  return useQuery(['user', id], () => fetchUser(id));
};
```

**Now (v5)**: Services handle data/business logic, hooks use services
```tsx
// ✅ Separated concerns
// In services/domains/user/user.api.ts
export const UserApis = {
  fetchOne: async (id) => {
    const response = await httpClient.get(`users/${id}`).json();
    return UserSchema.parse(response);
  },
};

// In component or custom hook
const { data } = useQuery(fetchOneUserQueryOptions(userId));
```

Benefits:
- **Testability**: Services can be tested without React
- **Reusability**: Services can be used outside of React components
- **Type Safety**: Zod schemas provide runtime validation
- **Separation of Concerns**: Clear distinction between data and UI

[Learn more about the services layer →](/docs/data-fetching#domain-based-data-fetching)

## Navigation

### How do I add a new screen?

1. Create your screen in `src/screens/`:
```tsx
// src/screens/my-screen/my-screen.tsx
export default function MyScreen() {
  return <View><Text>My Screen</Text></View>;
}
```

2. Export from barrel file:
```tsx
// src/screens/index.ts
export { default as MyScreen } from './my-screen/my-screen';
```

3. Add route to navigator:
```tsx
// src/navigators/root.tsx
import { MyScreen } from '@/screens';

<Stack.Screen component={MyScreen} name={Paths.MyScreen} />
```

4. Add path constant:
```tsx
// src/services/navigation/paths.ts
export const Paths = {
  // ...
  MyScreen: 'MyScreen',
};
```

[Learn more about navigation structure →](/docs/navigate)

## Theming

### Can I add custom theme variants?

Yes! Add variants in `src/theme/_config.ts`:

```ts
export const config = {
  colors: {
    primary: '#007AFF',
    // ...
  },
  variants: {
    dark: {
      colors: {
        primary: '#0A84FF',
      },
    },
    // Add your custom variant
    highContrast: {
      colors: {
        primary: '#000000',
      },
    },
  },
};
```

Switch themes with:
```tsx
const { changeTheme } = useTheme();
changeTheme('highContrast');
```

[Learn more about theming →](/docs/theming/configuration)

## Testing

### Where should I place my test files?

Test files should be colocated with the code they test:

```
src/components/atoms/skeleton/
  skeleton.tsx
  skeleton.test.tsx  ← Test file here
```

Global test configuration and mocks go in `src/__tests__/`.

[Learn more about testing →](/docs/testing)

### How do I mock external libraries?

Add mocks in `src/__tests__/mocks/libs/`:

```tsx
// src/__tests__/mocks/libs/my-library.ts
jest.mock('my-library', () => ({
  myFunction: jest.fn(),
}));
```

Import in setup:
```tsx
// src/__tests__/setup.ts
import './mocks/libs/my-library';
```

[Learn more about testing →](/docs/testing)

## Contributing

### How can I contribute to the boilerplate?

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

[View contributing guidelines →](https://github.com/thecodingmachine/react-native-boilerplate/blob/main/CONTRIBUTING.md)

### I found a bug, where should I report it?

Please [open an issue](https://github.com/thecodingmachine/react-native-boilerplate/issues) on GitHub with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, RN version)

## Still have questions?

- 📚 [Read the full documentation](/)
- 🐛 [Report issues](https://github.com/thecodingmachine/react-native-boilerplate/issues)
