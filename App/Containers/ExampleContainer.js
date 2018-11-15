import React from 'react'
import { Platform } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { isHot } from 'App/Stores/Example/Selectors'
import ExampleScreen from 'App/Screens/Example'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class ExampleContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTemperature()
  }

  render() {
    let temperature = this.props.temperatureIsLoading ? '...' : this.props.temperature
    if (temperature === null) {
      temperature = '??'
    }

    return (
      <ExampleScreen
        instructions={instructions}
        temperature={temperature}
        isHot={this.props.isHot}
        temperatureErrorMessage={this.props.temperatureErrorMessage}
        onPress={() => this.props.fetchTemperature()}
      />
    )
  }
}

ExampleContainer.propsTypes = {
  temperature: PropTypes.number,
  temperatureErrorMessage: PropTypes.string,
  temperatureIsLoading: PropTypes.bool,
  isHot: PropTypes.bool,
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
)(ExampleContainer)
