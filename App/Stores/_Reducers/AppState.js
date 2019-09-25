import { ON_APP_STATE_UPDATE } from '../actions/appState';

export const initialState = {
  state: 'active',
};

export const ACTION_HANDLERS = {
  [ON_APP_STATE_UPDATE]: (state = {}, action) => ({
    ...state,
    ...action.data,
  }),
};

export default function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
