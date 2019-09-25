import { fromJS } from 'immutable';
import {
  ActionConst,
  Actions,
} from 'react-native-router-flux';

import {
  route,
} from '../utils';

const initialState = {
  scene: {
    drawer: 'DrawerClose',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        ...action,
        routeName: route.getRoutePrefix(action.routeName),
        scene: {
          sceneKey: route.getRoutePrefix(action.routeName),
          drawer: 'DrawerClose',
        },
      };
    case 'Navigation/NAVIGATE':
      return {
        ...state,
        ...action,
        routeName: route.getRoutePrefix(action.routeName),
        scene: {
          ...state.scene,
          // drawer: action.routeName,
        },
      };
    // case 'REACT_NATIVE_ROUTER_FLUX_FOCUS':
    //   return {
    //     ...state,
    //     ...action,
    //     routeName: action.routeName === ''
    //       ? state.routeName
    //       : route.getRoutePrefix(action.routeName),
    //   };
    // case 'Navigation/COMPLETE_TRANSITION':
    //   return state;
    default:
      return {
        ...state,
        ...action,
        prevRoute: route.getRoutePrefix(Actions.prevScene),
        routeName: route.getRoutePrefix(action.routeName),
      };
  }
};
