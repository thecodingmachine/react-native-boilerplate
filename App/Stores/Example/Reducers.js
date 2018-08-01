import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'

/**
 * Example of a reducer that updates the `temperature` property.
 */
export const updateWeatherTemperature = (state, { temperature }) =>
  state.merge({
    weatherTemperature: temperature,
  })

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.UPDATE_WEATHER_TEMPERATURE]: updateWeatherTemperature,
})
