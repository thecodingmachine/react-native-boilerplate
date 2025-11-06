---
slug: /components/error-boundary
sidebar_label: ErrorBoundary
title: ErrorBoundary
id: error-boundary
keywords: [ErrorBoundary, Error, boundary]
---

The organism `ErrorBoundary` component is a helper component that allows you to catch JavaScript errors anywhere in the component tree and log those errors. This component is particularly useful when you need to catch errors in your app and display a fallback UI to the user.

### Usage

```jsx
import { ErrorBoundary } from "@/components/atoms";

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <ExampleApplication />
</ErrorBoundary>
```

### Log errors
In the `ErrorBoundary` component, you will find a `onErrorReport` function that allows you to log the error in your application. You can use any logging library to log the error like `sentry`, `logrocket`, `crashlytics`, etc.

```jsx
const onErrorReport = (error: Error, info: ErrorInfo) => {
  // use any crash reporting tool here
  return onError?.(error, info);
};
```

### Props

As the `ErrorBoundary` component is a wrapper component, it accepts all the props from the [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) library with fallback props except that the `fallback` prop is empty by default.

| Name       | Type   | Default | Description                                                                                   |
|------------|--------|---------|-----------------------------------------------------------------------------------------------|
| fallback   | ReactNode |         | The required fallback UI to be displayed when an error occurs.                                |
| onReset    | function |         | The optional function to reset the error state                     |
| ...props   | any    |         | all props from `ErrorBoundary` component are supported.                                      |


:::info
This component is used in the `SafeScreen` component to catch JavaScript errors and display a fallback UI to the user.