import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

import { encrypt, decrypt } from './aes';

const STORAGE_PREFIX = '@App:';

export async function setItem(key, data) {
  try {
    let stringify = JSON.stringify(data);
    stringify = encrypt(stringify);
    await AsyncStorage.setItem(STORAGE_PREFIX + key, stringify);
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
}

export async function getItem(key) {
  try {
    let value = await AsyncStorage.getItem(STORAGE_PREFIX + key);
    // console.log('getItem value=>', value);
    if (value !== null && typeof value === 'string') {
      value = JSON.parse(decrypt(value));
      return value === {} ? null : value;
    }
  } catch (error) {
    console.warn(error);
  }
  return null;
}

export async function removeItem(key) {
  await AsyncStorage.removeItem(STORAGE_PREFIX + key);
}

export async function clear() {
  await AsyncStorage.clear();
}
