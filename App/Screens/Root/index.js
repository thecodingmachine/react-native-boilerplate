import React from 'react'
import { View } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './RootScreenStyle'

const RootScreen = ({ children }) => <View style={styles.container}>{children}</View>

RootScreen.propsTypes = {
  children: PropTypes.node,
}

export default RootScreen
