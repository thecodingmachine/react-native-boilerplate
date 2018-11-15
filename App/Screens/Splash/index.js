import React from 'react'
import { Text, View } from 'react-native'
import styles from './SplashScreenStyle'

const SplashScreen = () => (
  <View style={styles.container}>
    <View style={styles.logo}>
      {/* You will probably want to insert your logo here */}
      <Text>LOGO</Text>
    </View>
  </View>
)

export default SplashScreen
