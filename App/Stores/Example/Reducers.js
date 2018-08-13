/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'

export const fetchTemperatureLoading = (state) =>
  state.merge({
    temperatureIsLoading: true,
    temperatureErrorMessage: '',
  })

export const fetchTemperatureSuccess = (state, { temperature }) =>
  state.merge({
    temperature: temperature,
    temperatureIsLoading: false,
    temperatureErrorMessage: null,
  })

export const fetchTemperatureFailure = (state, { errorMessage }) =>
  state.merge({
    temperature: null,
    temperatureIsLoading: false,
    temperatureErrorMessage: errorMessage,
  })

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_TEMPERATURE_LOADING]: fetchTemperatureLoading,
  [ExampleTypes.FETCH_TEMPERATURE_SUCCESS]: fetchTemperatureSuccess,
  [ExampleTypes.FETCH_TEMPERATURE_FAILURE]: fetchTemperatureFailure,
})
