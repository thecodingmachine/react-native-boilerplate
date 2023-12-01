import { fireEvent, render, screen } from '@testing-library/react-native';
import { MMKV } from 'react-native-mmkv';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@/theme';
import i18n from '@/translations';

import Example from './Example';

describe('Example screen should render correctly', () => {
	let storage: MMKV;
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				gcTime: Infinity,
			},
			mutations: {
				gcTime: Infinity,
			},
		},
	});

	beforeAll(() => {
		storage = new MMKV();
	});

	test('the user change the language', () => {
		const component = (
			<ThemeProvider storage={storage}>
				<I18nextProvider i18n={i18n}>
					<QueryClientProvider client={queryClient}>
						<Example />
					</QueryClientProvider>
				</I18nextProvider>
			</ThemeProvider>
		);

		render(component);

		expect(i18n.language).toBe('en');

		const button = screen.getByTestId('change-language-button');
		expect(button).toBeDefined();
		fireEvent.press(button);

		expect(i18n.language).toBe('fr');
	});

	test('the user change the theme', () => {
		const component = (
			<ThemeProvider storage={storage}>
				<I18nextProvider i18n={i18n}>
					<QueryClientProvider client={queryClient}>
						<Example />
					</QueryClientProvider>
				</I18nextProvider>
			</ThemeProvider>
		);

		render(component);

		expect(storage.getString('theme')).toBe('default');

		const button = screen.getByTestId('change-theme-button');
		expect(button).toBeDefined();
		fireEvent.press(button);

		expect(storage.getString('theme')).toBe('dark');
	});
});
