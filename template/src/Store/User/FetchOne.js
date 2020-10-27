import { buildAction, buildReducers } from '@thecodingmachine/redux-toolkit-wrapper'
import fetchOneUserService from '@/Services/User/FetchOne'

export default {
  initialState: {
    // Optionally, you can scope variables
    fetchOne: { loading: false, error: null },
  },
  action: buildAction('user/fetchOne', fetchOneUserService),
  reducers: buildReducers({
    errorKey: 'fetchOne.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'fetchOne.loading',
  }),
}
