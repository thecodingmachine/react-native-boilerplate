import type { ViewStyle } from 'react-native';

import { render } from '@testing-library/react-native';

import TestAppWrapper from '@/../__mocks__/TestAppWrapper';

import Brand from './Brand';

describe('Brand component should render correctly', () => {
  test('with default props if not precises (height: 200, width: 200, resizeMode: "contain")', () => {
    const { getByTestId } = render(<Brand />, { wrapper: TestAppWrapper });

    const wrapper = getByTestId('brand-img-wrapper');
    const img = getByTestId('brand-img');

    // Props set correctly
    expect((wrapper.props.style as ViewStyle).height).toBe(200);
    expect((wrapper.props.style as ViewStyle).width).toBe(200);
    expect(img.props.resizeMode).toBe('contain');
  });

  test('with passed props', () => {
    const { getByTestId } = render(
      <Brand height={100} resizeMode="cover" width={100} />,
      { wrapper: TestAppWrapper },
    );

    const wrapper = getByTestId('brand-img-wrapper');
    const img = getByTestId('brand-img');

    expect((wrapper.props.style as ViewStyle).height).toBe(100);
    expect((wrapper.props.style as ViewStyle).width).toBe(100);
    expect(img.props.resizeMode).toBe('cover');
  });
});
