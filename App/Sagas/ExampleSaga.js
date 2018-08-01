import { put } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch the weather temperature.
 */
export function* fetchWeatherTemperature() {
  // Fetch the temperature from an API (in this example we hardcode 24 degrees)
  const temperature = 24

  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.updateWeatherTemperature(temperature))
}
