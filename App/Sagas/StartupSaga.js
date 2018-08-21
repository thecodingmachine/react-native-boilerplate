import { put } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.fetchTemperature())
}
