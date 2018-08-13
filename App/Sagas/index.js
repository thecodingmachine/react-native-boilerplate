import { takeLatest } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { fetchTemperature } from './ExampleSaga'

export default function* root() {
  yield [
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Call `fetchTemperature()` when a `FETCH_TEMPERATURE` action is triggered
    takeLatest(ExampleTypes.FETCH_TEMPERATURE, fetchTemperature),
  ]
}
