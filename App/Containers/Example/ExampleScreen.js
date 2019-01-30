import React from 'react'
import { Platform, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { isHot } from 'App/Stores/Example/Selectors'
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
    let user = this.props.userIsLoading ? '...' : this.props.user
    if (user === null) {
      user = '??'
    }

    return (
      <View style={Style.container}>
        <Text style={Style.title}>TheCodingMachine boilerplate</Text>
        <Text style={Style.text}>To get started, edit App.js</Text>
        <Text style={Style.text}>{instructions}</Text>
        <Text style={Style.text}>
          {user === '...'
            ? 'Data are loading...'
            : this.props.userErrorMessage
              ? this.props.userErrorMessage
              : ''}
        </Text>
        <Text style={Style.text}>{user ? "I'm a fake user, my name is " + user.name : ''}.</Text>
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
  user: state.example.get('user').toJS(),
  userIsLoading: state.example.get('userIsLoading'),
  userErrorMessage: state.example.get('userErrorMessage'),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)
