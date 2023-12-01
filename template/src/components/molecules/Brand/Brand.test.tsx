import { ViewStyle } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';

import Brand from './Brand';

describe('Brand component should render correctly', () => {
	let storage: MMKV;

	beforeAll(() => {
		storage = new MMKV();
	});

	test('with default props if not precises (height: 200, width: 200, resizeMode: "contain")', () => {
		const component = (
			<ThemeProvider storage={storage}>
				<Brand />
			</ThemeProvider>
		);

		render(component);

		const wrapper = screen.getByTestId('brand-img-wrapper');
		const img = screen.getByTestId('brand-img');

		// Props set correctly
		expect((wrapper.props.style as ViewStyle).height).toBe(200);
		expect((wrapper.props.style as ViewStyle).width).toBe(200);
		expect(img.props.resizeMode).toBe('contain');
	});

	test('with passed props', () => {
		const component = (
			<ThemeProvider storage={storage}>
				<Brand height={100} width={100} mode="cover" />
			</ThemeProvider>
		);

		render(component);

		const wrapper = screen.getByTestId('brand-img-wrapper');
		const img = screen.getByTestId('brand-img');

		expect((wrapper.props.style as ViewStyle).height).toBe(100);
		expect((wrapper.props.style as ViewStyle).width).toBe(100);
		expect(img.props.resizeMode).toBe('cover');
	});
});
