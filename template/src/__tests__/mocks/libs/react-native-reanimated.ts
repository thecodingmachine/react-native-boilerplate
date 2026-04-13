// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-member-access
require('react-native-reanimated').setUpTests();

jest.mock('react-native-worklets', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return
  require('react-native-worklets/src/mock'),
);
