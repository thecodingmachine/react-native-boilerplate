import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNav from 'App/Navigator'
import { connect } from 'react-redux'
import StartupActions from './actions'
import RootScreen from 'App/Screens/Root'

class RootContainer extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup()
  }

  render() {
    return (
      <RootScreen>
        <AppNav
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </RootScreen>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer)
