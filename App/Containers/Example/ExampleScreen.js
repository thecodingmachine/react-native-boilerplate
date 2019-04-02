import React from 'react'
import { Platform, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ExampleScreenStyle'

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

class ExampleScreen extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    let isLoading = this.props.userIsLoading ? 'Data are loading...' : ''
    let user = this.props.user
    let error = this.props.userErrorMessage
    let result = null
    if (user && !error) {
      result =
        "I'm a fake user, my name is " +
        user.name +
        '.\n' +
        (this.props.liveInEurope ? 'I live in Europe !' : "I don't live in Europe.")
    }

    return (
      <View style={Style.container}>
        <Text style={Style.title}>TheCodingMachine boilerplate</Text>
        <Text style={Style.text}>To get started, edit App.js</Text>
        <Text style={Style.instructions}>{instructions}</Text>
        <Text style={Style.loading}>{isLoading}</Text>
        {user && !error ? (
          <Text style={Style.result}>{result}</Text>
        ) : (
          <Text style={Style.error}>{error}</Text>
        )}
        <Button onPress={this.props.fetchUser} title="Refresh" />
      </View>
    )
  }
}

ExampleScreen.propsTypes = {
  user: PropTypes.number,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)
