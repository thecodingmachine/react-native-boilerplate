import { combineReducers } from 'redux'

export default combineReducers({
  fetchOne: require('./FetchOne').default.reducer,
})
