import { takeLatest } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { fetchWeatherTemperature } from './ExampleSaga'

export default function* root() {
  yield [
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Call `fetchWeatherTemperature()` when a `REQUEST_WEATHER_TEMPERATURE` action is triggered
    takeLatest(ExampleTypes.REQUEST_WEATHER_TEMPERATURE, fetchWeatherTemperature),
  ]
}
