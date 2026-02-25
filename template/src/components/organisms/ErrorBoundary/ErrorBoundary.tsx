import type { ErrorInfo } from 'react';
import type { ErrorBoundaryPropsWithFallback } from 'react-error-boundary';

import { ErrorBoundary as DefaultErrorBoundary } from 'react-error-boundary';

import { DefaultError } from '@/components/molecules';

type Optional<T, K extends keyof T> = Omit<T, K> & Pick<Partial<T>, K>;

type Properties = {
  readonly onReset?: () => void;
} & Optional<ErrorBoundaryPropsWithFallback, 'fallback'>;

function ErrorBoundary({
  fallback,
  onError,
  onReset = undefined,
  ...props
}: Properties) {
  const onErrorReport = (error: unknown, info: ErrorInfo) => {
    // use any crash reporting tool here
    return onError?.(error, info);
  };

  return (
    <DefaultErrorBoundary
      {...props}
      fallback={fallback ?? <DefaultError onReset={onReset} />}
      onError={onErrorReport}
    />
  );
}

export default ErrorBoundary;
