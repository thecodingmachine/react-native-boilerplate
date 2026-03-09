module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native': './mocks/react-native-mock',
        },
      },
    ],
  ],
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
};
