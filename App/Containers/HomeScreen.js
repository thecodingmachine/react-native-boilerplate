import React from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { isHot } from 'App/Stores/Example/Selectors'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.fetchTemperature()
  }

  render() {
    let temperature = this.props.temperatureIsLoading ? '...' : this.props.temperature
    if (temperature === null) {
      temperature = '??'
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.text}>{instructions}</Text>
        <Text style={styles.text}>The weather temperature is: {temperature}</Text>
        <Text style={styles.text}>{this.props.isHot ? "It's pretty hot!" : ''}</Text>
        <Text style={styles.text}>{this.props.temperatureErrorMessage}</Text>
        <Button onPress={this.props.fetchTemperature} title="Refresh" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  title: {
    ...Fonts.style.h1,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
})

HomeScreen.propsTypes = {
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
)(HomeScreen)
