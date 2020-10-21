import fetchOneUserService from '@/Services/User/FetchOne'
import { buildAction, buildReducers } from '@/Store/builder'

export const initialState = {
  fetchOne: { loading: false, error: null },
}
export const actions = buildAction('user/fetchOne', fetchOneUserService)
export const reducers = buildReducers({
  errorKey: 'fetchOne.error',
  loadingKey: 'fetchOne.loading',
})
