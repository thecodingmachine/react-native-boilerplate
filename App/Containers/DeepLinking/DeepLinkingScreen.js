import React from 'react'
import { Text, View } from 'react-native'
import { Helpers, Metrics } from 'App/Theme'

/**
 * This is an example of a container component with a deep link.
 */
const DeepLinkingScreen = () => (
  <View style={[Helpers.fillCenter, Helpers.rowMain, Metrics.mediumHorizontalMargin]}>
    <Text>
      This is deep linking example screen which can be accessed using boilerplate://deeplink scheme!
    </Text>
  </View>
)

export default DeepLinkingScreen
