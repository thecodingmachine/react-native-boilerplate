/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { ActionConst, Actions } from 'react-native-router-flux';
import { INITIAL_STATE } from './InitialState';
import { getRoutePrefix } from './Helpers';

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        ...action,
        routeName: getRoutePrefix(action.routeName),
        scene: {
          sceneKey: getRoutePrefix(action.routeName),
          drawer: 'DrawerClose',
        },
      };
    case 'Navigation/NAVIGATE':
      return {
        ...state,
        ...action,
        routeName: getRoutePrefix(action.routeName),
        scene: {
          ...state.scene,
        },
      };
    default:
      return {
        ...state,
        ...action,
        prevRoute: getRoutePrefix(Actions.prevScene),
        routeName: getRoutePrefix(action.routeName),
      };
  }
};
