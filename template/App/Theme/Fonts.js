/**
 * This file contains all application's style relative to fonts
 */

import { StyleSheet } from 'react-native'
import { fontSize } from './Variables'

export default StyleSheet.create({
  textSmall: {
    fontSize: fontSize.small,
  },
  textRegular: {
    fontSize: fontSize.regular,
  },
  textLarge: {
    fontSize: fontSize.large,
  },
  titleSmall: {
    fontSize: fontSize.small * 2,
    fontWeight: 'bold',
  },
  titleMedium: {
    fontSize: fontSize.small * 2,
    fontWeight: 'bold',
  },
  titleLarge: {
    fontSize: fontSize.small * 2,
    fontWeight: 'bold',
  },
})
