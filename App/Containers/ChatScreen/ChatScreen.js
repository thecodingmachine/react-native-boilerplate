import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

export default class ChatScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Text>This is chat screen which can be accessed using boilerplate://chat scheme!</Text>
      </View>
    )
  }
  
}
