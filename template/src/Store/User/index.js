import { buildSlice } from '@/Store/builder'

import * as fetchOne from './FetchOne'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const moduleInitialState = {
  item: {},
}

const user = buildSlice('user', [fetchOne], moduleInitialState)

export default user.reducer
