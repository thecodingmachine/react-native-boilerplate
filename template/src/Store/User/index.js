import { combineReducers } from 'redux'
import FetchOneReducer from './FetchOne'

export default combineReducers({
  fetchOne: FetchOneReducer,
})
