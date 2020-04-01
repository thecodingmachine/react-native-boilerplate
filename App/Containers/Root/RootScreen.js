import * as React from 'react'
import { navigationRef, isMountedRef } from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'

import { NavigationContainer } from '@react-navigation/native'

function RootScreen() {
  React.useEffect(() => {
    isMountedRef.current = true

    return () => (isMountedRef.current = false)
  }, [])

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={Helpers.fill}>
        <AppNavigator
        // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
        />
      </View>
    </NavigationContainer>
  )
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)
