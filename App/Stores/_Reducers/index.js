import { combineReducers } from 'redux';

import Loading from './Loading';
import Routes from './Routes';
import AppState from './AppState';

export default combineReducers({
  AppState,
  Loading,
  Routes,
});
