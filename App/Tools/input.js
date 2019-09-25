import _ from 'lodash';
import { getItem } from './asyncStorage';
import Storage from '../config/storage';

export function validateEmpty(text) {
  if (_.trim(text).length > 0) return true;
  return false;
}

export async function validateBlockWords(text) {
  const uppercaseText = _.upperCase(text);
  const blockWords = await getItem(Storage.BLOCK_WORDS);
  if (_.isEmpty(blockWords)) {
    return true;
  }
  const invalidWords = blockWords.filter((word) => {
    const uppercaseWord = _.upperCase(word);
    return uppercaseText.indexOf(uppercaseWord) !== -1;
  });
  return invalidWords.length === 0;
}
