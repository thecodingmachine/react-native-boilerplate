import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import { createAction } from '@reduxjs/toolkit'

// import rootSaga from 'App/Sagas'
import { reducer as startup } from './Startup/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    startup,
  })

  return configureStore(rootReducer /*, rootSaga*/)
}

const toCamel = (s) => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '')
  })
}

/**
 * We use Redux Toolkit's `createAction()` helper to easily create redux actions.
 *
 * @see https://redux-toolkit.js.org/api/createAction
 */
export const initHelper = (Types) => {
  const actions = Object.entries(Types).reduce(
    (acc, [key, type]) => ({
      ...acc,
      [key]: createAction(toCamel(key), type),
    }),
    {},
  )
  const types = Object.keys(Types).reduce(
    (acc, type) => ({ ...acc, [type]: type }),
    {},
  )
  return [actions, types]
}
