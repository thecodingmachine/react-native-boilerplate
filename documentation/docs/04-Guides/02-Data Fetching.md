---
slug: /data-fetching
sidebar_label: Data Fetching
title: Data Fetching
id: data-fetching
keywords: [data fetching, react query, tanstack query, react-query, tanstack-query]
---

Indeed, in the realm of React Native and React development, there are several valuable libraries that can significantly
simplify data management tasks. One such library is TanStack Query, which has gained popularity for its ability to streamline
data fetching, caching, error handling, and more. It's an excellent choice for integrating into this boilerplate, as it can
greatly enhance the efficiency and reliability of data management in your application.

## Fetching Data at Startup

This boilerplate offers a convenient method for fetching data before presenting the application content to the user.
This capability is made possible through the [navigation structure](/docs/navigate#navigation-structure) where the
`RootNavigator` conditionally renders screens based on startup state.

The `RootNavigator` uses TanStack Query to handle initialization logic:

```tsx title="src/navigators/root.tsx"
import { useQuery } from '@tanstack/react-query';

function RootNavigator() {
  const { navigationTheme, variant } = useTheme();

  // highlight-start
  const { isError, isSuccess } = useQuery({
    queryFn: () => {
      // Fetch startup data here
      return Promise.resolve(true);
    },
    queryKey: ['startup'],
  });
  // highlight-end

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          {/* highlight-start */}
          {isSuccess ? (
            <Stack.Screen component={Example} name={Paths.Example} />
          ) : (
            <Stack.Screen
              component={Startup}
              initialParams={{ isError }}
              name={Paths.Startup}
            />
          )}
          {/* highlight-end */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
```

This approach ensures a cleaner separation of concerns: the navigator handles navigation logic while screens focus on UI and user interaction.

## Domain-Based Data Fetching

The boilerplate uses a domain-based architecture for organizing data fetching logic. Each domain contains:

### 1. Schema Definition

Define your data types and validation using Zod:

```ts title="src/services/domains/user/user.schema.ts"
import * as z from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;
```

### 2. API Calls

Create API functions using the HTTP client:

```ts title="src/services/domains/user/user.api.ts"
import { httpClient } from '@/services/http-client';
import { UserSchema } from './user.schema';

export const UserApis = {
  fetchOne: async (id: number) => {
    const response = await httpClient.get(`users/${id}`).json();
    return UserSchema.parse(response);
  },

  fetchAll: async () => {
    const response = await httpClient.get('users').json();
    return z.array(UserSchema).parse(response);
  },
};
```

The `httpClient` is a pre-configured [Ky](https://github.com/sindresorhus/ky) instance located in `src/services/http-client.ts`.

### 3. Query Options

Define TanStack Query configuration:

```ts title="src/services/domains/user/user.query-options.ts"
import { queryOptions } from '@tanstack/react-query';
import { UserApis } from './user.api';
import type { User } from './user.schema';

export const UserQueryKeys = {
  fetchOne: 'fetchOneUser',
  fetchAll: 'fetchAllUsers',
};

export const fetchOneUserQueryOptions = (userId: User['id']) =>
  queryOptions({
    enabled: userId >= 0,
    queryFn: () => UserApis.fetchOne(userId),
    queryKey: [UserQueryKeys.fetchOne, userId],
  });

export const fetchAllUsersQueryOptions = () =>
  queryOptions({
    queryFn: () => UserApis.fetchAll(),
    queryKey: [UserQueryKeys.fetchAll],
  });
```

### 4. Using in Components

Import and use the query options in your components:

```tsx title="src/screens/example/example.tsx"
import { useQuery } from '@tanstack/react-query';
import { fetchOneUserQueryOptions } from '@/services/domains/user/user.query-options';

function ExampleScreen() {
  const userId = 1;

  const { data: user, isLoading, isError } = useQuery(
    fetchOneUserQueryOptions(userId)
  );

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error loading user</Text>;

  return <Text>{user.name}</Text>;
}
```

## Benefits of This Architecture

- **Type Safety**: Zod schemas provide runtime validation and compile-time types
- **Centralized Logic**: All domain logic is in one place
- **Reusability**: Query options can be reused across components
- **Testability**: Each layer can be tested independently
- **Consistency**: Enforced by ESLint rules for project structure

## Advanced usage

Since we've utilized no additional or custom configuration, for further information,
you should refer to the official documentation of the [library](https://react-query.tanstack.com/).
