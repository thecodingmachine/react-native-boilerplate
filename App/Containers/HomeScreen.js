import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.refreshTemperature()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>
          The weather temperature is: {this.props.temperature}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
})

HomeScreen.propsTypes = {
  temperature: PropTypes.number,
}

const mapStateToProps = (state) => ({
  temperature: state.example.get('weatherTemperature'),
})

const mapDispatchToProps = (dispatch) => ({
  refreshTemperature: () => dispatch(ExampleActions.requestWeatherTemperature()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
