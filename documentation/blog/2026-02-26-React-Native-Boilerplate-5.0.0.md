---
title: React Native Boilerplate 5.0.0
authors: jed
description: Major architecture refactoring and modern tooling
hide_table_of_contents: false
tags: [v5, boilerplate react, react-native, architecture, eslint, services]
---

The version 5.0.0 brings a major architecture refactoring focused on better code organization,
stricter project structure enforcement, and improved developer experience.
This update introduces a services layer, enforces consistent file naming conventions,
and provides powerful ESLint rules to maintain project structure integrity.

<!--truncate-->

## Migration Guide from 4.x to 5.0

### Breaking Changes Overview

This version includes several breaking changes that require manual migration:

1. **File naming convention** changed to kebab-case
2. **Services layer** introduced for business logic
3. **Navigator** renamed and relocated
4. **Test structure** reorganized
5. **Theme hooks** moved to dedicated location
6. **ESLint configuration** significantly enhanced

### Step-by-Step Migration

#### 1. File Naming Convention

All component files now use kebab-case instead of PascalCase:

**Before:**

```
src/components/
  atoms/
    AssetByVariant/
      AssetByVariant.tsx
    IconByVariant/
      IconByVariant.tsx
    Skeleton/
      Skeleton.tsx
```

**After:**

```
src/components/
  atoms/
    asset-by-variant/
      asset-by-variant.tsx
    icon-by-variant/
      icon-by-variant.tsx
    skeleton/
      skeleton.tsx
```

**Migration steps:**

- Rename all component folders to kebab-case
- Rename all component files to kebab-case
- Update all import statements accordingly

The index files still use kebab-case and exports remain unchanged:

```ts
// src/components/atoms/index.ts
export { default as AssetByVariant } from './asset-by-variant/asset-by-variant';
export { default as IconByVariant } from './icon-by-variant/icon-by-variant';
export { default as Skeleton } from './skeleton/skeleton';
```

#### 2. App.tsx → app.tsx

The main App file has been renamed to lowercase:

**Before:**

```tsx
// src/App.tsx
import ApplicationNavigator from '@/navigation/Application';

function App() {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storage={storage}>
          <ApplicationNavigator />
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
```

**After:**

```tsx
// src/app.tsx
import '@/services/i18n/instance';
import { RootNavigator } from '@/navigators';
import { queryClient } from './services/http-client';
import { storage } from './services/storage';

function App() {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storage={storage}>
          <RootNavigator />
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
```

**Migration steps:**

- Rename `src/App.tsx` to `src/app.tsx`
- Update imports to use new services structure
- Update navigator import

#### 3. Services Layer

A new services layer has been introduced to centralize business logic, API calls, and configurations.

##### HTTP Client

**Before:**

```tsx
// src/App.tsx
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false },
  },
});
```

**After:**

```ts
// src/services/http-client.ts
import { QueryClient } from '@tanstack/react-query';
import ky from 'ky';

export const httpClient = ky.extend({
  headers: { Accept: 'application/json' },
  prefixUrl: `${process.env.API_URL ?? ''}/`,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false },
  },
});
```

##### Storage

**Before:**

```tsx
// src/App.tsx
import { createMMKV } from 'react-native-mmkv';
export const storage = createMMKV();
```

**After:**

```ts
// src/services/storage.ts
import { createMMKV } from 'react-native-mmkv';
export const storage = createMMKV();
```

##### Domain Services

The new domain-based service structure organizes API calls, schemas, and query options:

```
src/services/
  domains/
    user/
      user.api.ts         # API calls
      user.schema.ts      # Zod schemas and types
      user.query-options.ts  # TanStack Query options
```

**Example:**

```ts
// src/services/domains/user/user.schema.ts
import * as z from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type User = z.infer<typeof UserSchema>;
```

```ts
// src/services/domains/user/user.api.ts
import { httpClient } from '@/services/http-client';
import { UserSchema } from './user.schema';

export const UserApis = {
  fetchOne: async (id: number) => {
    const response = await httpClient.get(`users/${id}`).json();
    return UserSchema.parse(response);
  },
};
```

```ts
// src/services/domains/user/user.query-options.ts
import { queryOptions } from '@tanstack/react-query';
import { UserApis } from './user.api';
import type { User } from './user.schema';

export const UserQueryKeys = {
  fetchOne: 'fetchOneUser',
};

export const fetchOneQueryOptions = (currentId: User['id']) =>
  queryOptions({
    enabled: currentId >= 0,
    queryFn: () => UserApis.fetchOne(currentId),
    queryKey: [UserQueryKeys.fetchOne, currentId],
  });
```

**Migration steps:**

- Move existing API calls to `services/domains/{domain}/{domain}.api.ts`
- Create schemas in `services/domains/{domain}/{domain}.schema.ts`
- Create query options in `services/domains/{domain}/{domain}.query-options.ts`
- Update imports throughout your codebase

#### 4. I18n Refactoring

Internationalization has been moved to the services layer:

**Before:**

```
src/
  translations/
    index.ts
    en-EN.json
    fr-FR.json
  hooks/
    language/
      useI18n.ts
      schema.ts
```

**After:**

```
src/
  translations/
    en-en.json  # lowercase
    fr-fr.json  # lowercase
  services/
    i18n/
      instance.ts
      i18next.d.ts
```

**Migration steps:**

- Rename translation files to lowercase (en-EN.json → en-en.json)
- Move i18n configuration to `services/i18n/instance.ts`
- Import i18n at the top of `app.tsx`: `import '@/services/i18n/instance';`
- Remove old `translations/index.ts` and `hooks/language/` files

#### 5. Navigator Refactoring

The navigator has been renamed and relocated:

**Before:**

```tsx
// src/navigation/Application.tsx
function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          <Stack.Screen component={Startup} name={Paths.Startup} />
          <Stack.Screen component={Example} name={Paths.Example} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
```

**After:**

```tsx
// src/navigators/root.tsx
function RootNavigator() {
  const { navigationTheme, variant } = useTheme();

  const { isError, isSuccess } = useQuery({
    queryFn: () => Promise.resolve(true),
    queryKey: ['startup'],
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          {isSuccess ? (
            <Stack.Screen component={Example} name={Paths.Example} />
          ) : (
            <Stack.Screen
              component={Startup}
              initialParams={{ isError }}
              name={Paths.Startup}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
```

**Migration steps:**

- Move `src/navigation/Application.tsx` to `src/navigators/root.tsx`
- Rename `ApplicationNavigator` to `RootNavigator`
- Move navigation types to `src/services/navigation/types.ts`
- Move paths to `src/services/navigation/paths.ts`
- Update imports in your application

#### 6. Hooks Reorganization

**Before:**

```
src/
  theme/
    hooks/
      useTheme.ts
  hooks/
    domain/
      user/
        useUser.ts
        userService.ts
        schema.ts
    language/
      useI18n.ts
      schema.ts
```

**After:**

```
src/
  hooks/
    use-theme/
      use-theme.ts
  services/
    domains/
      user/
        user.api.ts
        user.query-options.ts
        user.schema.ts
```

**Migration steps:**

- Move `useTheme` to `hooks/use-theme/use-theme.ts`
- Move domain hooks to services layer
- Update import paths: `import { useTheme } from '@/hooks';`
- Convert domain hooks to use new query-options pattern

#### 7. Theme Provider

The ThemeProvider has been moved to components/providers:

**Before:**

```tsx
import { ThemeProvider } from '@/theme';
```

**After:**

```tsx
import { ThemeProvider } from '@/components/providers';
```

#### 8. Test Structure

Tests have been reorganized with a cleaner structure:

**Before:**

```
src/
  __mocks__/
    libs/
      react-native-reanimated.ts
  tests/
    TestAppWrapper.tsx
  components/
    atoms/
      Skeleton/
        Skeleton.test.tsx
```

**After:**

```
src/
  __tests__/
    setup.ts
    test-wrappers.tsx
    mocks/
      get-assets-context.ts
      libs/
        index.ts
        react-native-reanimated.ts
        react-native-safe-area-context.ts
        react-native-mmkv.ts
  components/
    atoms/
      skeleton/
        skeleton.test.tsx
```

**Migration steps:**

- Move `tests/TestAppWrapper.tsx` to `__tests__/test-wrappers.tsx`
- Create `__tests__/setup.ts` for test configuration
- Organize mocks in `__tests__/mocks/`
- Update jest.config.js:

```js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts'],
  // ... rest of config
};
```

- Update test imports:

```tsx
// Before
import TestAppWrapper from '@/tests/TestAppWrapper';

// After
import TestAppWrapper from '@/__tests__/test-wrappers';
```

#### 9. Screen Files

Screens follow the same kebab-case convention:

**Before:**

```
src/screens/
  Example/
    Example.tsx
    Example.test.tsx
  Startup/
    Startup.tsx
```

**After:**

```
src/screens/
  example/
    example.tsx
    example.test.tsx
  startup/
    startup.tsx
```

#### 10. Theme Assets

Asset helper functions have been renamed:

**Before:**

```tsx
import getAssetsContext from '@/theme/assets/getAssetsContext';
```

**After:**

```tsx
import getAssetsContext from '@/theme/assets/get-assets-context';
```

### Enhanced ESLint Configuration

Version 5.0 introduces a powerful ESLint configuration that enforces project structure:

#### New ESLint Plugins

- **eslint-plugin-project-structure**: Enforces folder and file composition rules
- **eslint-plugin-perfectionist**: Ensures consistent sorting (imports, types, etc.)
- **eslint-plugin-unicorn**: Best practices and code quality
- **eslint-plugin-react-you-might-not-need-an-effect**: Prevents unnecessary effects

#### Configuration Structure

**Before:**

```js
// eslint.config.mjs
export default tseslint.config(/*...*/);
```

**After:**

```js
// eslint.config.js
import { fileCompositionConfig } from './eslint/file-composition/index.mjs';
import { folderStructureConfig } from './eslint/folder-structure.mjs';
import { independentModulesConfig } from './eslint/independent-modules.mjs';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { 'project-structure': projectStructurePlugin },
    rules: {
      'project-structure/file-composition': [ERROR, fileCompositionConfig],
      'project-structure/folder-structure': [ERROR, folderStructureConfig],
      'project-structure/independent-modules': [
        ERROR,
        independentModulesConfig,
      ],
    },
  },
  // ... other configs
]);
```

#### Project Structure Rules

The new ESLint configuration enforces:

1. **Folder Structure**: Ensures correct file locations
2. **File Composition**: Enforces file content patterns (hooks, components, etc.)
3. **Independent Modules**: Prevents circular dependencies and enforces module boundaries

**Example folder structure rules:**

```js
// eslint/folder-structure.mjs
export const folderStructureConfig = {
  structure: {
    children: [
      {
        name: 'src',
        children: [
          {
            name: 'components',
            children: [
              /* atoms, molecules, organisms, templates */
            ],
          },
          { name: 'hooks' },
          { name: 'navigators' },
          { name: 'screens' },
          {
            name: 'services',
            children: [
              /* domains, i18n, navigation, storage */
            ],
          },
          { name: 'theme' },
          { name: 'translations' },
        ],
      },
    ],
  },
};
```

**File composition example:**

```js
// eslint/file-composition/hook.mjs
export const hookConfig = {
  name: 'Hook',
  rules: {
    filePattern: '**/hooks/**/*.{ts,tsx}',
    allowOnlySpecifiedSelectors: true,
    selectors: ['function', 'exportNamedDeclaration'],
  },
};
```

This ensures that hook files only contain function declarations and exports, preventing accidental complexity.

### TypeScript Configuration Updates

Minor improvements to tsconfig.json:

```json
{
  "compilerOptions": {
    "types": ["jest", "@testing-library/jest-native"]
  }
}
```

### What Stays the Same

- React Query for data fetching
- MMKV for storage
- Theme configuration approach
- Component architecture (atoms, molecules, organisms, templates)
- Testing with Jest and React Native Testing Library

## New Features

### Startup Logic with TanStack Query

The RootNavigator now includes startup logic using TanStack Query:

```tsx
const { isError, isSuccess } = useQuery({
  queryFn: () => Promise.resolve(true),
  queryKey: ['startup'],
});
```

This makes it easier to handle initialization logic and conditional rendering based on app state.

### Domain-Driven Architecture

The new services layer encourages domain-driven design:

```
services/
  domains/
    user/          # User domain
    product/       # Product domain
    auth/          # Auth domain
```

Each domain contains:

- **schema**: Type definitions and validation
- **api**: API calls
- **query-options**: TanStack Query configuration

This makes the codebase more maintainable and testable.

## Migration Checklist

Use this checklist to ensure a complete migration:

- [ ] Rename all component files and folders to kebab-case
- [ ] Rename App.tsx to app.tsx
- [ ] Create services layer structure
- [ ] Move queryClient to services/http-client.ts
- [ ] Move storage to services/storage.ts
- [ ] Move i18n to services/i18n/
- [ ] Rename translation files to lowercase
- [ ] Move navigator to navigators/root.tsx
- [ ] Rename ApplicationNavigator to RootNavigator
- [ ] Move navigation types to services/navigation/types.ts
- [ ] Move navigation paths to services/navigation/paths.ts
- [ ] Move useTheme to hooks/use-theme/use-theme.ts
- [ ] Update ThemeProvider import
- [ ] Reorganize tests to **tests** structure
- [ ] Update jest.config.js setupFilesAfterEnv
- [ ] Migrate domain hooks to services structure
- [ ] Update all import paths throughout the codebase
- [ ] Update eslint.config.js (or use the new configuration)
- [ ] Run ESLint and fix any issues: `npm run lint`
- [ ] Run tests: `npm test`
- [ ] Rename all screen files to kebab-case
- [ ] Update getAssetsContext imports

## Conclusion

Version 5.0 brings significant architectural improvements that will make your codebase more maintainable,
testable, and scalable. While the migration requires some effort, the benefits of better structure,
stricter linting, and clearer separation of concerns will pay dividends in the long run.

The new services layer, domain-driven architecture, and powerful ESLint rules ensure that your project
stays organized as it grows.

Happy coding! 🚀
