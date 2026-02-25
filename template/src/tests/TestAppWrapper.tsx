import { QueryClientProvider } from '@tanstack/react-query';
import { type PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ThemeProvider } from '@/theme';
import '@/translations';

import { queryClient, storage } from '../App';

function TestAppWrapper({ children }: PropsWithChildren) {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storage={storage}>{children}</ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default TestAppWrapper;
