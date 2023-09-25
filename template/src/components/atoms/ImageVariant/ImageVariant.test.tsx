import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ImageVariant from './ImageVariant';
import ThemeProvider from '@/components/organisms/ThemeProvider/ThemeProvider';
import { MMKV } from 'react-native-mmkv';

describe('ImageVariant component should render correctly', () => {
  let storage: MMKV;

  beforeAll(() => {
    storage = new MMKV();
  });

  test('with only default image and dark variant. Should return default source', () => {
    const component = (
      <ThemeProvider storage={storage}>
        <ImageVariant source={require('@/theme/assets/images/tom_light.png')} />
      </ThemeProvider>
    );

    render(component);

    const wrapper = screen.getByTestId('variant-image');

    expect(wrapper.props.source).toBe(
      require('@/theme/assets/images/tom_light.png'),
    );
  });

  test('with default image dark image and dark variant. Should return dark source', () => {
    storage.set('theme', 'dark');

    const component = (
      <ThemeProvider storage={storage}>
        <ImageVariant
          source={require('@/theme/assets/images/tom_light.png')}
          sourceDark={require('@/theme/assets/images/tom_dark.png')}
        />
      </ThemeProvider>
    );

    render(component);

    const wrapper = screen.getByTestId('variant-image');

    expect(wrapper.props.source).toBe(
      require('@/theme/assets/images/tom_dark.png'),
    );
  });
});
