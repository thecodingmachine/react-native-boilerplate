import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchTemperature } from './ExampleSaga'
import { startup } from './StartupSaga'

export default function* root() {
  console.log('index.js saga')
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchTemperature()` when a `FETCH_TEMPERATURE` action is triggered
    takeLatest(ExampleTypes.FETCH_TEMPERATURE, fetchTemperature),
  ])
}