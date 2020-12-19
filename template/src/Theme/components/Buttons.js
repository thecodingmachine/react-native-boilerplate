import { StyleSheet } from 'react-native'

export default function ({ Colors, Gutters, Layout }) {
  const button = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 40,
    backgroundColor: Colors.primary,
  }
  const buttonRounded = {
    ...button,
    borderRadius: 20,
  }

  return StyleSheet.create({
    button,
    buttonRounded,
    buttonOutline: {
      ...button,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    buttonOutlineRounded: {
      ...buttonRounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
  })
}
