import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { I18nextProvider } from 'react-i18next';
import { MMKV } from 'react-native-mmkv';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SupportedLanguages } from '@/hooks/language/schema';
import { ThemeProvider } from '@/theme';
import i18n from '@/translations';

import Example from './Example';

describe('Example screen should render correctly', () => {
  let storage: MMKV;
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        gcTime: Infinity,
      },
      queries: {
        gcTime: Infinity,
        retry: false,
      },
    },
  });

  beforeAll(() => {
    storage = new MMKV();
  });

  test('the user change the language', () => {
    const component = (
      <SafeAreaProvider>
        <ThemeProvider storage={storage}>
          <I18nextProvider i18n={i18n}>
            <QueryClientProvider client={queryClient}>
              <Example />
            </QueryClientProvider>
          </I18nextProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    );

    render(component);

    expect(i18n.language).toBe(SupportedLanguages.FR_FR);

    const button = screen.getByTestId('change-language-button');
    expect(button).toBeDefined();
    fireEvent.press(button);

    expect(i18n.language).toBe(SupportedLanguages.EN_EN);
  });

  test('the user change the theme', () => {
    const component = (
      <SafeAreaProvider>
        <ThemeProvider storage={storage}>
          <I18nextProvider i18n={i18n}>
            <QueryClientProvider client={queryClient}>
              <Example />
            </QueryClientProvider>
          </I18nextProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    );

    render(component);

    expect(storage.getString('theme')).toBe('default');

    const button = screen.getByTestId('change-theme-button');
    expect(button).toBeDefined();
    fireEvent.press(button);

    expect(storage.getString('theme')).toBe('dark');
  });
});
