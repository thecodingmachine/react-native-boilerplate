import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'

/**
 * Example of a reducer that updates the `temperature` property.
 */
export const updateTemperature = (state, { temperature }) =>
  state.merge({
    temperature: temperature,
    temperatureErrorMessage: null,
  })

/**
 * Example of a reducer that updates the `temperatureErrorMessage` property.
 */
export const showErrorMessage = (state, { errorMessage }) =>
  state.merge({
    temperature: '??',
    temperatureErrorMessage: errorMessage,
  })

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_TEMPERATURE_SUCCESS]: updateTemperature,
  [ExampleTypes.FETCH_TEMPERATURE_FAILURE]: showErrorMessage,
})
