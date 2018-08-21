import React from 'react'
import { Platform, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import StartupActions from 'App/Stores/Startup/Actions'
import { isHot } from 'App/Stores/Example/Selectors'
import Style from './ExampleScreenStyle'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class ExampleScreen extends React.Component {
  componentDidMount() {
    this.props.startup()
  }

  render() {
    let temperature = this.props.temperatureIsLoading ? '...' : this.props.temperature
    if (temperature === null) {
      temperature = '??'
    }

    return (
      <View style={Style.container}>
        <Text style={Style.title}>Welcome to React Native!</Text>
        <Text style={Style.text}>To get started, edit App.js</Text>
        <Text style={Style.text}>{instructions}</Text>
        <Text style={Style.text}>The weather temperature is: {temperature}</Text>
        <Text style={Style.text}>{this.props.isHot ? "It's pretty hot!" : ''}</Text>
        <Text style={Style.text}>{this.props.temperatureErrorMessage}</Text>
        <Button onPress={this.props.fetchTemperature} title="Refresh" />
      </View>
    )
  }
}

ExampleScreen.propsTypes = {
  temperature: PropTypes.number,
  temperatureErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  temperature: state.example.get('temperature'),
  temperatureErrorMessage: state.example.get('temperatureErrorMessage'),
  temperatureIsLoading: state.example.get('temperatureIsLoading'),
  isHot: isHot(state),
})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  fetchTemperature: () => dispatch(ExampleActions.fetchTemperature()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)
