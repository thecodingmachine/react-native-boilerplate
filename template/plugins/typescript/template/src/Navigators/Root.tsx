/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import * as React from 'react'
import { CommonActions, NavigationContainerRef } from '@react-navigation/native'

export const navigationRef = React.createRef<NavigationContainerRef<any>>()

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params)
}

export function navigateAndReset(routes = [], index = 0) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  )
}

export function navigateAndSimpleReset(name: string, index = 0) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{ name }],
    }),
  )
}
