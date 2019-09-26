import { createActions } from 'reduxsauce';

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/Example/Reducers.js
 * - to trigger sagas, for example in App/Sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in @App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/ExampleSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  // This action triggered when the app requires user to wait.
  onLoading: ['isLoading'],

  // This action triggered when the app go to foreground or background.
  onStateChange: ['currentState'],

  // This action triggered when the app stars or it's locale option is changed.
  onLocaleChange: { currentLocales: null, currentTimeZone: '' },

  // This action triggered when the app stars, to get current app version.
  onVersionChange: { appVersion: '', buildVersion: '', bundleIdentifier: '' },
});

export const AppStateTypes = Types;
export default Creators;
