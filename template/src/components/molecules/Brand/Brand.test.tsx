import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Brand from './Brand';
import ThemeProvider from '@/components/organisms/ThemeProvider/ThemeProvider';
import { MMKV } from 'react-native-mmkv';

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
    expect(wrapper.props.style.height).toBe(200);
    expect(wrapper.props.style.width).toBe(200);
    expect(img.props.resizeMode).toBe('contain');
  });

  test('with precises props', () => {
    const component = (
      <ThemeProvider storage={storage}>
        <Brand height={100} width={100} mode="cover" />
      </ThemeProvider>
    );

    render(component);

    const wrapper = screen.getByTestId('brand-img-wrapper');
    const img = screen.getByTestId('brand-img');

    expect(wrapper.props.style.height).toBe(100);
    expect(wrapper.props.style.width).toBe(100);
    expect(img.props.resizeMode).toBe('cover');
  });
});
