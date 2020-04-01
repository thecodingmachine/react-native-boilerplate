import * as React from 'react'
import { CommonActions } from '@react-navigation/native'
/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */

/**
 * This function is called when the RootScreen is created to set the navigator instance to use.
 */
export const isMountedRef = React.createRef()

export const navigationRef = React.createRef()

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
export function navigate(name, params) {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params)
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

/**
  
  TODO: Should be tested thoroughly from other screens as well. 

 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 
*/

export function navigateAndReset(routeName, params) {
  navigationRef.current.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params: params,
        },
      ],
    })
  )
}
