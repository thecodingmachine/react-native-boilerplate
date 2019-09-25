/* eslint-disable global-require */
export const { ScaledSheet } = require('react-native-size-matters/extend');

export const AsyncStorage = require('./asyncStorage');
export const Screen = require('./screen').default;
export const route = require('./route').default;

export default {
  AsyncStorage,
  ScaledSheet,
  Screen,
  route,
};
