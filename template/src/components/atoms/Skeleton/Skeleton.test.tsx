import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import TestAppWrapper from '@/../__mocks__/TestAppWrapper';

import SkeletonLoader from './Skeleton';

describe('SkeletonLoader', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('renders children when not loading', () => {
    const { getByText } = render(
      <SkeletonLoader loading={false}>
        <Text>Loaded Content</Text>
      </SkeletonLoader>,
      {
        wrapper: TestAppWrapper,
      },
    );
    expect(getByText('Loaded Content')).toBeTruthy();
  });

  it('renders skeleton when loading', () => {
    const { getByTestId } = render(<SkeletonLoader loading />, {
      wrapper: TestAppWrapper,
    });
    const skeleton = getByTestId('skeleton-loader');
    jest.advanceTimersByTime(800);
    expect(skeleton).toBeTruthy();
  });

  it('applies correct height and width', () => {
    const { getByTestId } = render(
      <SkeletonLoader height={50} loading width={100} />,
      { wrapper: TestAppWrapper },
    );
    const skeleton = getByTestId('skeleton-loader');
    // TODO: use toHaveAnimatedStyle for better API but for now there is an issue with the library
    // expect(skeleton).toHaveAnimatedStyle({
    //   opacity: 0.2,
    // });

    expect(skeleton.props.jestAnimatedStyle.value).toEqual({
      opacity: 0.2,
    });

    jest.advanceTimersByTime(800);
    expect(skeleton.props.jestAnimatedStyle.value).toEqual({
      opacity: 1,
    });
    // TODO: use toHaveAnimatedStyle for better API but for now there is an issue with the library
    // expect(skeleton).toHaveAnimatedStyle({
    //   opacity: 1,
    // });
    expect(skeleton).toHaveStyle({
      backgroundColor: '#A1A1A1',
      borderRadius: 4,
      height: 50,
      width: 100,
    });
  });
});
