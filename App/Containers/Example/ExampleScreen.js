import React from 'react'
import { Platform, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { isHot } from 'App/Stores/Example/Selectors'
import i18n from 'App/Locales/i18n'
import Style from './ExampleScreenStyle'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and shows the weather temperature.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: i18n.t('welcome.instructions.ios'),
  android: i18n.t('welcome.instructions.android'),
})

class ExampleScreen extends React.Component {
  componentDidMount() {
    this.props.fetchTemperature()
  }

  render() {
    let temperature = this.props.temperatureIsLoading ? '...' : this.props.temperature
    if (temperature === null) {
      temperature = '??'
    }

    return (
      <View style={Style.container}>
        <Text style={Style.title}>{i18n.t('welcome.title')}</Text>
        <Text style={Style.text}>{i18n.t('welcome.toGetStarted')}</Text>
        <Text style={Style.text}>{instructions}</Text>
        <Text style={Style.text}>{`${i18n.t('welcome.temperatureIs')} : ${temperature}`}</Text>
        <Text style={Style.text}>{this.props.isHot ? i18n.t('welcome.isHot') : ''}</Text>
        <Text style={Style.text}>{this.props.temperatureErrorMessage}</Text>
        <Button onPress={this.props.fetchTemperature} title={i18n.t('general.refresh')} />
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
  fetchTemperature: () => dispatch(ExampleActions.fetchTemperature()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)