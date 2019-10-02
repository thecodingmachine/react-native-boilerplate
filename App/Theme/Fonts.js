import { StyleSheet } from 'react-native'

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
}

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
})
