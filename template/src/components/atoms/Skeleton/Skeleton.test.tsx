import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

import TestAppWrapper from '@/tests/TestAppWrapper';

import SkeletonLoader from './Skeleton';

const WAIT = 800;

describe('SkeletonLoader', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('renders children when not loading', () => {
    render(
      <SkeletonLoader loading={false}>
        <Text>Loaded Content</Text>
      </SkeletonLoader>,
      {
        wrapper: TestAppWrapper,
      },
    );
    expect(screen.getByText('Loaded Content')).toBeTruthy();
  });

  it('renders skeleton when loading', () => {
    render(<SkeletonLoader loading />, {
      wrapper: TestAppWrapper,
    });
    const skeleton = screen.getByTestId('skeleton-loader');
    jest.advanceTimersByTime(WAIT);
    expect(skeleton).toBeTruthy();
  });

  it('applies correct height and width', () => {
    render(<SkeletonLoader height={50} loading width={100} />, {
      wrapper: TestAppWrapper,
    });
    const skeleton = screen.getByTestId('skeleton-loader');

    const animatedStyle: {
      value: { opacity: number };
    } = skeleton.props.jestAnimatedStyle as {
      value: { opacity: number };
    };
    // TODO: use toHaveAnimatedStyle for better API but for now there is an issue with the library
    // expect(skeleton).toHaveAnimatedStyle({
    //   opacity: 0.2,
    // });

    expect(animatedStyle.value).toEqual({
      opacity: 0.2,
    });

    jest.advanceTimersByTime(WAIT);
    expect(animatedStyle.value).toEqual({
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
