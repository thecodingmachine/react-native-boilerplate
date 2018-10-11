import { takeLatest, put, call } from 'redux-saga/effects'
import ExampleActions, { ExampleTypes } from './actions'
import { WeatherService } from 'App/Services/WeatherService'

export function* fetchTemperatureWorker() {
  yield put(ExampleActions.fetchTemperatureLoading())

  const temperature = yield call(WeatherService.fetchTemperature)

  if (temperature) {
    yield put(ExampleActions.fetchTemperatureSuccess(temperature))
  } else {
    yield put(
      ExampleActions.fetchTemperatureFailure('There was an error while fetching the temperature.')
    )
  }
}

export function* exampleWatcher() {
  yield takeLatest(ExampleTypes.FETCH_TEMPERATURE, fetchTemperatureWorker)
}

export default {
  exampleWatcher,
}
