import React from 'react'
import { Text, View } from 'react-native'
import styles from './SplashScreenStyle'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text>LOGO</Text>
        </View>
      </View>
    )
  }
}
