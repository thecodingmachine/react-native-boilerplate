import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

export function getRoutePrefix(route = Actions.currentScene) {
  const prefix = _.split(route, '_', 1)[0];
  return prefix;
}

export default {
  getRoutePrefix,
};
