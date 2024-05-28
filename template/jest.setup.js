// import 'whatwg-fetch';
import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-reanimated', () =>
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	require('react-native-reanimated/mock'),
);

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
