import { RECEIVED_LOADING } from '../actions/loading';

export const initialState = {
  isOpen: false,
};

export const ACTION_HANDLERS = {
  [RECEIVED_LOADING]: (state = {}, action) => ({
    ...state,
    isOpen: action.bool,
  }),
};

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
