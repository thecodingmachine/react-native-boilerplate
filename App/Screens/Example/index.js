import React from 'react'
import { Text, View, Button } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './ExampleScreenStyle'

const ExampleScreen = ({ instructions, temperature, isHot, temperatureErrorMessage, onPress }) => (
  <View style={Style.container}>
    <Text style={Style.title}>TheCodingMachine boilerplate</Text>
    <Text style={Style.text}>To get started, edit App.js</Text>
    <Text style={Style.text}>{instructions}</Text>
    <Text style={Style.text}>The weather temperature is: {temperature}</Text>
    <Text style={Style.text}>{isHot ? "It's pretty hot!" : ''}</Text>
    <Text style={Style.text}>{temperatureErrorMessage}</Text>
    <Button onPress={onPress} title="Refresh" />
  </View>
)

ExampleScreen.propsTypes = {
  instructions: PropTypes.string,
  temperature: PropTypes.number,
  isHot: PropTypes.boolean,
  temperatureErrorMessage: PropTypes.string,
  fetchTemperature: PropTypes.func,
}

ExampleScreen.defaultProps = {
  fetchTemperature: () => {},
}

export default ExampleScreen
