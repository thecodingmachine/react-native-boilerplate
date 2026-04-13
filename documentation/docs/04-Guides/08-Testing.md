---
slug: /testing
sidebar_label: Testing
title: Testing
id: testing
keywords: [testing, jest, react-native-testing-library, unit tests, mocks]
---

The boilerplate comes with a pre-configured testing setup using [Jest](https://jestjs.io/) and
[React Native Testing Library](https://callstack.github.io/react-native-testing-library/).
This ensures you can start writing tests immediately with best practices already in place.

## Test Structure

All test-related configuration and utilities are organized in the `src/__tests__` folder:

```
src/__tests__/
  setup.ts                    # Jest setup and configuration
  test-wrappers.tsx          # Test wrapper components
  mocks/
    get-assets-context.ts    # Mock for asset context
    libs/
      index.ts               # Import all library mocks
      react-native-mmkv.ts   # MMKV mocks
      react-native-reanimated.ts  # Reanimated mocks
      react-native-safe-area-context.ts  # Safe area mocks
```

### Setup File

The `setup.ts` file is automatically loaded by Jest and imports all necessary mocks:

```ts title="src/__tests__/setup.ts"
import './mocks/libs';
import './mocks/get-assets-context';
```

Make sure your `jest.config.js` references this file:

```js title="jest.config.js"
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts'],
  // ... rest of config
};
```

### Test Wrappers

The `test-wrappers.tsx` file provides wrapper components that include all necessary providers for testing:

```tsx title="src/__tests__/test-wrappers.tsx"
import '@/services/i18n/instance';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from '@/components/providers';
import { queryClient } from '@/services/http-client';
import { storage } from '@/services/storage';

export default function TestAppWrapper({ children }: PropsWithChildren) {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storage={storage}>
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
```

## Writing Tests

### Component Tests

Component test files should be placed alongside their components using the kebab-case naming convention:

```
src/components/atoms/skeleton/
  skeleton.tsx
  skeleton.test.tsx  # Test file
```

Example component test:

```tsx title="src/components/atoms/skeleton/skeleton.test.tsx"
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import TestAppWrapper from '@/__tests__/test-wrappers';
import SkeletonLoader from './skeleton';

describe('SkeletonLoader', () => {
  it('renders children when not loading', () => {
    render(
      <SkeletonLoader loading={false}>
        <Text>{'Loaded Content'}</Text>
      </SkeletonLoader>,
      {
        wrapper: TestAppWrapper,
      },
    );

    expect(screen.getByText('Loaded Content')).toBeTruthy();
  });

  it('renders skeleton when loading', () => {
    const { getByTestId } = render(
      <SkeletonLoader loading={true} testID="skeleton">
        <Text>{'Content'}</Text>
      </SkeletonLoader>,
      {
        wrapper: TestAppWrapper,
      },
    );

    expect(getByTestId('skeleton')).toBeTruthy();
  });
});
```

### Screen Tests

Screen tests follow the same pattern:

```tsx title="src/screens/example/example.test.tsx"
import { render, screen } from '@testing-library/react-native';
import TestAppWrapper from '@/__tests__/test-wrappers';
import Example from './example';

describe('Example Screen', () => {
  it('renders correctly', () => {
    render(<Example />, { wrapper: TestAppWrapper });
    expect(screen.getByText('Example')).toBeTruthy();
  });
});
```

### Service Tests

Service tests don't require the TestAppWrapper as they test pure logic:

```ts title="src/services/domains/user/user.api.test.ts"
import { UserApis } from './user.api';
import { httpClient } from '@/services/http-client';

jest.mock('@/services/http-client', () => ({
  httpClient: {
    get: jest.fn(),
  },
}));

describe('UserApis', () => {
  it('fetches a user by id', async () => {
    const mockUser = { id: 1, name: 'John Doe' };

    (httpClient.get as jest.Mock).mockReturnValue({
      json: jest.fn().mockResolvedValue(mockUser),
    });

    const result = await UserApis.fetchOne(1);

    expect(httpClient.get).toHaveBeenCalledWith('users/1');
    expect(result).toEqual(mockUser);
  });
});
```

## Library Mocks

### Reanimated

The boilerplate includes pre-configured mocks for React Native Reanimated:

```ts title="src/__tests__/mocks/libs/react-native-reanimated.ts"
require('react-native-reanimated').setUpTests();

jest.mock('react-native-worklets', () =>
  require('react-native-worklets/src/mock'),
);
```

### MMKV

MMKV is mocked to work in the Jest environment:

```ts title="src/__tests__/mocks/libs/react-native-mmkv.ts"
jest.mock('react-native-nitro-modules', () => {
  return {
    NitroModules: () => {
      return {};
    },
  };
});
```

### Safe Area Context

Safe Area Context is mocked using its official mock:

```ts title="src/__tests__/mocks/libs/react-native-safe-area-context.ts"
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

Run tests with coverage:

```bash
npm test -- --coverage
```

Run a specific test file:

```bash
npm test -- skeleton.test.tsx
```

## Best Practices

1. **Use TestAppWrapper**: Always wrap your components with `TestAppWrapper` when testing components that use hooks like `useTheme`, `useTranslation`, or `useQuery`.

2. **Collocate tests**: Keep test files next to the code they test using the `.test.tsx` or `.test.ts` extension.

3. **Test user behavior**: Focus on testing what users see and do, not implementation details.

4. **Mock external dependencies**: Mock API calls, navigation, and other external dependencies to keep tests fast and reliable.

5. **Use Testing Library queries**: Prefer queries like `getByText`, `getByRole`, and `getByTestId` for better test maintainability.

6. **Avoid snapshot testing**: While snapshots can be useful, they often create brittle tests. Prefer explicit assertions.

## Advanced Testing

### Testing with TanStack Query

When testing components that use TanStack Query, you can use the TestAppWrapper which includes the QueryClientProvider:

```tsx
import { render, waitFor } from '@testing-library/react-native';
import TestAppWrapper from '@/__tests__/test-wrappers';
import { UserApis } from '@/services/domains/user/user.api';

jest.mock('@/services/domains/user/user.api');

it('displays user data', async () => {
  (UserApis.fetchOne as jest.Mock).mockResolvedValue({
    id: 1,
    name: 'John Doe',
  });

  render(<UserProfile userId={1} />, { wrapper: TestAppWrapper });

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeTruthy();
  });
});
```

### Testing Navigation

For testing navigation, you can mock the navigation props:

```tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

it('navigates to details screen', () => {
  const mockNavigate = jest.fn();

  render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} navigation={{ ...props.navigation, navigate: mockNavigate }} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

  fireEvent.press(screen.getByText('View Details'));
  expect(mockNavigate).toHaveBeenCalledWith('Details');
});
```

### Testing Async Operations

Use `waitFor` for async operations:

```tsx
import { render, waitFor, screen } from '@testing-library/react-native';

it('loads and displays data', async () => {
  render(<DataComponent />, { wrapper: TestAppWrapper });

  // Wait for loading to complete
  await waitFor(() => {
    expect(screen.queryByText('Loading...')).toBeNull();
  });

  // Assert data is displayed
  expect(screen.getByText('Data loaded')).toBeTruthy();
});
```

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Testing Library Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Testing TanStack Query](https://tanstack.com/query/latest/docs/framework/react/guides/testing)
