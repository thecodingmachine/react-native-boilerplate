import {
  buildAsyncState,
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'
import FetchOne from '@/Store/User/FetchOne'

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('startup/init', async (args, { dispatch }) => {
    // Here we load the user 1 for example, but you can for example load the connected user
    await dispatch(FetchOne.action(1))
  }),
  reducers: buildAsyncReducers({ itemKey: null }), // We do not want to modify some item by default
}
