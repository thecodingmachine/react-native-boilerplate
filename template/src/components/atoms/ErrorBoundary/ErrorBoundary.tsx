import type { ErrorInfo } from 'react';
import type { ErrorBoundaryPropsWithFallback } from 'react-error-boundary';

import { ErrorBoundary as DefaultErrorBoundary } from 'react-error-boundary';
import { View } from 'react-native';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

type Props = Optional<ErrorBoundaryPropsWithFallback, 'fallback'>;

function ErrorBoundary({ fallback = <View />, onError, ...props }: Props) {
  const onErrorReportCrashlytics = (error: Error, info: ErrorInfo) => {
    // use any crash reporting tool here
    return onError?.(error, info);
  };

  return (
    <DefaultErrorBoundary
      {...props}
      fallback={fallback}
      onError={onErrorReportCrashlytics}
    />
  );
}

export default ErrorBoundary;
