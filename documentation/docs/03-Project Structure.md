---
slug: /project-structure
sidebar_label: Project Structure
title: Project Structure
id: project-structure
keywords: [project structure, structure, architecture]
---

The overarching objective of this boilerplate's architecture is to ensure a clear separation of concerns and to harness
the full potential of React Native.
To achieve this, the project structure is thoughtfully organized into distinct sections, each serving a specific purpose.

## Specific Top-Level Boilerplate Folders

| Folders            | Description                                                                                                       |
|--------------------|-------------------------------------------------------------------------------------------------------------------|
| `src/components`   | Home to application components, following the atomic design methodology for organizing presentational components. |
| `src/hooks`        | Custom hooks used throughout the application.                                                                     |
| `src/navigators`   | Navigator components responsible for handling navigation.                                                         |
| `src/screens`      | Screen components representing various app screens.                                                               |
| `src/services`     | Houses data fetching, HTTP client, i18n, navigation types, and business logic organized by domain.                |
| `src/theme`        | Holds theme configuration for the application.                                                                    |
| `src/translations` | Translation files for language support (e.g., `en-en.json`, `fr-fr.json`).                                       |
| `src/__tests__`    | Test configuration, mocks, and test utilities.                                                                    |

## Specific Top-Level Boilerplate Files

| Files              | Description                                         |
|--------------------|-----------------------------------------------------|
| `.env`             | Environment variables configuration.                |
| `jest.config.js`   | Configuration file for Jest testing.                |
| `tsconfig.json`    | TypeScript configuration (for TypeScript projects). |
| `src/app.tsx`      | Main component of the application.                  |
| `eslint.config.js` | ESLint configuration with project structure rules.  |

## Atomic Design

The `components` folder follows the [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) methodology.
This approach emphasizes modularity and reusability by breaking down elements into atomic components.
By doing so, development teams can create more consistent, scalable, and maintainable projects.

## Services Layer

The `services` folder is organized to separate business logic, data fetching, and application configuration:

### Domain-Based Organization

```
src/services/
  domains/
    user/
      user.api.ts           # API calls
      user.schema.ts        # Zod schemas and types
      user.query-options.ts # TanStack Query options
    product/
      product.api.ts
      product.schema.ts
      product.query-options.ts
```

Each domain contains:
- **`*.api.ts`**: API calls using the HTTP client
- **`*.schema.ts`**: Zod schemas for validation and TypeScript types
- **`*.query-options.ts`**: TanStack Query configuration (query keys, options)

### Core Services

| File                      | Description                                                      |
|---------------------------|------------------------------------------------------------------|
| `http-client.ts`          | Ky HTTP client instance and TanStack Query client configuration. |
| `storage.ts`              | MMKV storage instance for persistent data.                       |
| `i18n/instance.ts`        | i18next configuration and language management.                   |
| `i18n/i18next.d.ts`       | TypeScript type definitions for translations.                    |
| `navigation/types.ts`     | Navigation types and parameter lists.                            |
| `navigation/paths.ts`     | Navigation path constants.                                       |

This structure promotes:
- **Separation of concerns**: Each file has a single responsibility
- **Type safety**: Schemas provide runtime validation and compile-time types
- **Testability**: Easy to mock and test individual services
- **Scalability**: New domains can be added without affecting existing code

## File Naming Convention

All files and folders use **kebab-case** naming convention:

```
✅ Correct:
  - asset-by-variant.tsx
  - use-theme.ts
  - user.api.ts

❌ Incorrect:
  - AssetByVariant.tsx
  - useTheme.ts
  - UserAPI.ts
```

This ensures consistency across the codebase and is enforced by ESLint rules.
