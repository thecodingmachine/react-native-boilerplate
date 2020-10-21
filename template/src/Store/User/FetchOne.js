import fetchOneUserService from '@/Services/User/FetchOne'
import { buildAction, buildReducers } from '@/Store/builder'

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
