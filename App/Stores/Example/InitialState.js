import { Map, List } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = Map({
  user: List(),
  userIsLoading: false,
  userErrorMessage: null,
})
