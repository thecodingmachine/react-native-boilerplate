---
slug: /components/safe-screen
sidebar_label: SafeScreen
title: SafeScreen
id: safe-screen
keywords: [SafeScreen, StatusBar, SafeAreaView, ErrorBoundary, DefaultError]
---

The template `SafeScreen` component is a helper component that allows you to display a screen with a safe area view, a status bar, and a fallback UI when an error occurs in the application. This component is particularly useful when you need to display a screen with all necessary tools to handle errors in your app.

### Usage

```jsx
import { useI18n, useUser } from '@/hooks';

import { SafeScreen } from '@/components/templates';

function Example() {
  const { useFetchOneQuery } = useUser();

  const fetchOneUserQuery = useFetchOneQuery(1);

  return (
    <SafeScreen
      isError={fetchOneUserQuery.isError} // boolean value to determine whether an error occurred or not if true the fallback UI will be displayed
      onResetError={fetchOneUserQuery.refetch} // function to reset the error state and re-execute the query
    >
      // your content here
    </SafeScreen>
  );
}
```

So if an error occurs in the `fetchOneUserQuery`, the `SafeScreen` component will display the [`DefaultError` component](/docs/components/default-error) with a button to reset the error. It also display the same error for any other error in the screen thanks to the [error boundary system](/docs/components/error-boundary).

### Props

| Name         | Type     | Default | Description                                                                                   |
|--------------|----------|---------|-----------------------------------------------------------------------------------------------|
| isError      | boolean  |         | boolean value to determine whether an error occurred or not.                    |
| onResetError | function |         | function called on default error button press                                               |
| ...props     | Omit\<SafeAreaViewProps, 'mode'\> |         | all props from `View` component are supported.                                               |