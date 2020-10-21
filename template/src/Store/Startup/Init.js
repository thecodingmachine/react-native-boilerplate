import { buildAction, buildReducers } from '@/Store/builder'
import FetchOne from '@/Store/User/FetchOne'

export default {
  initialState: { loading: false, error: null },
  action: buildAction('startup/init', async (args, { dispatch }) => {
    // Here we load the user 1 for example, but you can for example load the connected user
    await dispatch(FetchOne.action(1))
  }),
  reducers: buildReducers({ itemKey: null }), // We do not want to modify some item by default
}
