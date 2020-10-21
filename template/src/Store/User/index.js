import { buildSlice } from '@/Store/builder'

import FetchOne from './FetchOne'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const moduleInitialState = {
  item: {},
}

const user = buildSlice('user', [FetchOne], moduleInitialState)

export default user.reducer
