module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    ['module-resolver', {
      alias: {
        'react-native': './mocks/react-native-mock',
      },
    }],
  ],
};
