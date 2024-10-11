import type { ErrorInfo } from 'react';
import type { ErrorBoundaryPropsWithFallback } from 'react-error-boundary';

import { ErrorBoundary as DefaultErrorBoundary } from 'react-error-boundary';

import { DefaultError } from '@/components/molecules';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

type Props = Optional<ErrorBoundaryPropsWithFallback, 'fallback'> & {
  onReset?: () => void;
};

function ErrorBoundary({
  fallback = undefined,
  onReset = undefined,
  onError,
  ...props
}: Props) {
  const onErrorReport = (error: Error, info: ErrorInfo) => {
    // use any crash reporting tool here
    return onError?.(error, info);
  };

  return (
    <DefaultErrorBoundary
      {...props}
      fallback={fallback || <DefaultError onReset={onReset} />}
      onError={onErrorReport}
    />
  );
}

export default ErrorBoundary;
