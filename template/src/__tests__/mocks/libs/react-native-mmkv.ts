jest.mock('react-native-nitro-modules', () => {
  return {
    NitroModules: () => {
      return {};
    },
  };
});
