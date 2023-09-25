import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from './navigators/Application';
import ThemeProvider from '@/components/organisms/ThemeProvider/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './translations';
import { storage } from '@/storage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider storage={storage}>
      <ApplicationNavigator />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
