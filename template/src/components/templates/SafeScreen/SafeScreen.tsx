import type { PropsWithChildren } from 'react';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

import { ErrorBoundary } from '@/components/atoms';
import { DefaultError } from '@/components/molecules';

type Props = PropsWithChildren<
  Omit<SafeAreaViewProps, 'mode'> & {
    isError?: boolean;
    onResetError?: () => void;
  }
>;

function SafeScreen({
  children,
  isError,
  onResetError,
  style,
  ...props
}: Props) {
  const { layout, variant, navigationTheme } = useTheme();

  return (
    <SafeAreaView {...props} mode="padding" style={[layout.flex_1, style]}>
      <StatusBar
        backgroundColor={navigationTheme.colors.background}
        barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
        translucent
      />
      <ErrorBoundary fallback={<DefaultError onReset={onResetError} />}>
        {isError ? <DefaultError onReset={onResetError} /> : children}
      </ErrorBoundary>
    </SafeAreaView>
  );
}

export default SafeScreen;
