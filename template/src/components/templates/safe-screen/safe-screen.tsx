import type { PropsWithChildren } from 'react';

import { StatusBar } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

import { useTheme } from '@/hooks';

import { DefaultError } from '@/components/molecules';
import { ErrorBoundary } from '@/components/organisms';

type Properties = PropsWithChildren<
  {
    readonly isError?: boolean;
    readonly onResetError?: () => void;
  } & Omit<SafeAreaViewProps, 'mode'>
>;

function SafeScreen({
  children = undefined,
  isError = false,
  onResetError,
  style,
  ...props
}: Properties) {
  const { layout, navigationTheme, variant } = useTheme();

  return (
    <SafeAreaView {...props} mode="padding" style={[layout.flex_1, style]}>
      <StatusBar
        backgroundColor={navigationTheme.colors.background}
        barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ErrorBoundary onReset={onResetError}>
        {isError ? <DefaultError onReset={onResetError} /> : children}
      </ErrorBoundary>
    </SafeAreaView>
  );
}

export default SafeScreen;
